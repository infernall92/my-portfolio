/* eslint-disable react/prop-types */
const Card = ({
  from,
  to,
  role,
  place,
  description,
  technologies,
  learning,
  working,
  linkLabel,
  href,
}) => {
  return (
    <div className="text-slate-500 flex gap-5 group hover:bg-slate-800 hover:border-slate-700 rounded-md p-2">
      <div className="text-xs font-medium pt-2 max-w-20 flex flex-col items-center">
        {/* <p>
          {from} - {to}
        </p> */}
        <p className="whitespace-nowrap">{from}</p>
        <span className="block w-16 h-[1px] bg-slate-500" />
        <p className="whitespace-nowrap">{to}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg text-slate-300 group-hover:text-cyan-500">
          {role}
        </p>
        <p className="font-thin text-slate-300">{place}</p>
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
        {learning && (
          <a
            href={href}
            className="text-slate-300 text-xs cursor-[inherit]"
            target="_blank"
            rel="noopener noreferrer"
          >
            CERTIFICATE
          </a>
        )}
        {working && (
          <a
            href={href}
            className="text-slate-300 text-xs cursor-[inherit]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkLabel}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
