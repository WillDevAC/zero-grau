import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ICardHighlitedProps {
  idProduct: string;
  path: string;
  title: string;
  price: string;
  porcentDiscont: string;
  description: string;
  isFreeShipping: boolean;
}

export function CardHighlited({
  idProduct,
  path,
  title,
  price,
  porcentDiscont,
  description,
}: ICardHighlitedProps) {
  const maxlengthDescription = 50;

  const truncateDescription = (text: string, maxlengthDescription: number) => {
    if (text.length > maxlengthDescription) {
      return text.substring(0, maxlengthDescription) + "...";
    } else {
      return text;
    }
  };

  const truncatedDescription = truncateDescription(
    description,
    maxlengthDescription
  );

  return (
    <Link
      className="bg-white-200 border min-w-[210px] min-h-52 rounded-md"
      href={`/product/${idProduct}`}
    >
      <Image
        className="w-full h-32 rounded-md object-cover object-center"
        loading="lazy"
        src={path}
        alt={title}
        width={1000}
        height={1000}
      />
      <div className="flex flex-col p-3 gap-1">
        <span className="text-sm text-green-500">
          A partir de {formatPrice(price)}
        </span>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-14 h-6 bg-green-500 text-white rounded text-sm">
            -{porcentDiscont}%
          </div>
        </div>

        <div className="pt-1">
          <h1 className="text-md font-semibold uppercase">{title}</h1>
          <span className="text-[0.8rem] text-gray-500">
            {truncatedDescription}
          </span>
        </div>
      </div>
    </Link>
  );
}
