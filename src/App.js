import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Statistics from "./components/Stats";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProjectShowcase from "./components/Projects";
import Testimonial from "./components/Testimonial";

function App() {
  return (
<div>
  <Navbar />
  <Hero/>
  <Statistics/>
  <AboutMe/>
  <ProjectShowcase/>
  <Testimonial/>  
  <Contact/>
    </div>
  );
}

export default App;
