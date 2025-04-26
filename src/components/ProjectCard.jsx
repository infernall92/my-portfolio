/* eslint-disable react/prop-types */
const ProjectCard = ({
  projectName,
  framework,
  description,
  technologies,
  liveDemo,
  link,
}) => {
  return (
    <div className="text-slate-500 flex gap-5 group hover:bg-slate-800 hover:border-slate-700 rounded-md p-2">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg text-slate-300 group-hover:text-cyan-500">
          {projectName}
        </p>
        <p className="font-thin text-slate-300">{framework}</p>
        <p>{description}</p>

        <div className="flex flex-wrap">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-cyan-500 bg-cyan-900 bg-opacity-50 rounded-full py-1 px-2 m-1 whitespace-nowrap"
            >
              {technology}
            </span>
          ))}
        </div>
        {liveDemo && (
          <a
            href={link}
            className="text-slate-300 text-xs cursor-[inherit]"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHECK IT OUT LIVE
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
