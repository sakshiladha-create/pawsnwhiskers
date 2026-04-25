import Image from "next/image";
import { brandLogos } from "@/data/home-data";

export function BrandStrip() {
  return (
    <section className="py-6 mt-20" aria-label="Featured brands">
      <div className="container-px">
        <div className="rounded-[10px] bg-[#3A2424] p-3 md:p-4">
          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {brandLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex min-h-[118px] flex-col items-center justify-center rounded-[18px] bg-white px-6 py-5 text-center"
              >
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={60}
                  height={60}
                  className="h-[46px] w-[46px] rounded-full object-cover"
                />
                <span className="mt-3 text-[15px] font-black text-[#3A2424]">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
