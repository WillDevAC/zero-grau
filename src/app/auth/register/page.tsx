import { AuthLayout } from "@/_layouts/auth_layout";
import { RegisterForm } from "@/components/forms/register-form";

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
      <RegisterForm />
    </AuthLayout>
  );
}
