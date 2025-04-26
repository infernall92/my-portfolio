import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import Courses from "./components/Courses";
import CursorDot from "./components/custom/CursorDot";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { useSelector } from "react-redux";

function App() {
  const activeTab = useSelector((state) => state.activeTab.currentTab);

  const tabs = {
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    courses: <Courses />,
  };

  return (
    <>
      <CursorDot />
      <div className="flex justify-between gap-10">
        <Header />
        <div className="py-10 pr-36 max-h-screen overflow-y-scroll w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {tabs[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default App;
