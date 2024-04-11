type HeadingProps = {
    title: string;
}

export const Heading = ({title}: HeadingProps) => (
  <div className="flex items-center gap-6 mb-4">
    <h1 className="text-4xl font-bold">{title}</h1>
    <div className="h-1 bg-blue-500 w-1/3 rounded-full" />
  </div>
);
