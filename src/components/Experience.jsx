import Card from "./Card";
import EXPERIENCE from "../experience.json";
import ScrollFadeInWrapper from "./custom/ScrollFadeInWrapper";
const Experience = () => {
  return (
    <section id="experience" className="mt-16">
      <h2 className="md:hidden text-6xl font-thin text-slate-300 mb-10">
        <span className="font-bold">EXP</span>ERIENCE
      </h2>
      {EXPERIENCE.map((exp, index) => (
        <ScrollFadeInWrapper key={index}>
          <Card
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
        </ScrollFadeInWrapper>
      ))}
    </section>
  );
};

export default Experience;
