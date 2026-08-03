import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiMongodb,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiAxios,
  SiApollographql,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiStyledcomponents,
  SiRedux,
  SiReactquery,
  SiReactivex,
  SiNgrx,
  SiExpress,
  SiNestjs,
  SiSpring,
  SiGit,
  SiGitlab,
  SiAzuredevops,
  SiSonarqube,
  SiJenkins,
  SiEslint,
  SiVisualstudiocode,
  SiNpm,
  SiYarn,
  SiWebpack,
  SiTurborepo,
  SiAmazonaws,
  SiFirebase,
  SiGoogleanalytics,
  SiContentful,
  SiNetlify,
  SiVercel,
  SiZendesk,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiVitest,
  SiCucumber,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const BRAND_ICON_MAP: Record<string, IconType> = {
  html: SiHtml5,
  "css / css3 / sass": SiCss3,
  "javascript (advanced)": SiJavascript,
  javascript: SiJavascript,
  typescript: SiTypescript,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  java: DiJava,
  angular: SiAngular,
  react: SiReact,
  "react js": SiReact,
  "next.js": SiNextdotjs,
  "next js": SiNextdotjs,
  nextjs: SiNextdotjs,
  jquery: SiJquery,
  axios: SiAxios,
  apollo: SiApollographql,
  tailwind: SiTailwindcss,
  "tailwind css": SiTailwindcss,
  bootstrap: SiBootstrap,
  "material ui": SiMui,
  "styled components": SiStyledcomponents,
  "styled component": SiStyledcomponents,
  redux: SiRedux,
  "react query": SiReactquery,
  rxjs: SiReactivex,
  ngrx: SiNgrx,
  express: SiExpress,
  "nest.js": SiNestjs,
  "java spring mvc": SiSpring,
  "spring boot": SiSpring,
  "git / bash / github": SiGit,
  git: SiGit,
  gitlab: SiGitlab,
  "azure ci/cd": SiAzuredevops,
  azure: SiAzuredevops,
  sonarqube: SiSonarqube,
  jenkins: SiJenkins,
  eslint: SiEslint,
  vscode: SiVisualstudiocode,
  npm: SiNpm,
  yarn: SiYarn,
  webpack: SiWebpack,
  turbo: SiTurborepo,
  "aws cloudfront": SiAmazonaws,
  firebase: SiFirebase,
  "google analytics": SiGoogleanalytics,
  "contentful cms": SiContentful,
  contentful: SiContentful,
  "netlify cms": SiNetlify,
  netlify: SiNetlify,
  vercel: SiVercel,
  "zendesk chat tools": SiZendesk,
  jest: SiJest,
  cypress: SiCypress,
  "testing library": SiTestinglibrary,
  vitest: SiVitest,
  cucumber: SiCucumber,
};

const MATERIAL_FALLBACK_MAP: Record<string, string> = {
  "theme ui": "palette",
  monorepo: "account_tree",
  growthbook: "trending_up",
  "optimizely a/b testing": "science",
  optimove: "campaign",
  "sql (basic)": "database",
};

interface TechIconProps {
  label: string;
  className?: string;
  color?: string;
}

export default function TechIcon({ label, className = "", color }: TechIconProps) {
  const key = label.trim().toLowerCase();
  const BrandIcon = BRAND_ICON_MAP[key];

  if (BrandIcon) {
    return <BrandIcon className={className} color={color} />;
  }

  const fallbackSymbol = MATERIAL_FALLBACK_MAP[key] ?? "code";
  return (
    <span className={`material-symbols-outlined ${className}`} style={color ? { color } : undefined}>
      {fallbackSymbol}
    </span>
  );
}
