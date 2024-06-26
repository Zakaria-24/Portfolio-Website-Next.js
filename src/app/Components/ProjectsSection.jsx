"use client";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "MediSnap",
    description: "Multi-Vendor medicine selling e-commerce",
    image: "https://i.ibb.co/0r1V5xK/Screenshot-2024-06-26-115525.png",
    gitUrl: "https://github.com/Zakaria-24/MediSnap",
    previewUrl: "https://medi-snap-f3dd2.web.app",
  },
  {
    id: 2,
    title: "EcoFy",
    description: "Alternative Products Information System",
    image: "https://i.ibb.co/bKr3MZR/EcoFy.jpg",
    gitUrl: "https://github.com/Zakaria-24/EcoFy-main-Client-Server",
    previewUrl: "https://ecofy-dfbef.web.app",
  },
  {
    id: 3,
    title: "ZackY_T.Travel",
    description: "Tourism Management System",
    image: "https://i.ibb.co/xJS4hV3/Zacky-T-Travel.jpg",
    gitUrl: "https://github.com/Zakaria-24/ZackY_T.Travel-main",
    previewUrl: "https://southeast-asia-ec5f1.web.app",
  },
];

const ProjectsSection = () => {

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-[#ae9807] mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;