import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuComponent from "@/components/globals/Layout/MenuComponent";
import FooterComponent from "@/components/globals/Layout/FooterComponent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <MenuComponent />
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}
