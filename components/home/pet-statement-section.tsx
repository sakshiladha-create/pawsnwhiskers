import { PawPrint } from "lucide-react";
import Image from "next/image";
import { SectionReveal } from "@/components/home/section-reveal";

export function PetStatementSection() {
  return (
    <SectionReveal className="bg-[#EEF7FA] py-10 md:py-14 mt-20">
      <section className="container-px">
        <div className="relative overflow-hidden rounded-[42px] bg-white px-6 py-8 md:rounded-[72px] md:px-10 md:py-10 lg:px-14 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[210px_1fr_310px]">
            <div className="flex justify-center lg:justify-start">
              <div className="flex h-[190px] w-[190px] items-center justify-center overflow-hidden rounded-[58%_42%_45%_55%/48%_55%_45%_52%] bg-[#F2F4F7]">
                <Image
                  src="https://images.pexels.com/photos/46024/pexels-photo-46024.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Playful dog sitting happily"
                  width={220}
                  height={220}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative text-center">
              <PawPrint
                className="pointer-events-none absolute left-0 top-0 hidden h-8 w-8 text-[#da8a70] md:block"
                aria-hidden
              />
              <p className="text-sm font-black tracking-[0.04em] text-ink">Happy Pets</p>
              <h2 className="mt-3 px-2 text-[1.7rem] leading-[1.3] text-ink md:text-[1.75rem] lg:text-[1.75rem]">
                Life&apos;s Better With Paws! Discover A Fun, Colorful World Of Pet Care Made For Those Who Love To
                Play, Cuddle, And Share Every Little Adventure Together.
              </h2>
              <PawPrint
                className="pointer-events-none absolute -bottom-0 right-32 hidden h-7 w-7 text-[#da8a70] md:block"
                aria-hidden
              />
            </div>

            <div className="flex items-center justify-center gap-0 md:gap-2 lg:justify-end">
              <div className="relative z-10 flex h-[160px] w-[160px] items-center justify-center overflow-hidden rounded-[62%_38%_55%_45%/44%_58%_42%_56%] bg-[#F1D7C8]">
                <Image
                  src="https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Dog with toy in a playful home scene"
                  width={180}
                  height={180}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="-ml-6 flex h-[170px] w-[170px] items-center justify-center overflow-hidden rounded-[45%_55%_62%_38%/58%_40%_60%_42%] bg-[#F2F4F7] md:-ml-9">
                <Image
                  src="https://images.pexels.com/photos/3791583/pexels-photo-3791583.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Playful puppy beside a food bowl"
                  width={190}
                  height={190}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}