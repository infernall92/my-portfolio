import PROJECTS from "../projects.json";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="">
      <div className="flex flex-col gap-5">
        <h2 className="md:hidden text-6xl font-thin text-slate-300 my-10">
          PROJECTS
        </h2>
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
