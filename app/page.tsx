"use client";

import { FaDraftingCompass } from "react-icons/fa";
import { MdChat, MdWavingHand } from "react-icons/md";
import { Slider } from "./components/Slider";
import { Heading } from "./components/Heading";
import { WhatIDo, WhatIDoProps } from "./components/WhatIDo";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import {
  SiContentful,
  SiGooglesearchconsole,
  SiTestinglibrary,
} from "react-icons/si";

const whatIDo: WhatIDoProps[] = [
  {
    icon: <FaDraftingCompass className="text-purple-600" />,
    title: "UI/UX Design Implementation",
    className: "bg-red-50",
    desc: "I bring to life the designs crafted by UI/UX designers, translating static mockups into interactive and visually appealing user interfaces. Working closely with designers, I ensure the final product maintains usability and accessibility standards, focusing on color schemes, typography, and responsive layouts to enhance the overall user experience.",
  },
  {
    icon: <LiaLaptopCodeSolid className="text-yellow-600" />,
    className: "bg-blue-50",
    title: "Frontend Technologies Mastery",
    desc: "I keep my frontend skills sharp with HTML, CSS, and JavaScript fundamentals, enhancing them with React and Angular for added versatility. I address browser quirks and performance challenges to deliver robust, scalable solutions. Compatibility and performance are always prioritized, ensuring our creations provide an outstanding user experience and meet business needs.",
  },
  {
    icon: <SiContentful className="text-red-600" />,
    className: "bg-blue-50",
    title: "Content Management System (CMS) Integration",
    desc: "I integrate frontend applications with CMS platforms like Contentful or Netlify CMS to manage website content efficiently. I customize frontend templates, components, and plugins to ensure seamless integration with the chosen CMS, providing editors with intuitive tools to update content easily.",
  },
  {
    icon: <SiTestinglibrary className="text-green-600" />,
    title: "Testing and Optimization",
    className: "bg-red-50",
    desc: "I prioritize quality and performance by rigorously testing frontend code for cross-device compatibility and optimizing for speed using techniques like code splitting and lazy loading. This ensures robust, high-performing web applications that deliver exceptional user experiences across platforms and devices.",
  },
  {
    icon: <SiGooglesearchconsole className="text-pink-600" />,
    className: "bg-red-50",
    title: "SEO Implementation",
    desc: "I integrate SEO best practices into frontend development to improve website visibility and ranking on search engines. I optimize HTML structure, meta tags, and schema markup, as well as ensure fast loading times and mobile responsiveness for enhanced search engine performance.",
  },
  {
    icon: <MdChat className="text-orange-600" />,
    className: "bg-blue-50",
    title: "Collaboration and Communication",
    desc: "As a frontend developer, I prioritize effective collaboration with cross-functional teams, including backend developers, designers, and clients, to ensure alignment on project goals and requirements. Clear communication is essential throughout the development process, fostering a collaborative environment and contributing to project success.",
  },
];

export default function Home() {
  return (
    <>
      <div className="px-6 md:px-14">
        <Heading title="About" />
        <div className="text-gray-600 text-justify text-sm md:text-base">
          <p>
            Hey there{" "}
            <MdWavingHand className="text-yellow-600 inline-block text-xl -mt-1" />
            ,
            <br />
            <br />
            {`I'm Ajith Kumar. With over 9.5 years immersed in the art of enterprise application product development, I have mastered advanced JavaScript methodologies, crafting reusable UI components that perform seamlessly on robust user interfaces. My journey is a tech carnival, showcasing my experience across diverse technologies and fueled by an insatiable hunger for new knowledge.`}
          </p>
          <p className="mt-4">
            I am always on the lookout for challenging activities that push my
            boundaries. Catch me sculpting applications with the latest tech,
            adding a dash of creativity and a sprinkle of flair!
          </p>
        </div>
      </div>
      <div className="mt-4 mb-6 px-6 md:px-14">
        <div className="text-2xl font-semibold mb-6">What I do!</div>
        <div className="w-full grid md:grid-cols-2 justify-between gap-2 flex-wrap">
          {whatIDo?.map((activity, index) => (
            <WhatIDo key={index} {...activity} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gray-100 px-14 py-6">
        <div className="text-center text-2xl font-semibold">Projects</div>
        <div className="mt-12 relative h-20">
          <div className="absolute inset-0">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
