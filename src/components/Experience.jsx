import { ExperienceCard } from "./ExperienceCard";
import EXPERIENCE from "../experience.json";

export const Experience = () => {
  return (
    <section id="experience" className="mt-16">
      {EXPERIENCE.map((exp, index) => (
        <ExperienceCard
          key={index}
          from={exp.time.from}
          to={exp.time.to}
          role={exp.role}
          workplace={exp.workplace}
          description={exp.description}
          technologies={exp.technologies}
        />
      ))}
    </section>
  );
};
