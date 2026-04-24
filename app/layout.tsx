import type { Metadata } from "next";
import { ShopProvider } from "@/context/shop-context";
import "./globals.css";

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
      <body>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
