import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuComponent from "@/components/globals/Layout/MenuComponent";
import FooterComponent from "@/components/globals/Layout/FooterComponent";
import ScrollToTop from "@/components/globals/ScrollToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <MenuComponent />
        {children}
        <ScrollToTop />
        <FooterComponent />
      </body>
    </html>
  );
}
