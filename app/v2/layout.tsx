import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import V2Header from "./components/V2Header";
import V2Footer from "./components/V2Footer";
import V2MobileNav from "./components/V2MobileNav";
import { getSiteData } from "@/lib/cms";
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

export async function generateMetadata(): Promise<Metadata> {
  const siteData = getSiteData();
  const metadata = siteData.metadata;

  return {
    metadataBase: new URL(metadata.siteUrl),
    title: metadata.title,
    description: metadata.description,
    icons: [{ rel: "icon", url: "/my-logo.png" }],
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      images: [metadata.ogImage],
      url: `${metadata.siteUrl}/v2`,
      type: "website",
    },
  };
}

export default async function V2Layout({ children }: { children: React.ReactNode }) {
  const siteData = getSiteData();

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${sora.variable} ${manrope.variable} ${jetbrainsMono.variable} bg-[#0b1326] text-[#dae2fd] font-v2-body bg-[radial-gradient(at_0%_0%,rgba(6,182,212,0.15)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(139,92,246,0.15)_0px,transparent_50%)] bg-fixed selection:bg-[rgba(76,215,246,0.3)] [&::-webkit-scrollbar]:w-[4px] [&::-webkit-scrollbar-track]:bg-[#0b1326] [&::-webkit-scrollbar-thumb]:bg-[#464554] [&::-webkit-scrollbar-thumb]:rounded-[10px]`}
      >
        <V2Header
          brandName={siteData.brandName}
          profileImage={siteData.profileImage}
          profileImageAlt={siteData.profileImageAlt}
          ctaLabel={siteData.headerCtaLabel}
          ctaUrl={siteData.headerCtaUrl}
          mobileMenuLabel={siteData.mobileMenuLabel}
          navLinks={siteData.navLinks}
        />
        <main className="min-h-screen pt-20 pb-0">{children}</main>
        <V2Footer footer={siteData.footer} social={siteData.social} />
        <V2MobileNav navItems={siteData.navLinks} />
      </body>
    </html>
  );
}
