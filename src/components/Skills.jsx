const Skills = () => {
  const softSkills = [
    "Problem solver",
    "Team Player",
    "Fast learner",
    "Self driven",
    "Motivated",
    "Creative",
    "Adaptive",
    "Not scared of the unknown :)",
  ];
  const techSkills = [
    "HTML5",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Framer Motion",
    "GIT",
  ];
  return (
    <div className="text-slate-500 my-5 flex justify-between gap-10">
      <div id="soft-skills" className="flex-1">
        <h2 className="text-slate-300 text-2xl font-thin flex items-center justify-center mb-5">
          SOFT SKILLS
        </h2>
        <ol>
          {softSkills.map((skill, index) => (
            <li
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {skill}
            </li>
          ))}
        </ol>
      </div>
      <div id="tech-stack" className="flex-1">
        <h2 className="text-slate-300 text-2xl font-thin flex items-center justify-center mb-5">
          TECH STACK
        </h2>
        <div className="flex flex-wrap">
          {/* TO BE DONE WITH ICONS */}
          {techSkills.map((technology) => (
            <span
              key={technology}
              className="text-cyan-500 bg-cyan-900 bg-opacity-50 rounded-full py-1 px-2 m-1 whitespace-nowrap"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
