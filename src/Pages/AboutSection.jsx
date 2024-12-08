import Men from '../assets/Men.png';

const AboutSection = () => {

  return (
    <section className='pt-10 min-h-[110vh] bg-[#1a1a1a] overflow-hidden'>
      <div className="mx-6 md:mx-20">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold   text-[#FFBD39] sm:text-4xl text-center sm:text-left">
              Hey 👋 I am Jugendra Gangwar
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8 text-center sm:text-left">
              I am a passionate and detail-oriented front-end engineer with over 4 years of experience in building responsive, user-friendly, and high-performance web applications. My expertise includes working with modern technologies such as React, Tailwind CSS, JavaScript, and more.
            </p>



            <div className="mt-6 justify-center sm:justify-start flex">
              <a
                href="https://drive.google.com/file/d/1zEohw932hGuQI12IHqS9pqZrPoQEhmRa/view"
                download="Jugendra_Gangwar_Resume"
                className="btn"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative mt-10 sm:mt-0">
            <img
              className="absolute inset-x-0 bottom-0 -mb-10 w-[50%] -translate-x-1/2 left-1/2 transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:translate-y-2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Blob Shape"
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:translate-y-3"
              src={Men}
              alt="Business Woman"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
