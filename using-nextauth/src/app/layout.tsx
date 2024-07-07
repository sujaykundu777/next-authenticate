import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopNav from "./components/TopNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authenticate using NextAuth",
  description: "A demo app to demonstrate how to authenticate using NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth focus:scroll-auto">
      <body className={inter.className}>
        <TopNav />
        {children}
        <ToastContainer /> {/* ToastContainer added inside the body tag */}
      </body>
    </html>
  );
}
