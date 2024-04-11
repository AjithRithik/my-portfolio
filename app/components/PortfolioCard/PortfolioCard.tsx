import Image from "next/image";

type PortfolioCardProps = {
  image: string;
  techStacks: string[];
  projectName: string;
  imageBg?: string;
};

export const PortfolioCard = ({
  image,
  techStacks,
  projectName,
  imageBg = "bg-white",
}: PortfolioCardProps) => {
  const colors = [
    "bg-red-50",
    "bg-blue-50",
    "bg-green-50",
    "bg-purple-50",
    "bg-pink-50",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return (
    <div
      className={`w-full ${randomColor} p-6 rounded-xl hover:cursor-pointer`}
    >
      <div className={`rounded-lg p-5 ${imageBg}`}>
        <div className="relative h-48 w-full overflow-hidden transition-all scale-100 hover:scale-105 duration-500">
          <Image
            src={image}
            alt={projectName}
            fill
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="my-2  flex flex-wrap gap-1">
        {techStacks?.map((tech, index) => (
          <div key={index} className="px-3 py-1 text-xs text-white bg-gray-600 rounded-full">{tech}</div>
        ))}
      </div>
      <div className="mt-1 text-sm font-semibold">{projectName}</div>
    </div>
  );
};
