import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Project 1",
    description: "#1",
    imageUrl: "/zou-john/1.jpg",
  },
  {
    title: "Project 2",
    description: "#2",
    imageUrl: "/zou-john/2.jpg",
  },
  {
    title: "Project 3",
    description: "#3",
    imageUrl: "/zou-john/3.jpg",
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