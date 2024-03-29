import { EstablishmentBanner } from "@/components/sections/establishment-banner";
import { EstablishmentDetails } from "@/components/sections/establishment-details";
import { EstablishmentHighliteds } from "@/components/sections/establishment-highliteds";

import { AppLayout } from "@/_layouts/app_layout";
import { InputSearch } from "@/components/ui/input-search";

export default function HomePage() {
  return (
    <AppLayout>
      <EstablishmentBanner />
      <EstablishmentDetails
        isOpen={false}
        path="estabelecimento.jpg"
        name="Zero Grau"
        timeShipping="60 min"
        rating="5.0"
      />
      <section className="pt-4 p-5">
        <InputSearch label="Busque por um produto" />
      </section>
      <EstablishmentHighliteds />
    </AppLayout>
  );
}
