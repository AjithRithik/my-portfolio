"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";

type link = {
  href: string;
  icon: ReactNode;
  label: string;
};

const navLinks: link[] = [
  {
    href: "/",
    icon: <FaRegUser />,
    label: "About",
  },
  {
    href: "/resume",
    icon: <FaRegFileAlt />,
    label: "Resume",
  },
  {
    href: "/my-work",
    icon: <MdWorkOutline />,
    label: "Work",
  },
  {
    href: "/contact",
    icon: <RiContactsBookLine />,
    label: "Contact",
  },
];

export const Navigation = () => {
  const currentPath = usePathname();

  return (
    <div className="flex flex-col gap-4">
      {navLinks?.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          scroll={true}
          className={`${
            currentPath === link?.href
              ? "bg-blue-400 text-white"
              : "bg-gray-200"
          } px-4 h-24 w-full rounded-xl justify-center items-center flex flex-col gap-2 text-gray-800
          hover:bg-blue-600 hover:text-white transition-all duration-500`}
        >
          <div className="text-3xl">{link?.icon}</div>
          <div className="text-sm">{link?.label}</div>
        </Link>
      ))}
    </div>
  );
};
