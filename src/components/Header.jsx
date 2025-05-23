import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/activeTab.slice";
import TabItem from "./custom/TabItem";
import Socials from "./Socials";

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
        <h1 className="text-slate-300 text-7xl md:text-6xl font-extrabold">
          HRISTO HRISTOV
        </h1>
        <h2 className="text-slate-300 text-3xl text-right font-thin">
          Front End Developer
        </h2>
        <p className="text-slate-500 text-base">
          I craft seamless and visually captivating web experiences.
        </p>
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
