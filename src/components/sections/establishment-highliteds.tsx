"use client";

import { CardHighlited } from "../cards/card-highlited";

export function EstablishmentHighliteds() {
  return (
    <div className="flex flex-col gap-2 p-5 pt-1">
      <h1 className="font-bold text-lg pb-3">Destaques</h1>
      <div className="flex overflow-x-auto gap-3 no-scrollbar">
        <CardHighlited
          path="produto.jpg"
          title="PRODUTO 1"
          description="Pão brioche, hamburguer de queijo, cheedar"
          porcentDiscont="30%"
          price="0.00"
          isFreeShipping={false}
        />
        <CardHighlited
          path="produto.jpg"
          title="PRODUTO 2"
          description="Pão brioche, hamburguer de queijo, cheedar"
          porcentDiscont="20%"
          price="0.00"
          isFreeShipping={true}
        />
      </div>
    </div>
  );
}
