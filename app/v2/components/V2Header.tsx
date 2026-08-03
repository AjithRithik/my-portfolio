"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/types/cms";

interface V2HeaderProps {
  brandName: string;
  profileImage: string;
  profileImageAlt: string;
  ctaLabel: string;
  ctaUrl: string;
  mobileMenuLabel: string;
  navLinks: NavigationItem[];
}

export default function V2Header({
  brandName,
  profileImage,
  profileImageAlt,
  ctaLabel,
  ctaUrl,
  mobileMenuLabel,
  navLinks,
}: V2HeaderProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY < lastScrollY) {
        setVisible(true);
      } else if (currentY > lastScrollY + 5) {
        setVisible(false);
        setMobileOpen(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (href: string) => {
    if (href === "/v2") return pathname === "/v2";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] h-20 transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
          background: "rgba(30, 41, 59, 0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "inset 0 0.5px 0 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className="max-w-v2-container mx-auto w-full px-v2-gutter h-full flex items-center justify-between relative">
          <Link href="/v2" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border-2 border-v2-primary p-[2px] flex items-center justify-center transition-transform group-hover:scale-110">
              <img
                src={profileImage}
                alt={profileImageAlt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-v2-headline text-[20px] md:text-v2-headline-md text-v2-primary font-bold italic font-v2-display absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
              {brandName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-300 relative font-v2-body ${
                  isActive(link.href)
                    ? "text-v2-primary font-bold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-v2-primary after:rounded-full"
                    : "text-v2-on-surface-variant hover:text-v2-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={ctaUrl}
              download
              className="hidden sm:flex items-center justify-center gap-2 py-2.5 px-5 font-bold rounded-lg shadow-lg transition-all hover:scale-105 active:scale-95 text-sm"
              style={{
                background: "linear-gradient(to right, #4cd7f6, #d0bcff)",
                color: "#003640",
                boxShadow: "0 10px 25px rgba(76,215,246,0.2)",
              }}
            >
              <span className="material-symbols-outlined text-lg">download</span>
              {ctaLabel}
            </a>
            <button
              className="md:hidden text-v2-on-surface-variant p-1"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileMenuLabel}
            >
              <span className="material-symbols-outlined text-3xl">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-20 left-0 right-0 z-[99] md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${visible ? "" : "pointer-events-none opacity-0"}`}
        style={{
          background: "rgba(17, 27, 46, 0.97)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <nav className="flex flex-col px-6 py-6 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 font-v2-body ${
                isActive(link.href)
                  ? "bg-v2-primary/10 text-v2-primary font-bold border-l-2 border-v2-primary"
                  : "text-v2-on-surface-variant hover:bg-v2-surface-container hover:text-v2-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={ctaUrl}
            download
            className="mt-4 flex items-center justify-center gap-2 py-3 px-5 font-bold rounded-lg text-sm bg-gradient-to-r from-[#4cd7f6] to-[#d0bcff] text-[#003640]"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </>
  );
}
