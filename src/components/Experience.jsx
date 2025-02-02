import Card from "./Card";
import EXPERIENCE from "../experience.json";
const Experience = () => {
  return (
    <section id="experience" className="mt-16">
      {EXPERIENCE.map((exp, index) => (
        <Card
          key={index}
          from={exp.time.from}
          to={exp.time.to}
          role={exp.role}
          place={exp.workplace}
          description={exp.description}
          technologies={exp.technologies}
          working
          linkLabel={"KONGWallet Page"}
          href={exp.link}
        />
      ))}
    </section>
  );
};

export default Experience;
