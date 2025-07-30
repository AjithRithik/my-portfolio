import { MdWork } from "react-icons/md";
import { Heading } from "../components/Heading";
import { FaUserGraduate } from "react-icons/fa";
import { Progressbar } from "../components/Progressbar";

const devOpsTools = [
  "Git / Bash / Shells",
  "GitHub",
  "GitLab",
  "Azure",
  "CI / CD",
  "SonarQube",
  "Jenkins",
  "ESLint",
  "VS Code",
  "NPM",
  "Yarn",
  "Webpack",
  "Turbo",
  "Monorepo",
];

const cloudAnalyticsCMS = [
  "AWS CloudFront",
  "Firebase",
  "MongoDB",
  "Google Analytics",
  "GrowthBook",
  "Optimizely A/B Testing",
  "Optimove",
  "Contentful CMS",
  "Netlify CMS",
  "Netlify",
  "Vercel",
  "Zendesk",
  "Chat Tools",
  "Kippa OCR",
];

const testRunners = ["Jest", "Vite", "Cypress"];
const testingLibraries = ["Testing Library", "Vitest", "Cucumber"];
const relatedSkills = ["Agile (Scrum)", "SEO / Meta", "Jira / Atlassian"];

export default function Resume() {
  return (
    <>
      <div className="px-6 md:px-14">
        <Heading title="Resume" />
        <div className="grid sm:grid-cols-2 mt-12 gap-8">
          {/* Education Section */}
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
                <div className="mt-1">BE (CSE) - 7.4 CGPA</div>
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
                  G.S. Hindu Higher Secondary School
                </div>
              </div>
              <div className="bg-red-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  2000-2010
                </div>
                <div className="mt-1">10th Grade - 91%</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  Government Higher Secondary School
                </div>
              </div>
            </div>
          </div>
          {/* Experience Section */}
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
                  Dec 2021 - Present
                </div>
                <div className="mt-1">Specialist Software Engineer</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  LTIMindtree, Coimbatore
                </div>
              </div>
              <div className="bg-red-100 rounded-lg w-full px-4 py-6">
                <div className="text-sm text-gray-800 font-light">
                  Jan 2020 - Dec 2021
                </div>
                <div className="mt-1">Senior Front-End Developer</div>
                <div className="text-sm mt-1 text-gray-800 font-light">
                  F22 Labs, Chennai
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
      {/* Skills Section */}
      <div className="mt-6 bg-gray-100 px-6 md:px-14 py-6 rounded-sm">
        <div className="my-6">
          <div className="text-center text-xl font-medium">
            Programming Languages
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <Progressbar skill="HTML" rating={95} />
            <Progressbar skill="CSS/CSS3 (Sass)" rating={90} />
            <Progressbar skill="JavaScript" rating={85} />
            <Progressbar skill="TypeScript" rating={80} />
            <Progressbar skill="Node.js" rating={60} />
            <Progressbar skill="GraphQL" rating={70} />
          </div>
        </div>
        <div className="my-8">
          <div className="text-center text-xl font-medium">
            Libraries & Frameworks
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            <Progressbar skill="React.js" rating={90} />
            <Progressbar skill="Next.js" rating={95} />
            <Progressbar skill="Angular" rating={80} />
            <Progressbar skill="jQuery" rating={60} />
            <Progressbar skill="Axios" rating={70} />
            <Progressbar skill="Apollo" rating={60} />
            <Progressbar skill="Express" rating={40} />
            <Progressbar skill="Theme UI" rating={60} />
            <Progressbar skill="Tailwind" rating={90} />
            <Progressbar skill="Bootstrap" rating={50} />
            <Progressbar skill="Material UI" rating={65} />
            <Progressbar skill="Styled Components" rating={85} />
          </div>
        </div>
      </div>
      {/* Tools & Related Skills Section */}
      <div className="grid sm:grid-cols-2 mt-6 px-6 md:px-14 py-6 gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <div className="text-lg font-medium mb-2">
              DevOps, Tools & Build Systems
            </div>
            <div className="flex flex-wrap gap-2">
              {devOpsTools.map((tool, idx) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={idx}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-medium mb-2">
              Cloud, Analytics, CMS & Communication
            </div>
            <div className="flex flex-wrap gap-2">
              {cloudAnalyticsCMS.map((tool, idx) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={idx}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1 gap-8">
          <div>
            <div className="text-lg font-medium mb-2">Test Runners</div>
            <div className="flex flex-wrap gap-2">
              {testRunners.map((tool, idx) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={idx}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-medium mb-2">Testing Libraries</div>
            <div className="flex flex-wrap gap-2">
              {testingLibraries.map((tool, idx) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={idx}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-medium mb-2">Related Skills</div>
            <div className="flex flex-wrap gap-2">
              {relatedSkills.map((skill, idx) => (
                <div
                  className="bg-red-100 px-4 py-1 rounded-full text-xs font-medium"
                  key={idx}
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
