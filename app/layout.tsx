import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { ProfileInfo } from "./components/ProfileInfo";
import { Navigation } from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajith Kumar | Portfolio",
  description:
    "Hey there, I'm Ajith Kumar. With over 9.5 years immersed in enterprise application product development, I have mastered advanced JavaScript methodologies and crafted reusable UI components for robust user interfaces. My journey spans diverse technologies, driven by a passion for learning and creativity. Always seeking new challenges and adding a dash of flair to every project.",
  icons: [{ rel: "icon", url: "/my-logo.png" }],
  openGraph: {
    title: "Ajith Kumar | Portfolio",
    description:
      "Hey there, I'm Ajith Kumar. With over 9.5 years immersed in enterprise application product development, I have mastered advanced JavaScript methodologies and crafted reusable UI components for robust user interfaces. My journey spans diverse technologies, driven by a passion for learning and creativity. Always seeking new challenges and adding a dash of flair to every project.",
    images: ["https://ak-ajith-portfolio.vercel.app/portfolio.png"],
    url: "https://ak-ajith-portfolio.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url(/page-bg-1.jpg)] bg-cover bg-[50%] text-black`}
      >
        <main className="overflow-x-hidden h-screen w-screen">
          <div className="max-w-[1440px] w-full m-auto px-4 lg:px-6 pt-12 pb-14">
            <Header />
            <div className="flex flex-col lg:flex-row gap-8 w-full justify-center">
              <div className="w-full lg:w-[300px] xl:w-[340px] bg-white rounded-xl h-max lg:sticky top-[160px]">
                <ProfileInfo />
              </div>
              <div className="flex flex-1 flex-col bg-white rounded-xl lg:sticky top-[180px]">
                <div className="py-14 relative w-full">{children}</div>
                <div className="bg-green-100 py-6 text-center font-semibold w-full text-xs sm:text-sm">
                  © 2024 All rights reserved with
                  <span className="text-red-600 mx-2">&#10084;</span>
                  by Ajith Kumar.
                </div>
              </div>
              <div className="bg-white hidden xl:block w-28 p-4 rounded-xl h-max sticky top-[30px] justify-center">
                <Navigation />
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
