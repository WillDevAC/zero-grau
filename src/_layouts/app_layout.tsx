import { MenuBar } from "@/components/ui/menu-bar";

interface IAppLayout {
  children: React.ReactNode;
}

export function AppLayout({ children }: IAppLayout) {
  return (
    <>
      <div className="h-screen w-screen grid place-items-start justify-center overflow-x-hidden overflow-y-auto">
        <section className="bg-white w-screen max-w-[700px]">
          {children}
        </section>
      </div>
      <MenuBar />
    </>
  );
}
