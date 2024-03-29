import { ChefHat, Star } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface IEstablishmentProps {
  path: string;
  name: string;
  timeShipping: string;
  rating: string;
  isOpen: boolean;
}

export function EstablishmentDetails({
  name = "",
  timeShipping = "",
  rating = "",
  isOpen = false,
  path = "",
}: IEstablishmentProps) {
  return (
    <>
      <section className="flex w-full pt-5 pb-3 p-5 gap-3 items-center">
        <Avatar>
          <AvatarImage src={path} alt="@ZeroGrau" />
          <AvatarFallback>ZG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col font-bold text-lg gap-1">
          <h1 className="text-lg font-extrabold uppercase">{name} </h1>
          <div className="flex items-center text-sm font-medium gap-3">
            {isOpen && (
              <h1 className="text-green-600 text-xs line-clamp-1">ABERTO</h1>
            )}
            {!isOpen && (
              <div className="flex items-center justify-start text-red-700">
                <span className="block w-2.5 h-2.5 bg-red-700 rounded-full"></span>
                <span className="ml-1 font-semibold leading-none">Fechado</span>
              </div>
            )}
            <div className="flex items-center gap-1 text-gray-500">
              <ChefHat size={15} />
              <p className="line-clamp-1 text-xs">{timeShipping}</p>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Star size={15} />
              <p className="line-clamp-1 text-xs">{rating}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
