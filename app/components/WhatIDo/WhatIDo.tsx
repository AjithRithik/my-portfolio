import { ReactNode } from "react";

export type WhatIDoProps = {
    icon: ReactNode;
    title: string;
    desc: string;
    className?: string;
}

export const WhatIDo = ({icon, title, desc, className}: WhatIDoProps) => {
  return (
    <div className={`flex flex-1 p-4  rounded-xl gap-4 mt-4 ${className}`}>
      <div className="text-blue-400 text-3xl">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold">{title}</div>
        <div className="text-[13px] text-gray-700">
          {desc}
        </div>
      </div>
    </div>
  );
};
