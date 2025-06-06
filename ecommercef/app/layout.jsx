// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Highlights";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from "./components/Card_Produit/CartContext"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Replie Ecom",
  description: "Generated by create next app",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  afterSignInUrl="/products"
    afterSignUpUrl="/products">
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <CartProvider>
            {children}
          </CartProvider>
          <ScrollToTopButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
