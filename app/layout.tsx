import type { Metadata } from "next";
import { Bubblegum_Sans, Quicksand } from "next/font/google";
import { ShopProvider } from "@/context/shop-context";
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
  title: "Paws N Whiskers | Premium Pet Store",
  description: "A cheerful premium pet ecommerce experience for cats, dogs, and their people."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bubblegumSans.variable} ${quicksand.variable}`}>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
