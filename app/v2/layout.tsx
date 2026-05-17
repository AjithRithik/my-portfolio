import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import V2Header from "./components/V2Header";
import V2Footer from "./components/V2Footer";
import V2MobileNav from "./components/V2MobileNav";
import { getHomeData } from "@/lib/cms";
import "../globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ak-ajith-portfolio.vercel.app"),
  title: "Ajith Kumar | Specialist Software Engineer",
  description:
    "Portfolio of Ajith Kumar — Specialist Software Engineer with 9.5+ years in enterprise frontend development. Expert in React, Angular, Next.js and TypeScript.",
  icons: [{ rel: "icon", url: "/my-logo.png" }],
  openGraph: {
    title: "Ajith Kumar | Specialist Software Engineer",
    description:
      "Portfolio of Ajith Kumar — Specialist Software Engineer with 9.5+ years in enterprise frontend development.",
    images: ["/portfolio.png"],
    url: "https://ak-ajith-portfolio.vercel.app/v2",
    type: "website",
  },
};

export default async function V2Layout({ children }: { children: React.ReactNode }) {
  const homeData = await getHomeData();

  return (
    <html
      lang="en"
      className="dark scroll-smooth"
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} bg-[#0b1326] text-[#dae2fd] font-v2-body bg-[radial-gradient(at_0%_0%,rgba(6,182,212,0.15)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(139,92,246,0.15)_0px,transparent_50%)] bg-fixed selection:bg-[rgba(76,215,246,0.3)] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#0b1326] [&::-webkit-scrollbar-thumb]:bg-[#464554] [&::-webkit-scrollbar-thumb]:rounded-[10px]`}
      >
        <V2Header downloadCvUrl={homeData?.downloadCvUrl} />
        <main className="min-h-screen pt-20 pb-0">{children}</main>
        <V2Footer social={homeData?.social} />
        <V2MobileNav />
      </body>
    </html>
  );
}
