import type { Metadata } from "next";
import { Bubblegum_Sans, Quicksand } from "next/font/google";
import { ShopProvider } from "@/context/shop-context";
import { absoluteUrl, organizationSchema, siteConfig, websiteSchema } from "@/lib/seo";
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading"
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Paws & Whiskers | Pet Food, Toys, Beds & Essentials",
    template: "%s | Paws & Whiskers"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "pet store",
    "dog essentials",
    "cat essentials",
    "pet food",
    "pet toys",
    "pet beds",
    "pet supplies",
    "flea and tick care",
    "pet wellness",
    "online pet shop"
  ],
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: "Paws & Whiskers | Pet Food, Toys, Beds & Essentials",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    images: [{ url: absoluteUrl(siteConfig.defaultImage), width: 1200, height: 630, alt: "Paws & Whiskers online pet store" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Paws & Whiskers | Pet Food, Toys, Beds & Essentials",
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.defaultImage)]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bubblegumSans.variable} ${quicksand.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()])
          }}
        />
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
