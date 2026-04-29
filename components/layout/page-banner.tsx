import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PageBannerBreadcrumb = {
  label: string;
  href?: string;
};

type PageBannerProps = {
  title: string;
  subtitle?: string;
  breadcrumbs?: PageBannerBreadcrumb[];
  backgroundImage?: string;
  variant?: "default" | "shop" | "blog" | "contact" | "about";
};

const variantImages: Record<NonNullable<PageBannerProps["variant"]>, { left: string; right: string }> = {
  default: {
    left: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=900",
    right: "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  shop: {
    left: "https://images.pexels.com/photos/8434635/pexels-photo-8434635.jpeg?auto=compress&cs=tinysrgb&w=900",
    right: "https://images.pexels.com/photos/5732478/pexels-photo-5732478.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  blog: {
    left: "https://images.pexels.com/photos/7516508/pexels-photo-7516508.jpeg?auto=compress&cs=tinysrgb&w=900",
    right: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  contact: {
    left: "https://images.pexels.com/photos/29971026/pexels-photo-29971026.jpeg?auto=compress&cs=tinysrgb&w=900",
    right: "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=900"
  },
  about: {
    left: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=900",
    right: "https://images.pexels.com/photos/1669962/pexels-photo-1669962.jpeg?auto=compress&cs=tinysrgb&w=900"
  }
};

function PawPattern() {
  return (
    <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden>
      <defs>
        <pattern id="page-banner-paws" width="116" height="104" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
          <g fill="white">
            <ellipse cx="44" cy="38" rx="10" ry="14" />
            <ellipse cx="66" cy="38" rx="10" ry="14" />
            <ellipse cx="31" cy="58" rx="9" ry="12" />
            <ellipse cx="79" cy="58" rx="9" ry="12" />
            <path d="M55 55c16 0 27 18 20 31-5 10-34 10-40 0-7-13 4-31 20-31Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#page-banner-paws)" />
    </svg>
  );
}

export function PageBanner({
  title,
  subtitle,
  breadcrumbs = [{ label: "Home", href: "/" }, { label: title }],
  backgroundImage,
  variant = "default"
}: PageBannerProps) {
  const images = variantImages[variant];

  return (
    <section className="relative isolate flex min-h-[370px] w-full items-center justify-center overflow-hidden bg-[#4C6795] px-4 pb-20 pt-12 text-center sm:min-h-[400px] md:min-h-[420px] lg:min-h-[500px] xl:min-h-[540px]">
      {backgroundImage ? (
        <Image src={backgroundImage} alt="" fill priority sizes="100vw" className="z-[-3] object-cover opacity-20 mix-blend-soft-light" />
      ) : null}
      <div className="absolute inset-0 z-[-2] bg-[#4C6795]/92" aria-hidden />
      <PawPattern />

      <div className="absolute bottom-16 left-[4%] z-0 hidden h-[250px] w-[220px] overflow-hidden rounded-full bg-white/12 shadow-soft md:block lg:bottom-[70px] lg:h-[330px] lg:w-[290px] xl:h-[360px] xl:w-[320px]">
        <Image src={images.left} alt="" fill priority sizes="320px" className="object-cover object-center" />
      </div>
      <div className="absolute bottom-16 right-[3%] z-0 hidden h-[270px] w-[230px] overflow-hidden rounded-full bg-white/12 shadow-soft md:block lg:bottom-[70px] lg:h-[360px] lg:w-[300px] xl:h-[390px] xl:w-[330px]">
        <Image src={images.right} alt="" fill priority sizes="330px" className="object-cover object-center" />
      </div>

      <div className="pointer-events-none absolute left-4 top-10 h-28 w-28 rounded-full border border-white/15 md:left-[18%] md:top-16" aria-hidden />
      <div className="pointer-events-none absolute bottom-32 right-8 h-20 w-20 rounded-full bg-white/8 blur-sm md:right-[24%]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[760px]">
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] text-white drop-shadow-sm md:text-5xl lg:text-[56px]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-[620px] text-base font-semibold leading-7 text-white/85 md:text-lg md:leading-8">
            {subtitle}
          </p>
        ) : null}
        {breadcrumbs.length ? (
          <nav aria-label="Breadcrumb" className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[15px] font-black text-white/90">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="focus-ring transition hover:text-brand">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? "text-white/90" : "text-white"}>{item.label}</span>
                  )}
                  {!isLast ? <ChevronRight className="h-4 w-4 text-white/62" aria-hidden /> : null}
                </span>
              );
            })}
          </nav>
        ) : null}
      </div>

      <svg className="absolute bottom-0 left-0 right-0 z-[1] h-[96px] w-full md:h-[160px] lg:h-[185px]" viewBox="0 0 1440 190" preserveAspectRatio="none" aria-hidden>
        <path d="M0,132 C170,170 330,168 500,110 C690,45 840,74 1010,135 C1180,190 1320,125 1440,100 L1440,190 L0,190 Z" fill="rgba(255,255,255,0.36)" />
        <path d="M0,120 C190,170 360,160 520,100 C690,35 840,80 1010,135 C1180,190 1320,125 1440,100 L1440,190 L0,190 Z" fill="white" />
      </svg>
    </section>
  );
}
