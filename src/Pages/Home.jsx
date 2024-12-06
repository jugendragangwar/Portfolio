import Skills from "./Skills";
import Services from "./Services";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import Project from "./Project";

const Home = () => {




  return (
    <>
      <div className="">
       <Hero/>
       <AboutSection/>
        <Skills />
        <Services />
        <Project />
      </div>
    </>
  );
};

export default Home;
