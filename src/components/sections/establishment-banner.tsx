import { User } from "lucide-react";

import Link from "next/link";

export function EstablishmentBanner() {
  return (
    <div
      className="bg-blue-100 w-full h-28 relative"
      id="background"
      style={{
        backgroundImage: "url(banner.webp)",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 right-0 p-3">
        <Link
          className="  gap-1 bg-black text-white border border-gray-200 justify-center ml-1 w-auto text-sm font-semibold p-2 rounded-xl flex items-center"
          href="/auth/login"
        >
          <User size={20} />
        </Link>
      </div>
    </div>
  );
}
