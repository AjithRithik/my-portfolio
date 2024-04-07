import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaCalendarAlt, FaCloudDownloadAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

const socialInfo = [
  {
    href: "https://www.linkedin.com/in/ajithkumaroffical/",
    iconColor: "text-blue-900 hover:text-white",
    icon: <GrLinkedinOption />,
  },
  {
    href: "https://github.com/AjithRithik",
    iconColor: "text-black hover:text-white",
    icon: <FaGithub />,
  },
  {
    href: "https://www.instagram.com/ajith_rithik/",
    iconColor: "text-red-400 hover:text-white",
    icon: <GrInstagram />,
  }
];

export const ProfileInfo = () => (
  <div className="w-full px-7 py-7 flex flex-col items-center gap-4">
    <div className="relative h-44 w-[60%] rounded-xl bg-red-300 overflow-hidden -m-36">
      <Image
        src="/profile-image.png"
        alt="Ajith kumar"
        fill
        className="object-cover"
      />
    </div>
    <div className="font-semibold text-2xl capitalize mt-36">
      Ajith kumar Susai A
    </div>
    <div className="text-sm font-semibold bg-gray-100 px-4 py-1 rounded-full">
      Frontend Developer
    </div>
    <div className="flex gap-5">
      {socialInfo?.map((info, index) => (
        <Link
          href={info?.href}
          key={index}
          target="_blank"
          className={`bg-gray-100 text-2xl h-10 w-10 rounded-lg justify-center items-center flex hover:bg-blue-600 hover:text-white transition-all duration-200 ${info?.iconColor}`}
        >
          {info?.icon}
        </Link>
      ))}
    </div>
    <div className="mt-3 bg-gray-100 p-5 w-full rounded-lg">
      <div className="flex gap-3 border-b py-2 items-center">
        <div
          className="h-10 w-10 rounded-lg flex justify-center items-center bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,.08)" }}
        >
          <HiOutlineDevicePhoneMobile className="text-red-400 text-2xl" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="text-xs">Phone</div>
          <div className="font-medium text-[13px] text-gray-800">
            +91 87 54 789957
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b py-2 items-center">
        <div
          className="h-10 w-10 rounded-lg flex justify-center items-center bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,.08)" }}
        >
          <CiMail className="text-green-800 text-2xl" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="text-xs">Mail</div>
          <div className="font-medium text-[13px] text-gray-800">
            official.ajith171995@gmail.com
          </div>
        </div>
      </div>
      <div className="flex gap-3 border-b py-2 items-center">
        <div
          className="h-10 w-10 rounded-lg flex justify-center items-center bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,.08)" }}
        >
          <FaLocationDot className="text-red-300 text-2xl" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="text-xs">Location</div>
          <div className="font-medium text-[13px] text-gray-800">Madurai</div>
        </div>
      </div>
      <div className="flex gap-3 py-2 items-center">
        <div
          className="h-10 w-10 rounded-lg flex justify-center items-center bg-white"
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,.08)" }}
        >
          <FaCalendarAlt className="text-purple-600 text-2xl" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <div className="text-xs">Birthday</div>
          <div className="font-medium text-[13px] text-gray-800">
            June 17, 1995
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6">
      <button className="flex gap-1 text-white items-center bg-blue-500 font-semibold text-lg px-4 py-2 rounded-xl">
        <div>
          <FaCloudDownloadAlt />
        </div>
        <div>Download Resume</div>
      </button>
    </div>
  </div>
);
