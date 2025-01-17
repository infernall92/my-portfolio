import { IconGithub } from "./Icons/GitHub";
import { IconGmail } from "./Icons/Gmail";
import { IconLinkedin } from "./Icons/LinkedIn";

const Header = () => {
  return (
    <header className="flex flex-col justify-between h-screen py-10 pl-36 mr-48">
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-300 text-6xl font-extrabold">
          HRISTO HRISTOV
        </h1>
        <h2 className="text-slate-300 text-3xl font-thin">
          Front End Developer
        </h2>
        <p className="text-slate-500 text-base">
          I craft seamless and visually captivating web experiences.
        </p>
      </div>
      <nav className="">
        <ul className="text-slate-500 text-sm font-bold flex flex-col gap-5">
          <li className="group flex items-center hover:text-slate-300">
            <span className="inline-block h-[0.5px] bg-slate-500 group-hover:bg-slate-300 w-10 group-hover:w-20 mr-3" />
            ABOUT ME
          </li>
          <li className="group flex items-center hover:text-slate-300">
            <span className="inline-block h-[0.5px] bg-slate-500 group-hover:bg-slate-300 w-10 group-hover:w-20 mr-3" />
            SKILLS
          </li>
          <li className="group flex items-center hover:text-slate-300">
            <span className="inline-block h-[0.5px] bg-slate-500 group-hover:bg-slate-300 w-10 group-hover:w-20 mr-3" />
            EXPERIENCE
          </li>
          <li className="group flex items-center hover:text-slate-300">
            <span className="inline-block h-[0.5px] bg-slate-500 group-hover:bg-slate-300 w-10 group-hover:w-20 mr-3" />
            PROJECTS
          </li>
        </ul>
      </nav>
      <ul className="flex gap-10 text-slate-500 text-base font-semibold">
        <li className="flex justify-center items-center">
          <a
            href="https://github.com/infernall92"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-[inherit]"
          >
            <IconGithub className="w-6 h-6" />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/hristo-hristov-931349285/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-[inherit]"
          >
            <IconLinkedin className="w-6 h-6" />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a
            href="mailto:hhristo.hristovv@gmail.com"
            className="cursor-[inherit]"
          >
            <IconGmail className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
