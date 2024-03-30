"use client";

import { useState } from "react";

import { EstablishmentBanner } from "@/components/sections/establishment-banner";
import { EstablishmentDetails } from "@/components/sections/establishment-details";

import { AppLayout } from "@/_layouts/app_layout";
import { CardHighlited } from "@/components/cards/card-highlited";
import { CardProduct } from "@/components/cards/card-product";
import { useQuery } from "react-query";
import { LoadingScreen } from "@/components/ui/loading-screen";

import api from "@/lib/api";

type Product = {
  product_id: string;
  product_name: string;
  description: string;
  price: string;
  image: string;
  isHighlited: string;
  discontPorcent: string;
};

type Category = {
  category_id: string;
  category_name: string;
  category_description: string;
  products: Product[];
};

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDataProducts = async () => {
    const response = await api.get<Category[]>("/get_feed_products.php");
    return response.data;
  };

  const { data, isLoading, isError } = useQuery<Category[]>(
    "getFeedProducts",
    fetchDataProducts
  );

  if (isError) {
    return <span>Erro ao carregar os produtos...</span>;
  }

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  const filteredCategories =
    data &&
    data.filter((category) =>
      category.products.some((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  return (
    <AppLayout>
      <EstablishmentBanner />
      <EstablishmentDetails
        isOpen={false}
        path="estabelecimento.jpg"
        name="Zero Grau Sorveteria"
        timeShipping="60 min"
        rating="5.0"
      />
      <section className="pt-4 p-5">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-black"
            placeholder="Busque por um produto"
            onChange={handleSearchChange}
            value={searchTerm}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.997-4.997M10 16a6 6 0 100-12 6 6 0 000 12z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-2 p-5 pt-1">
        {((filteredCategories && filteredCategories.length > 0) ||
          searchTerm === "") && (
          <div>
            {searchTerm === "" && (
              <>
                {!isLoading &&
                  data &&
                  data.some((category) =>
                    category.products.some(
                      (product) => product.isHighlited === "1"
                    )
                  ) && (
                    <>
                      <h2 className="text-lg font-bold leading-4 lg:text-1xl pb-4">
                        Destaques
                      </h2>

                      <div className="flex overflow-x-auto gap-3 no-scrollbar">
                        {data
                          .flatMap((category) => category.products)
                          .filter((product) => product.isHighlited === "1")
                          .map((product) => (
                            <CardHighlited
                              idProduct={product.product_id}
                              key={product.product_id}
                              path={product.image}
                              title={product.product_name}
                              description={product.description}
                              porcentDiscont={product.discontPorcent}
                              price={product.price}
                              isFreeShipping={false}
                            />
                          ))}
                      </div>
                    </>
                  )}
              </>
            )}
            {filteredCategories &&
              filteredCategories.map((category) => (
                <div
                  key={category.category_id}
                  className="py-4 space-y-2 bg-white"
                >
                  <h2 className="text-lg font-bold leading-4 lg:text-1xl pb-2">
                    {category.category_name}
                  </h2>

                  <div className="flex flex-col gap-2">
                    {category.products
                      .filter((product) =>
                        product.product_name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase())
                      )
                      .map((product) => (
                        <CardProduct
                          idProduct={product.product_id}
                          key={product.product_id}
                          title={product.product_name}
                          description={product.description}
                          price={product.price}
                          path={product.image}
                        />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
