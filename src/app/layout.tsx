import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ePortfolio - Adrien DA COSTA VEIGA",
  description: "My ePortfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
  
}