interface IAppLayout {
  children: React.ReactNode;
}

export function AuthLayout({ children }: IAppLayout) {
  return (
    <div className="h-screen w-screen grid place-items-start justify-center">
      <section className="bg-white flex flex-col items-center justify-center w-screen h-screen max-w-[700px]">
        {children}
      </section>
    </div>
  );
}
