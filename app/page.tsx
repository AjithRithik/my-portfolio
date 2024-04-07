"use client";

import { FaCode, FaDraftingCompass } from "react-icons/fa";
import { MdChat, MdWavingHand } from "react-icons/md";
import { Slider } from "./components/Slider";
import { Heading } from "./components/Heading";
import { WhatIDo, WhatIDoProps } from "./components/WhatIDo/WhatIDo";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { SiContentful, SiGooglesearchconsole, SiTestinglibrary } from "react-icons/si";

const whatIDo: WhatIDoProps[] = [
  {
    icon: <FaDraftingCompass className="text-purple-600"/>,
    title: "UI/UX Design Implementation",
    className: 'bg-red-50',
    desc: "I bring to life the designs crafted by UI/UX designers, translating static mockups into interactive and visually appealing user interfaces. Working closely with designers, I ensure the final product maintains usability and accessibility standards, focusing on color schemes, typography, and responsive layouts to enhance the overall user experience.",
  },
  {
    icon: <LiaLaptopCodeSolid className="text-yellow-600"/>,
    className: 'bg-blue-50',
    title: "Frontend Technologies Mastery",
    desc: "Keeping my frontend game strong with HTML, CSS, and JavaScript classics, then spicing it up with React and Angular for extra flair, I tackle browser quirks and speed bumps to deliver snazzy, scalable solutions. It's like a frontend dance party where compatibility and performance are the grooviest guests, ensuring our creations rock the user experience while keeping businesses smiling.",
  },
  {
    icon: <SiContentful className="text-red-600"/>,
    className: 'bg-blue-50',
    title: "Content Management System (CMS) Integration",
    desc: "Integrating frontend with CMS platforms like Contentful or Netlify CMS to manage website content efficiently. Customizing frontend templates, components, and plugins to ensure seamless integration with the chosen CMS, providing editors with intuitive tools to update content easily.",
  },
  {
    icon: <SiTestinglibrary className="text-green-600" />,
    title: "Testing and Optimization",
    className: 'bg-red-50',
    desc: "Prioritizing quality and performance, I rigorously test frontend code for cross-device compatibility and optimize for speed using techniques like code splitting and lazy loading. This ensures robust, high-performing web applications, delivering exceptional user experiences across platforms and devices.",
  },
  {
    icon: <SiGooglesearchconsole className="text-pink-600" />,
    className: 'bg-red-50',
    title: "SEO Implementation",
    desc: "Integrating SEO best practices into frontend development to improve website visibility and ranking on search engines. Optimizing HTML structure, meta tags, and schema markup, as well as ensuring fast loading times and mobile responsiveness for enhanced search engine performance.",
  },
  {
    icon: <MdChat className="text-orange-600" />,
    className: 'bg-blue-50',
    title: "Collaboration and Communication",
    desc: "In my role as a frontend developer, I prioritize effective collaboration with cross-functional teams, including backend developers, designers, and clients, to ensure alignment on project goals and requirements. Clear communication is key throughout the development process, fostering a collaborative environment and contributing to project success.",
  },
];

export default function Home() {
  return (
    <>
      <div className="px-14">
        <Heading title="About" />
        <div className="text-gray-600 text-justify">
          <p>
            Hey there{" "}
            <MdWavingHand className="text-yellow-600 inline-block text-xl -mt-1" />
            ,
            <br />
            <br />
            {`I'm Ajithkumar. With over 7 years immersed in the art of Enterprise
            Application product development, I wield a mastery of advanced
            JavaScript methodologies, crafting reusable UI components that dance
            seamlessly on robust user interfaces. My journey is a tech carnival
            showcasing my wild ride through diverse computer technologies,
            fueled by an insatiable hunger for new knowledge.`}
          </p>
          <p className="mt-4">
            I am always on the lookout for challenging activities that push my
            boundaries. Catch me sculpting applications with the latest tech,
            adding a dash of funk and a sprinkle of flair!
          </p>
        </div>
      </div>
      <div className="mt-4 mb-6 px-14">
        <div className="text-2xl font-semibold mb-6">What I do!</div>
        <div className="w-full grid grid-cols-2 justify-between gap-2 flex-wrap">
          {whatIDo?.map((activity, index) => (
            <WhatIDo key={index} {...activity} />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gray-100 px-14 py-6">
        <div className="text-center text-2xl font-semibold">Projects</div>
        <div className="mt-12 relative">
          <Slider />
        </div>
      </div>
    </>
  );
}
