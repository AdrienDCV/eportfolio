import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ePortfolio - Adrien DA COSTA VEIGA",
  description: "My ePortfolio",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  
  return (
    <html lang="en">
      <body>
        <header>
            <Menu />
        </header>
        <main>
          { children }
        </main>
        <footer>
          <Footer />
        </footer>
    </body>
    </html>
  );
  
}
