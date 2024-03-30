"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";

import { Loading } from "../ui/loading";
import { useToast } from "../../hooks/use-toast";
import { useRouter } from "next/navigation";
import { useStore } from "@/stores/auth.store";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

//@ts-ignore
import cookieCutter from 'cookie-cutter';

import { isAxiosError } from "axios";

import api from "@/lib/api";

interface LoginFormData {
  email: string;
  password: string;
}

const onLoginError = (error: any, toast: any) => {
  if (isAxiosError(error)) {
    if (error.response && error.response.data && error.response.data.message) {
      toast({
        title: "ZERO GRAU - DELIVERY",
        description: "Network error.",
      });
    } else {
      toast({
        title: "ZERO GRAU - DELIVERY",
        description: "Network error.",
      });
    }
  }
};

async function loginUser(credentials: LoginFormData) {
  const { email, password } = credentials;

  const formData = new FormData();

  formData.append("email", email);
  formData.append("password", password);

  try {
    const response = await api.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
}

export function LoginForm() {
  const { toast } = useToast();
  const { push } = useRouter();

  const { setUser, setToken } = useStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const loginMutation = useMutation(loginUser);

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userData = await loginMutation.mutateAsync(data);

      if (userData.message) {
        toast({
          title: "ZERO GRAU - DELIVERY",
          description: userData.message,
        });
        return;
      }

      setUser(userData.user);
      setToken(userData.token);

      push('/');
    } catch (error) {
      onLoginError(error, toast);
    }
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-5 pr-10 pl-10 md:pr-36 md:pl-36 pt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email: </Label>
          <Input
            placeholder="Seu e-mail"
            id="email"
            type="email"
            {...register("email", { required: "E-mail é obrigatório" })}
          ></Input>
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha: </Label>
          <Input
            placeholder="Sua senha"
            id="password"
            type="password"
            {...register("password", { required: "Senha é obrigatória" })}
          ></Input>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <Button disabled={loginMutation.isLoading}>
          {loginMutation.isLoading ? <Loading color="black"/> : "Entrar"}
        </Button>
      </form>
      <section className="flex w-full gap-1 items-center justify-center pt-5">
        Não possui uma conta?{" "}
        <Link href="/auth/register" className="font-bold">
          Cadastra-se
        </Link>
      </section>
    </>
  );
}
