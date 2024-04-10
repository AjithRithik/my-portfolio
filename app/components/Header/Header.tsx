import Image from "next/image";

export const Header = () => (
  <div className="flex flex-1 justify-start lg:justify-end items-center">
    <div className="relative h-20 sm:h-28 w-32 sm:w-40">
      <Image
        src="/my-logo.png"
        fill
        alt="Ajith kumar"
        className="object-contain"
      />
    </div>
  </div>
);
