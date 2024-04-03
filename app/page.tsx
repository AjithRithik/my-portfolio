'use client'

import { FaCode } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import { Slider } from "./components/Slider";
import { Heading } from "./components/Heading";

export default function Home() {
  return (
    <>
      <div className="px-14">
        <Heading title="About"/>
        <div className="text-gray-600 text-justify">
          <p>
            Hey there{" "}
            <MdWavingHand className="text-yellow-600 inline-block text-xl -mt-1" />,
            <br />
            <br/>
            I'm Ajithkumar. With over 7 years immersed in the art of Enterprise
            Application product development, I wield a mastery of advanced
            JavaScript methodologies, crafting reusable UI components that dance
            seamlessly on robust user interfaces. My journey is a tech carnival
            showcasing my wild ride through diverse computer technologies,
            fueled by an insatiable hunger for new knowledge.
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
        <div className="w-full grid grid-cols-2 justify-between gap-6 flex-wrap">
          <div className="flex flex-1 p-4 bg-red-100 rounded-xl gap-4">
            <div className="text-blue-400 text-3xl">
              <FaCode />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Web development</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod tincidunt volutpat.
              </div>
            </div>
          </div>
          <div className="flex flex-1 p-4 bg-blue-100 rounded-xl gap-4">
            <div className="text-blue-400 text-3xl">
              <FaCode />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Web development</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod tincidunt volutpat.
              </div>
            </div>
          </div>
          <div className="flex flex-1 p-4 bg-blue-100 rounded-xl gap-4">
            <div className="text-blue-400 text-3xl">
              <FaCode />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Web development</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod tincidunt volutpat.
              </div>
            </div>
          </div>
          <div className="flex flex-1 p-4 bg-red-100 rounded-xl gap-4">
            <div className="text-blue-400 text-3xl">
              <FaCode />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">Web development</div>
              <div className="text-sm">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam euismod tincidunt volutpat.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gray-100 px-14 py-6">
        <div className="text-center text-2xl font-semibold">Projects</div>
        <div className="mt-12 relative">
          <Slider/>
        </div>
      </div>
    </>
  );
}
