import { formatPrice } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ICardProductProps {
  idProduct: string;
  path: string;
  title: string;
  description: string;
  price: string;
}

export function CardProduct({
  idProduct,
  path,
  title,
  description,
  price,
}: ICardProductProps) {
  return (
    <Link
      className="relative border border-gray-200 transition-all duration-500 ease-in-out p-4 rounded flex hover:border-gray-300 outline-none focus:border-dv-theme-300/50"
      href={`/product/${idProduct}`}
    >
      <div className="flex flex-col flex-1 mr-2">
        <h3 className="mb-2 text-base font-medium line-clamp-1 lg:text-lg lg:line-clamp-2">
          {title}
        </h3>
        <p className="mb-2 text-xs lg:text-sm text-black text-opacity-75 line-clamp-2 lg:line-clamp-3 text-ellipsis break-word">
          {description}
        </p>

        <div className="mt-auto">
          <span className="text-sm font-medium lg:text-base">
            {formatPrice(price)}
          </span>
        </div>
      </div>
      <Image
        alt={title}
        className="object-cover rounded w-24 h-24 lg:w-40 lg:h-40 ml-auto"
        src={path}
        loading="lazy"
        width={1000}
        height={1000}
      />

      <div className="absolute flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md bottom-2 right-2">
        <Plus size={15} />
      </div>
    </Link>
  );
}
