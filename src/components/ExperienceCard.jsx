export const ExperienceCard = ({
  from,
  to,
  role,
  workplace,
  description,
  technologies,
}) => {
  return (
    <div className="text-slate-500 flex gap-5 group hover:bg-slate-800 hover:border-slate-700 rounded-md p-2">
      <div className="w-full text-xs font-medium pt-2">
        <p>
          {from} - {to}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg text-slate-300 group-hover:text-cyan-500">
          {role}
        </p>
        <p className="font-thin text-slate-300">{workplace}</p>
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
      </div>
    </div>
  );
};
