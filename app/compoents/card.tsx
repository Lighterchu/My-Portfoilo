import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
  techstack: string[];
};

export default function Card({
  title,
  description,
  link,
  image,
  techstack,
}: CardProps) {
  return (
    <div className="bg-gray-800  p-6 rounded-lg shadow-md mt-2 relative ">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>

      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="rounded-md mb-4 w-full"
      />

      <p className="text-gray-300 mb-4">{description}</p>
      <div>
        <h4 className="text-lg font-semibold mb-2">Tech Stack:</h4>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          {techstack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between  space-x-4">
        <div className=" absolute bottom-0 left-0 w-full flex justify-between p-4">
        <a href={link} className="text-blue-500 hover:underline">
          View Project
        </a>
        <a href={link} className="text-blue-500 hover:underline">
          View Project On GitHub
        </a>
        </div>
      </div>
    </div>
  );
}
