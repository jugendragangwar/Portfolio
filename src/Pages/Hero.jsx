import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div
        className="w-full h-full bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://techakim.com/sam/tg/7268/li/imgs/bg-portfolio.jpg')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content Section */}
        <div className="w-full h-full flex justify-center items-center px-6 sm:px-12 lg:px-20 text-white relative">
          <div className="text-center lg:text-left max-w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
              Hi there, I am
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#FFBD39]">
              Samuel Abera!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-6">
              I am an experienced full-stack developer with 4+ years of expertise in Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
            </p>

            {/* Buttons */}
            <div className="flex justify-center sm:justify-start gap-4">
              <button className="px-6 py-3 text-lg font-semibold rounded-md bg-[#FFBD39] text-black hover:bg-yellow-500 transition-all">
                Click For Hire Me
              </button>
              <button className="px-6 py-3 text-lg font-semibold outline outline-2 rounded-md text-white hover:text-[#FFBD39] cursor-pointer transition-all">
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
