import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/activeTab.slice";
import TabItem from "./custom/TabItem";
import Socials from "./Socials";
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
    <header className="flex flex-col justify-between h-screen py-10 md:pl-36 md:mr-48">
      <div className="flex flex-col justify-between h-full py-40 gap-4 md:justify-normal md:h-fit md:py-0">
        <div className="flex flex-col gap-3">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-slate-300 text-7xl md:text-6xl font-extrabold"
          >
            HRISTO
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-slate-300 text-7xl md:text-6xl font-extrabold"
          >
            HRISTOV
          </motion.h1>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-slate-300 text-3xl text-right font-thin"
        >
          Front End Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          className="text-slate-500 text-base"
        >
          I craft seamless and visually captivating web experiences.
        </motion.p>
      </div>

      <nav className="hidden md:block">
        <ul className="text-slate-500 text-sm font-bold flex flex-col gap-5">
          {TABS.map((tab, index) => (
            <TabItem
              key={index}
              tab={tab}
              isActive={activeTab === tab.actionTab}
              onClick={() => handleClick(tab.actionTab)}
            />
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <Socials />
      </div>
    </header>
  );
};

export default Header;
