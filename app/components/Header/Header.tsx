import Image from "next/image";

export const Header = () => (
  <div className="flex flex-1 justify-end items-center">
    <div className="relative h-28 w-40">
      <Image
        src="/my-logo.png"
        fill
        alt="Ajith kumar"
        className="object-contain"
      />
    </div>
  </div>
);
