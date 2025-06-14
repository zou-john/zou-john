import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Project 1",
    description: "#1",
    imageUrl: "/1.jpg",
  },
  {
    title: "Machine Learning Internship",
    description: "Working at Ericsson as a machine learning intern, developing and implementing ML solutions for telecommunications applications.",
    imageUrl: "/2.jpg",
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my projects and experience.",
    imageUrl: "/profolio.webp",
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-200px)] py-12">
      <h1 className="text-4xl font-medium mb-12">Projects</h1>
      <div className="grid gap-8 w-full max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </main>
  );
} 