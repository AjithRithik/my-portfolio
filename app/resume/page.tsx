import { MdWork } from "react-icons/md";
import { Heading } from "../components/Heading";
import { FaUserGraduate } from "react-icons/fa";
import { Progressbar } from "../components/Progressbar";

const testRuners = ["Jest", "Vite", "Cypress"];
const relatedSkils = ["Agile (Scrum)", "SEO / Meta", "Jira / Atlassian"];
const toolsSkils = [
  "Git / Bash / Shells",
  "Eslint",
  "Eslint",
  "Azure",
  "CI / CD",
  "Sonarqube",
  "GrowthBook",
  "Kippa OCR",
  "Vscode",
  "NPM",
  "Yarn",
  "Optimizely A/B testing",
  "Contentful CMS",
  "Netlify CMS",
  "Netlify",
  "Vercel",
  "Jenkins",
  "Webpack",
  "Turbo",
  "Monorepo",
  "AWS cloud front",
  "Firebase",
  "Mongodb",
  "Zendesk",
  "Optimove",
  "Chat tools",
  "Google Analytics",
];

export default function Resume() {
  return (
    <>
      <div className="px-14">
        <Heading title="Resume" />
        <div className="grid grid-cols-2 mt-12 gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 text-2xl font-medium items-center">
              <div className="text-blue-400 w-8 text-3xl">
                <FaUserGraduate />
              </div>
              <div>Education</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-red-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  2012-2016
                </div>
                <div className="mt-1">BE (CSE ) - 7.4 CGPA</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  Kalasalingam Institute of Technology
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  2010-2012
                </div>
                <div className="mt-1">12th Grade - 90%</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  G.S Hindu Higher Sec School
                </div>
              </div>
              <div className="bg-red-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  2000-2010
                </div>
                <div className="mt-1">10th Grade - 91%</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  Government Higher Sec School
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 text-2xl font-medium items-center">
              <div className="text-blue-400 w-8 text-3xl">
                <MdWork />
              </div>
              <div>Experience</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-blue-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  Dec 2021 - present
                </div>
                <div className="mt-1">Specilist Software Engineer</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  Ltimindtree, Bangalore
                </div>
              </div>
              <div className="bg-red-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  Jan 2020 - Dec 2021
                </div>
                <div className="mt-1">Senior Frontend Developer</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  F22 labs, chennai
                </div>
              </div>
              <div className="bg-blue-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  Feb 2016 - Jan 2020
                </div>
                <div className="mt-1">Software Engineer</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  Orion Business Innovation, Madurai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-100 px-14 py-6 rounded-sm">
        <div className="my-6">
          <div className="text-center text-xl font-medium">
            Programming Languages
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <Progressbar skill="HTML" rating={95} />
            <Progressbar skill="CSS/CSS3 (sass)" rating={90} />
            <Progressbar skill="Javascript" rating={85} />
            <Progressbar skill="Typescript" rating={80} />
            <Progressbar skill="Node js" rating={60} />
            <Progressbar skill="GraphQL" rating={70} />
          </div>
        </div>
        <div className="my-8">
          <div className="text-center text-xl font-medium">
            Libraries & Frameworks
          </div>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <Progressbar skill="React js" rating={90} />
            <Progressbar skill="Next.js" rating={95} />
            <Progressbar skill="Angular" rating={80} />
            <Progressbar skill="JQuery" rating={60} />
            <Progressbar skill="Axois" rating={70} />
            <Progressbar skill="Apollo" rating={60} />
            <Progressbar skill="Express" rating={40} />
            <Progressbar skill="Themeui" rating={60} />
            <Progressbar skill="Tailwind" rating={90} />
            <Progressbar skill="Bootstrap" rating={50} />
            <Progressbar skill="Material UI" rating={65} />
            <Progressbar skill="Styled Components" rating={85} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-6 px-14 py-6 gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-medium">
            Tools | Services | Database | CMS
          </div>
          <div className="flex flex-wrap gap-2">
            {toolsSkils?.map((skill, index) => (
              <div
                className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                key={index}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-4">
            <div className="text-lg font-medium">Test Runners & Libraries</div>
            <div className="flex flex-wrap gap-2">
              {testRuners?.map((skill, index) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-lg font-medium mt-2">Related Skills</div>
            <div className="flex flex-wrap gap-2">
              {relatedSkils?.map((skill, index) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={index}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
