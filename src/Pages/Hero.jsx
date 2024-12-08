import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div
        className="w-full h-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://techakim.com/sam/tg/7268/li/imgs/bg-portfolio.jpg')",
        }}
      >

        {/* Content Section */}
        <div className="w-full h-full flex justify-center items-center px-6 sm:px-12 lg:px-20 text-white relative">
          <div className="text-center lg:text-left max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              Hi there, I am
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FFBD39]">
              Jugendra Gangwar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-4 mb-6">
              I am an experienced Front-End developer with 1+ years of expertise in JavaScript and React.js.
            </p>

            {/* Button */}
            <Link to='/Contectme'>
              <button className="btn ease-in-out delay-100 duration-300">
                Click For Hire Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
