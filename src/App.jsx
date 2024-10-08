import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechSection from "./components/TechSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased"> {/* Fixed typo here */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container max-sm:w-11/12 sm:w-10/12 mx-auto">
        <Navbar />
        <HeroSection />
        <TechSection />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
