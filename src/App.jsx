import About from "./components/About";
import CursorDot from "./components/custom/CursorDot";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <CursorDot />
      <div className="flex justify-between gap-10">
        <Header />
        <div className="py-10 pr-36">
          <About />
          <Skills />
          <Experience />
        </div>
      </div>
    </>
  );
}

export default App;
