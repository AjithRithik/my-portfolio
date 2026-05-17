"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/v2", icon: "person" },
  { label: "Resume", href: "/v2/resume", icon: "description" },
  { label: "Work", href: "/v2/my-work", icon: "business_center" },
  { label: "Contact", href: "/v2/contact", icon: "alternate_email" },
];

export default function V2MobileNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/v2") return pathname === "/v2";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 py-3"
      style={{
        background: "rgba(23, 31, 51, 0.95)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 transition-all duration-200 ${
              active ? "text-v2-primary-alt" : "text-v2-on-surface-variant"
            }`}
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{
                fontVariationSettings: active ? '"FILL" 1' : '"FILL" 0',
              }}
            >
              {item.icon}
            </span>
            <span
              className="text-[10px] uppercase"
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontWeight: active ? "700" : "500",
              }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
