import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import PrelineScript from "@/utils/loaders/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bruna Gouveia Fisioterapeuta",
  description: "Transforme Sua Vida com Fisioterapia Domiciliar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <GoogleTagManager gtmId="GTM-K58BVH3J" />
      <body className={inter.className}>{children}</body>
      <PrelineScript />
    </html>
  );
}
