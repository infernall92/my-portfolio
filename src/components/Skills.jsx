import IconWithGlow from "./custom/IconWithGlow";
import { IconCss3 } from "./Icons/Css";
import { IconFramerMotion } from "./Icons/FramerMotion";
import { IconGit } from "./Icons/Git";
import { IconHtml5 } from "./Icons/Html";
import { IconJavascript } from "./Icons/JavaScript";
import { IconNextjs } from "./Icons/Next";
import { IconReact } from "./Icons/React";
import { IconRedux } from "./Icons/Redux";
import { IconTailwindCss } from "./Icons/Tailwind";
import { IconTypescript } from "./Icons/TypeScript";

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
    {
      name: "HTML5",
      tech: (
        <IconHtml5 className="w-12 h-12 relative z-10 group-hover:text-[#ff5733]" />
      ),
      color: "#ff5733",
    },
    {
      name: "CSS3",
      tech: (
        <IconCss3 className="w-10 h-10 relative z-10 group-hover:text-[#2965f1]" />
      ),
      color: "#264de4",
    },
    {
      name: "JavaScript",
      tech: (
        <IconJavascript className="w-11 h-11 relative z-10 group-hover:text-[#f0db4f]" />
      ),
      color: "#f0db4f",
    },
    {
      name: "TypeScript",
      tech: (
        <IconTypescript className="w-10 h-10 relative z-10 group-hover:text-[#007acc]" />
      ),
      color: "#007acc",
    },
    {
      name: "ReactJS",
      tech: (
        <IconReact className="w-10 h-10 relative z-10 group-hover:text-[#61DBFB]" />
      ),
      color: "#61DBFB",
    },
    {
      name: "Next.js",
      tech: (
        <IconNextjs className="w-10 h-10 relative z-10 group-hover:text-[#000000]" />
      ),
      color: "#FFFFFF",
    },
    {
      name: "Redux",
      tech: (
        <IconRedux className="w-10 h-10 relative z-10 group-hover:text-[#764abc]" />
      ),
      color: "#764abc",
    },
    {
      name: "Tailwind CSS",
      tech: (
        <IconTailwindCss className="w-10 h-10 relative z-10 group-hover:text-[#3490dc]" />
      ),
      color: "#3490dc",
    },
    {
      name: "Framer Motion",
      tech: (
        <IconFramerMotion className="w-10 h-10 relative z-10 group-hover:text-[#be29ec]" />
      ),
      color: "#ffffff",
    },
    {
      name: "GIT",
      tech: (
        <IconGit className="w-10 h-10 relative z-10 group-hover:text-[#F1502F]" />
      ),
      color: "#F1502F",
    },
  ];
  return (
    <div className="text-slate-500 my-5 flex flex-col md:flex-row justify-between gap-10">
      <div id="soft-skills" className="flex-1 mb-10 md:mb-0">
        <h2 className="text-slate-300 text-2xl font-thin flex items-center justify-center mb-10 md:mb-5">
          <span className="font-bold">SOFT</span>&nbsp;SKILLS
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
        <h2 className="text-slate-300 text-2xl font-thin flex items-center justify-center mb-10 md:mb-5">
          TECH&nbsp;<span className="font-bold">STACK</span>
        </h2>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {techSkills.map((technology, index) => (
            <IconWithGlow
              key={index}
              Icon={technology.tech}
              glowColor={technology.color}
              alt={technology.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
