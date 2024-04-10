import { ReactNode } from "react";

export type WhatIDoProps = {
  icon: ReactNode;
  title: string;
  desc: string;
  className?: string;
};

export const WhatIDo = ({ icon, title, desc, className }: WhatIDoProps) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center sm:items-start flex-1 p-4 rounded-xl gap-6 md:gap-4 mt-4 ${className}`}
    >
      <div className="text-blue-400 text-5xl md:text-3xl">{icon}</div>
      <div className="flex items-center sm:items-start flex-col gap-2">
        <div className="font-semibold text-center sm:text-left">{title}</div>
        <div className="text-[13px] text-gray-700 text-justify sm:text-left">{desc}</div>
      </div>
    </div>
  );
};
