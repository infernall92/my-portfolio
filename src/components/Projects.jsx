import PROJECTS from "../projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="flex flex-col gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            projectName={project.name}
            framework={project.framework}
            description={project.description}
            liveDemo
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
