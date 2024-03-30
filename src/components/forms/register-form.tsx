"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

import { useToast } from "../../hooks/use-toast";
import { useRouter } from "next/navigation";
import { useStore } from "@/stores/auth.store";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

//@ts-ignore
import cookieCutter from "cookie-cutter";

import api from "@/lib/api";
import { Loading } from "../ui/loading";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

async function loginUser(credentials: RegisterFormData) {
  const { name, email, password } = credentials;

  const formData = new FormData();

  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await api.post("/register.php", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    alert("Network Error.");
    throw error;
  }
}

export function RegisterForm() {
  const { toast } = useToast();
  const { push } = useRouter();

  const { setUser, setToken } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const registerMutation = useMutation(loginUser);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const userData = await registerMutation.mutateAsync(data);

      if (userData.message) {
        toast({
          title: "ZERO GRAU - DELIVERY",
          description: userData.message,
        });
        return;
      }

      setUser(userData.user);
      setToken(userData.token);

      cookieCutter.set("@user-token", userData.token, {
        path: "/",
        expires: new Date(new Date().getTime() + 60 * 60 * 23 * 1000),
      });

      push("/");
    } catch (error) {
      toast({
        title: "ZERO GRAU - DELIVERY",
        description: "Network Error.",
      });
    }
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-5 pr-10 pl-10 md:pr-36 md:pl-36 pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome: </Label>
          <Input
            placeholder="Seu nome: "
            id="name"
            type="text"
            {...register("name", { required: "Nome é obrigatório." })}
          ></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email: </Label>
          <Input
            placeholder="Seu e-mail"
            id="email"
            type="email"
            {...register("email", { required: "E-mail é obrigatório. " })}
          ></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha: </Label>
          <Input
            placeholder="Sua senha"
            id="password"
            type="password"
            {...register("password", { required: "Senha é obrigatório. " })}
          ></Input>
        </div>
        <Button>
          {registerMutation.isLoading ? (
            <Loading color="black" />
          ) : (
            "Finalizar cadastro"
          )}
        </Button>
      </form>
      <section className="flex w-full gap-1 items-center justify-center pt-5">
        Já possui uma conta?{" "}
        <Link href="/auth/login" className="font-bold">
          Faça login
        </Link>
      </section>
    </>
  );
}
