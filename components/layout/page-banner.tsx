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

const variantBackgrounds: Record<NonNullable<PageBannerProps["variant"]>, string> = {
  default: "https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1800",
  shop: "https://images.pexels.com/photos/5731866/pexels-photo-5731866.jpeg?auto=compress&cs=tinysrgb&w=1800",
  blog: "https://images.pexels.com/photos/4588047/pexels-photo-4588047.jpeg?auto=compress&cs=tinysrgb&w=1800",
  contact: "https://images.pexels.com/photos/23849247/pexels-photo-23849247.jpeg?auto=compress&cs=tinysrgb&w=1800",
  about: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1800"
};

function PawPattern() {
  return (
    <svg className="absolute inset-0 z-20 h-full w-full opacity-0" aria-hidden>
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
  const resolvedBackgroundImage = backgroundImage ?? variantBackgrounds[variant];

  return (
    <section className="relative h-[370px] w-full overflow-hidden bg-[#4C6795] px-4 text-center sm:h-[390px] md:h-[420px] lg:h-[520px]">
      <Image src={resolvedBackgroundImage} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 z-10 bg-[#4C6795]/70" aria-hidden />
      <PawPattern />

      <div className="relative z-30 mx-auto flex h-full max-w-[760px] flex-col items-center justify-center pb-16 pt-10">
        <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[0.95] text-white md:text-5xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-[620px] text-base font-semibold leading-7 text-white/85 md:text-lg md:leading-8">
            {subtitle}
          </p>
        ) : null}
        {breadcrumbs.length ? (
          <nav aria-label="Breadcrumb" className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm font-black text-white/90">
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
                  {item.href && !isLast ? (
                    <Link href={item.href} className="transition hover:text-brand">
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

      <div className="absolute bottom-0 left-0 z-20 w-full overflow-hidden leading-none" aria-hidden>
        <svg
          className="relative block h-[96px] w-full md:h-[145px] lg:h-[170px]"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          style={{ display: "block", marginBottom: "-1px" }}
        >
          <path
            fill="#ffffff"
            d="M0,78 C155,112 335,118 520,86 C690,56 840,30 1030,66 C1208,100 1288,120 1440,60 L1440,180 L0,180 Z"
          />
        </svg>
      </div>
    </section>
  );
}
