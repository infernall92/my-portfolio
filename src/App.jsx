import { About } from "./components/About";
import CursorDot from "./components/CursorDot";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <CursorDot />
      <div className="flex justify-between gap-10">
        <Header />
        <div className="py-10 pr-36">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
