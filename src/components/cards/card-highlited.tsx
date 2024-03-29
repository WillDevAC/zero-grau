interface ICardHighlitedProps {
  path: string;
  title: string;
  price: string;
  porcentDiscont: string;
  description: string;
  isFreeShipping: boolean;
}

export function CardHighlited({
  path,
  title,
  price,
  porcentDiscont,
  description,
}: ICardHighlitedProps) {
  return (
    <article className="bg-white-200 border min-w-[210px] min-h-52 rounded-md">
      <div
        className="w-full h-32 bg-gray-400 rounded-md"
        style={{
          backgroundImage: `url(${path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col p-3 gap-1">
        <span className="text-sm text-green-500">A parti de R$ {price}</span>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-14 h-6 bg-green-500 text-white rounded text-sm">
            -{porcentDiscont}
          </div>
        </div>

        <div className="pt-1">
          <h1 className="text-md font-semibold uppercase">{title}</h1>
          <span className="text-xs text-gray-500">{description}</span>
        </div>
      </div>
    </article>
  );
}
