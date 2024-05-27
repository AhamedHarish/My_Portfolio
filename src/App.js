import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import Education from "./components/Education/education";
import ReachMe from "./components/ReachMe/reachme";
import Footer  from "./components/Footer/footer";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Education/>
      <ReachMe/>
      <Footer/>
    </div>
  );
}

export default App;
