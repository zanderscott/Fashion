import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import CartProvider from "@/app/components/Providers";
import ShoppingCartModal from "@/app/components/ShoppingCartModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion",
  description: "The best place to buy fashion online in the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
        <Navbar />  
        <ShoppingCartModal />
        {children}
        </CartProvider>
      </body>
    </html>
  );
}
