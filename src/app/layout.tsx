import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Navbar } from "@/components/navbar";

import { SWRProvider } from "./swr-provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Home",
    absolute: "%s | PokeDex",
  },
  description: "My wonderful PokeDex",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SWRProvider>
          <Navbar />
          {children}
        </SWRProvider>
      </body>
    </html>
  );
}
