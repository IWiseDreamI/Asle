import type { Metadata } from "next";
import { Plaster, Play } from "next/font/google";
import Header from "@/components/custom/header";
import "./globals.css";
import Footer from "@/components/custom/footer";
import { ThemeProvider } from "./provider";

const play = Play({ subsets: ["latin"], style: ["normal"], weight: ["400", "700"], display: "swap" });
const plaster = Plaster({ subsets: ["latin"], style: ["normal"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Asle",
  description: "Web development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${play.className} bg-neutral-800 text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="flex flex-col px-[10vw] min-h-[100vh] items-center justify-center pt-[8vh]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
