import Link from "next/link";
import type { SocialLink } from "@/types/cms";

interface V2FooterProps {
  social?: SocialLink[];
}

const defaultSocial: SocialLink[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ajithkumaroffical/", icon: "link" },
  { label: "GitHub", url: "https://github.com/AjithRithik", icon: "code" },
  { label: "Instagram", url: "https://www.instagram.com/ajith_rithik/", icon: "photo_camera" },
  { label: "Contact", url: "/v2/contact", icon: "alternate_email" },
];

export default function V2Footer({ social = defaultSocial }: V2FooterProps) {
  return (
    <footer
      className="w-full pt-8 pb-24 md:pb-8 border-t"
      style={{
        background: "#060e20",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-v2-container mx-auto px-v2-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <div
            className="text-v2-headline-md font-bold italic text-v2-primary-alt mb-1 font-v2-display"
          >
            Ajithkumar
          </div>
          <p className="text-v2-on-surface-variant text-sm font-v2-body">
            © {new Date().getFullYear()} Ajith Kumar.{" "}
            <span className="text-v2-primary">Built with Precision.</span>
          </p>
        </div>
        <nav className="flex gap-6 flex-wrap justify-center">
          {social.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="text-v2-outline hover:text-v2-primary-alt transition-all hover:-translate-y-1 duration-200 text-sm font-v2-mono"
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
