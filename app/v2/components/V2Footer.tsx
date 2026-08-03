import type { SitePageData, SocialLink } from "@/types/cms";

interface V2FooterProps {
  footer: SitePageData["footer"];
  social: SocialLink[];
}

export default function V2Footer({ footer, social }: V2FooterProps) {
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
          <div className="text-v2-headline-md font-bold italic text-v2-primary-alt mb-1 font-v2-display">
            {footer.brandName}
          </div>
          <p className="text-v2-on-surface-variant text-sm font-v2-body">
            &copy; {new Date().getFullYear()} {footer.copyrightName}.{" "}
            <span className="text-v2-primary">{footer.builtWithText}</span>
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
