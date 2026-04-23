import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
