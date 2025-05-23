import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import Courses from "./components/Courses";
import CursorDot from "./components/custom/CursorDot";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { useSelector } from "react-redux";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import ScrollFadeInWrapper from "./components/custom/ScrollFadeInWrapper";

function App() {
  const activeTab = useSelector((state) => state.activeTab.currentTab);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tabs = {
    about: <About />,
    skills: <Skills />,
    experience: <Experience />,
    courses: <Courses />,
    projects: <Projects />,
  };

  return (
    <>
      <CursorDot />
      <div className="flex flex-col md:flex-row justify-between gap-10 px-5">
        <Header />
        {isMobile ? (
          <>
            <ScrollFadeInWrapper>
              <About />
            </ScrollFadeInWrapper>
            <ScrollFadeInWrapper>
              <Skills />
            </ScrollFadeInWrapper>
            <ScrollFadeInWrapper>
              <Experience />
            </ScrollFadeInWrapper>
            <ScrollFadeInWrapper>
              <Courses />
            </ScrollFadeInWrapper>
            <ScrollFadeInWrapper>
              <Projects />
            </ScrollFadeInWrapper>
          </>
        ) : (
          <div className="py-10 md:pr-36 max-h-screen overflow-y-scroll w-full">
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
        )}
      </div>
    </>
  );
}

export default App;
