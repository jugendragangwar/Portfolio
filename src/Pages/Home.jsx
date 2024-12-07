import Skills from "./Skills";
import Services from "./Services";
import Hero from "./Hero";
import Project from "./Project";
import Contact from "./Contectme";
import AboutSection from "./AboutSection";

const Home = () => {




  return (
    <>
      <div className="">
       <Hero/>
   
        <Skills />
        <AboutSection/>
        <Services />
        <Project />
        <Contact/>
      </div>
    </>
  );
};

export default Home;
