import { Heading } from "../components/Heading";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";

const projects = [
  {
    image: "/works/just-act.webp",
    techStack: ["React js", "Styled Component", "Axios", "Adonis js"],
    title: "JustAct",
  },
  {
    image: "/works/frankdarling.webp",
    techStack: ["Next js", "Tailwind css", "Axios", "Shopify"],
    title: "Frank Darling",
  },
  {
    image: "/works/heyhey.webp",
    techStack: ["Next js", "Styled Component", "Axios", "Ruby on Rails"],
    title: "Hey Hey",
  },
  {
    image: "/works/cheftoyourtable.webp",
    techStack: ["Next js", "Tailwind css", "GraphQl", "Ruby on Rails"],
    imageBg: "bg-gray-800",
    title: "Chef To Your Table",
  },
  {
    image: "/projects/nrl.jpg",
    techStack: ["Angular", "Java Spring boot"],
    title: "National Rugby League",
  },
  {
    image: "/projects/afl.png",
    techStack: ["JSP", "Angular", "Jave Sprintboot", "Struts"],
    title: "Australian Football League",
  },
  {
    image: "/works/medzlegal.jpg",
    techStack: ["React js", "Tailwind css", "Ruby on Rails"],
    title: "MedzLegal",
  },
  {
    image: "/projects/purblebird.webp",
    techStack: ["Next js", "Tailwind css"],
    title: "The Purble Bird",
  },
];

export default function Work() {
  return (
    <div className="px-6 md:px-14">
      <Heading title="Portfolio" />
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects?.map((project, index) => (
          <PortfolioCard
            key={index}
            imageBg={project?.imageBg}
            image={project.image}
            techStacks={project?.techStack}
            projectName={project?.title}
          />
        ))}
      </div>
    </div>
  );
}
