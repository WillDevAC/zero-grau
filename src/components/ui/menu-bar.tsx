import { Home, ShoppingBasket, ShoppingCart } from "lucide-react";

export function MenuBar() {
  return (
    <div className="fixed bottom-0 z-20 w-full bg-white border-t shadow md:hidden pb-safe">
      <div className="container py-2.5 px-4 mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div className="grid grid-cols-3 w-full h-full">
            <a className="flex flex-col items-center justify-center" href="/">
              <Home className="h-5 w-5 " />

              <span className="text-xs font-medium text-dv-theme-600">
                Início
              </span>
            </a>
            <a
              className="flex flex-col items-center justify-center"
              href="/my/orders"
            >
              <ShoppingBasket className="h-5 w-5 text-gray-600" />

              <span className="text-xs font-medium text-gray-600">Pedidos</span>
            </a>
            <a
              className="flex flex-col items-center justify-center"
              href="/my/profile"
            >
              <ShoppingCart className="h-5 w-5 text-gray-600" />

              <span className="text-xs font-medium text-gray-600">
                Carrinho
              </span>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
