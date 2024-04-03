type ProgressbarProps = {
  skill: string;
  rating: number;
};

export const Progressbar = ({ skill, rating }: ProgressbarProps) => {
  const colors = [
    "bg-red-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-purple-400",
    "bg-pink-400",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between text-xs font-semibold">
        <div>{skill}</div>
        <div>{rating}%</div>
      </div>
      <div className="relative w-full h-1 rounded-lg bg-gray-400">
        <div
          className={`absolute ${randomColor} h-full left-0 rounded-lg `}
          style={{ width: `${rating}%` }}
        />
      </div>
    </div>
  );
};
