import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  const content = (
    <div className="flex flex-col md:flex-row gap-6 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-colors bg-white/5 hover:bg-white/10">
      <div className="relative w-full md:w-48 h-48 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-200 font-sans">{description}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <Link href={link} className="block hover:no-underline">
        {content}
      </Link>
    );
  }

  return content;
} 