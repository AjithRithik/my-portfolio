import { Heading } from "../components/Heading";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";

const projects = [
  {
    image: "/projects/blu.svg",
    role: "Specilist Software Engineer @ Ltimindtree",
    title: "Blu vapes",
  },
  {
    image: "/projects/pulze.svg",
    role: "Specilist Software Engineer @ Ltimindtree",
    title: "Pulze vapes",
  },
  {
    image: "/works/just-act.webp",
    role: "Senior Frontend Developer @ f22labs",
    title: "JustAct",
  },
  {
    image: "/works/frankdarling.webp",
    role: "Senior Frontend Developer @ f22labs",
    title: "Frank Darling",
  },
  {
    image: "/works/heyhey.webp",
    role: "Senior Frontend Developer @ f22labs",
    title: "Hey Hey",
  },
  {
    image: "/works/cheftoyourtable.webp",
    role: "Senior Frontend Developer @ f22labs",
    imageBg: 'bg-gray-800',
    title: "Chef To Your Table",
  },
  {
    image: "/projects/nrl.jpg",
    role: "Software Engineer @ Orion Business Innovation",
    title: "National Rugby League",
  },
  {
    image: "/projects/afl.png",
    role: "Software Engineer @ Orion Business Innovation",
    title: "Australian Football League",
  },
  {
    image: "/works/medzlegal.jpg",
    role: "Freelancer",
    title: "MedzLegal",
  },
  {
    image: "/projects/purblebird.webp",
    role: "Freelancer",
    title: "The Purble Bird",
  },
];

export default function Work() {
  return (
    <div className="px-6 md:px-14">
      <Heading title="Portfolio" />
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {projects?.map((project,index)=> (
           <PortfolioCard
           key={index}
           imageBg={project?.imageBg}
           image={project.image}
           role={project?.role}
           projectName={project?.title}
         />
        ))}
      </div>
    </div>
  );
}
