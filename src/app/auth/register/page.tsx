import Link from "next/link";

import { AuthLayout } from "@/_layouts/auth_layout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="flex gap-3 pr-10 pl-10 md:pr-36 md:pl-36 pt-5 items-center">
        <img
          className="w-20 h-20 rounded-lg object-cover border"
          src="/estabelecimento.jpg"
          alt="ZeroGrau Sorveteria"
        />
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">Faça seu cadastro.</h1>
          <span className="text-xs">
            Para acompanhar seus últimos pedidos, ver informações salvas e ainda
            ter benefícios.
          </span>
        </div>
      </div>

      <form className="w-full flex flex-col gap-5 pr-10 pl-10 md:pr-36 md:pl-36 pt-5">
      <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nome: </Label>
          <Input placeholder="Seu nome: " id="name" type="text"></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email: </Label>
          <Input placeholder="Seu e-mail" id="email" type="email"></Input>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha: </Label>
          <Input placeholder="Sua senha" id="password" type="password"></Input>
        </div>
        <Button>Registre-se</Button>
      </form>
      <section className="flex w-full gap-1 items-center justify-center pt-5">
        Já possui uma conta?{" "}
        <Link href="/auth/login" className="font-bold">
          Faça login
        </Link>
      </section>
    </AuthLayout>
  );
}
