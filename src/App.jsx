import About from "./components/About";
import Courses from "./components/Courses";
import CursorDot from "./components/custom/CursorDot";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { useSelector } from "react-redux";

function App() {
  const activeTab = useSelector((state) => state.activeTab.currentTab);

  return (
    <>
      <CursorDot />
      <div className="flex justify-between gap-10">
        <Header />
        <div className="py-10 pr-36 max-h-screen overflow-y-scroll">
          {activeTab === "about" && <About />}
          {activeTab === "skills" && <Skills />}
          {activeTab === "experience" && <Experience />}
          {activeTab === "courses" && <Courses />}
        </div>
      </div>
    </>
  );
}

export default App;
