"use client";

import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "../Navigation";
import { useClickAway } from "react-use";
import { usePathname } from "next/navigation";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const pathName = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathName]);

  useClickAway(ref, () => setOpen(false));

  return (
    <div className="flex flex-1 justify-between xl:justify-end items-center">
      <div className="relative h-20 sm:h-28 w-20 sm:w-40">
        <Image
          src="/my-logo.png"
          fill
          alt="Ajith kumar"
          className="object-contain"
        />
      </div>
      {isOpen && (
        <div className="z-10 fixed bg-gray-900 bg-opacity-50 inset-0 xl:hidden" />
      )}
      <div ref={ref} className="xl:hidden ">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        <div
          className={`fixed ${
            isOpen ? "right-0" : "-right-[100%]"
          } h-full w-32 z-20 top-0 justify-center right-0 p-5 pt-0 bg-white transition-all overflow-auto`}
          style={{ boxShadow: "0 4px 6px rgba(0,0,0,.08)" }}
        >
          <div className="absolute top-5 right-4">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          </div>
          <div className="mt-20">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};
