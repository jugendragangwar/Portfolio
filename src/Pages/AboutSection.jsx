import Men from '../assets/Men.png';

const AboutSection = () => {

  return (
    <section className='pt-10 min-h-[110vh] bg-[#1a1a1a] overflow-hidden'>
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br className="block sm:hidden" />Jugendra Gangwar
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
              I am a passionate and detail-oriented front-end engineer with over 4 years of experience in building responsive, user-friendly, and high-performance web applications. My expertise includes working with modern technologies such as React, Tailwind CSS, JavaScript, and more.
            </p>

            {/* <p className="mt-4 text-xl text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-400"></span>
                <span className="relative">Have a question?</span>
              </span>
              <br className="block sm:hidden" />
              Ask me on <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p> */}

            <div className="mt-6">
              <a
                href="https://drive.google.com/file/d/1zEohw932hGuQI12IHqS9pqZrPoQEhmRa/view"
                download="Jugendra_Gangwar_Resume"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 rounded-lg transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-10 w-[50%] -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
              alt="Blob Shape"
            />
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
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
