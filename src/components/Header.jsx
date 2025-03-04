import IconWithGlow from "./custom/IconWithGlow";
import { IconGithub } from "./Icons/GitHub";
import { IconGmail } from "./Icons/Gmail";
import { IconLinkedin } from "./Icons/LinkedIn";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/activeTab.slice";
import { motion } from "framer-motion";

const Header = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab.currentTab);

  const TABS = [
    {
      label: "ABOUT ME",
      actionTab: "about",
    },
    {
      label: "SKILLS",
      actionTab: "skills",
    },
    {
      label: "LEARNING",
      actionTab: "courses",
    },
    {
      label: "EXPERIENCE",
      actionTab: "experience",
    },
    {
      label: "PROJECTS",
      actionTab: "projects",
    },
  ];

  const handleClick = (tab) => {
    dispatch(setActiveTab(tab));
  };

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
          {TABS.map((tab, index) => (
            <li
              key={index}
              className={`group flex items-center hover:text-slate-300 ${
                activeTab === tab.actionTab && "text-slate-300"
              }`}
              onClick={() => handleClick(tab.actionTab)}
            >
              <motion.span
                className="inline-block h-[0.5px] mr-3"
                initial={false}
                animate={{
                  backgroundColor:
                    activeTab === tab.actionTab ? "#CBD5E1" : "#64748B", // bg-slate-300 / bg-slate-500
                  width: activeTab === tab.actionTab ? "80px" : "40px",
                }}
                whileHover={{ backgroundColor: "#CBD5E1", width: "80px" }}
                transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
              />
              {tab.label}
            </li>
          ))}
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
            <IconWithGlow
              Icon={
                <IconGithub className="w-6 h-6 group-hover:text-[#000000]" />
              }
              glowColor="#ffffff"
            />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a
            href="https://www.linkedin.com/in/hristo-hristov-931349285/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-[inherit]"
          >
            <IconWithGlow
              Icon={
                <IconLinkedin className="w-6 h-6 group-hover:text-[#0A66C2]" />
              }
              glowColor="#ffffff"
            />
          </a>
        </li>
        <li className="flex justify-center items-center">
          <a
            href="mailto:hhristo.hristovv@gmail.com"
            className="cursor-[inherit]"
          >
            <IconWithGlow
              Icon={
                <IconGmail className="w-8 h-8 group-hover:text-[#c71610]" />
              }
              glowColor="#f2a60c"
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
