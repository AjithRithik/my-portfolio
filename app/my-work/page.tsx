import { Heading } from "../components/Heading";
import { PortfolioCard } from "../components/PortfolioCard/PortfolioCard";

export default function Work() {
  return (
    <div className="px-14">
      <Heading title="Portfolio" />
      <div className="mt-12 grid grid-cols-2 gap-6">
        <PortfolioCard
          image="/projects/blu.svg"
          role="Specilist Software Engineer @ Ltimindtree"
          projectName="Blu vapes"
        />
        <PortfolioCard
          image="/projects/pulze.svg"
          role="Specilist Software Engineer @ Ltimindtree"
          projectName="Pulze vapes"
        />
        <PortfolioCard
          image="/works/just-act.webp"
          role="Senior Frontend Developer @ f22labs"
          projectName="JustAct"
        />
        <PortfolioCard
          image="/works/frankDarling.webp"
          role="Senior Frontend Developer @ f22labs"
          projectName="Frank Darling"
        />
        <PortfolioCard
          image="/works/heyhey.webp"
          role="Senior Frontend Developer @ f22labs"
          projectName="Hey Hey"
        />
        <PortfolioCard
          image="/works/ctyt.webp"
          imageBg="bg-gray-800"
          role="Senior Frontend Developer @ f22labs"
          projectName="Chef To Your Table"
        />
        <PortfolioCard
          image="/projects/nrl.jpg"
          role="Software Engineer @ Orion Business Innovation"
          projectName="National Rugby League"
        />
        <PortfolioCard
          image="/projects/afl.png"
          role="Software Engineer @ Orion Business Innovation"
          projectName="Australian Football League"
        />
        <PortfolioCard
          image="/works/medzlegal.jpg"
          role="Freelancer"
          projectName="MedzLegal"
        />
        <PortfolioCard
          image="/projects/purblebird.webp"
          role="Freelancer"
          projectName="The Purble Bird"
        />
      </div>
    </div>
  );
}
