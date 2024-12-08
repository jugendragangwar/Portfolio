import React from 'react';
import Portfolio from '../assets/Portfolio.png'
import Divine from '../assets/divine.png'
import Weather from '../assets/Weather.png'
import Food from '../assets/food.png'
import Beris from '../assets/Beris.png'
import NFC from '../assets/NFC.png'

const Project = () => {
    const projects = [
        {
            id: 2,
            title: 'Divine Spiritual Platform',
            technologies: ['Web technologies (front-end and back-end)'],
            description: 'A spiritually focused platform offering resources, community engagement, and e-commerce capabilities for spiritual products and services.',
            services: ['Spiritual resources', 'Community engagement', 'E-commerce functionality'],
            image: Divine,
            link: 'https://divinezone.in/',
        },
        {
            id: 5,
            title: 'Beris Magic Web Application',
            technologies: ['Custom web technologies'],
            description: 'A captivating web application offering unique interactive features and a visually immersive experience tailored to user needs.',
            services: ['Interactive features', 'Visually immersive experience'],
            image: Beris,
            link: 'https://berismagic.in/',
        },
        {
            id: 1,
            title: 'Personal Portfolio Website',
            technologies: ['React.js', 'Tailwind CSS'],
            description: 'A sleek and responsive personal portfolio built with React.js and Tailwind CSS. Showcases skills, projects, and contact information in an elegant dark theme.',
            services: ['Portfolio showcase', 'Responsive design', 'Dark theme'],
            image: Portfolio,
            link: 'https://portfolio-git-main-jugendragangwars-projects.vercel.app/',
        },
        {
            id: 6,
            title: 'NFC Smart Card Integration',
            technologies: ['NFC technology', 'Cloud integrations'],
            description: 'An advanced NFC-based solution enabling secure, seamless transactions and cloud integrations for modern businesses.',
            services: ['Secure NFC transactions', 'Cloud integrations'],
            image: NFC,
            link: '#',
        },
        {
            id: 4,
            title: 'Food Website',
            technologies: ['CMS', 'Web technologies (unspecified)'],
            description: 'A vibrant food blogging platform featuring dynamic recipe management, stunning visuals, and an integrated CMS for content creators.',
            services: ['Recipe management', 'Food blogging', 'Integrated CMS'],
            image: Food,
            link: '#',
        },
        {
            id: 3,
            title: 'Weather Application',
            technologies: ['React.js', 'Weather API'],
            description: 'An interactive weather application providing real-time forecasts, location-based data, and a user-friendly interface for planning and insights.',
            services: ['Real-time weather forecasts', 'Location-based data', 'Interactive interface'],
            image: Weather,
            link: 'https://weather-application-wine-nu.vercel.app/',
        },
       
       
       
    ];



    return (
        <section className="py-16 bg-[#1a1a1a] text-white">
            <div className="mx-6 md:mx-20">
                <h2 className="text-4xl font-bold mb-8 text-center  text-[#FFBD39]">Our Work</h2>
                <p className="text-gray-400 mb-12 text-center">
                    Explore some of our standout projects, showcasing our expertise and creativity.
                </p>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className='relative group overflow-hidden'>
                            {/* Project Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#FFBD39]  flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                                <p className="text-black mb-4 text-justify mx-4">{project.description}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-black text-[#FFBD39] font-bold rounded shadow hover:bg-gray-800 transition"
                                    >
                                        View
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-black text-[#FFBD39] font-bold rounded shadow hover:bg-gray-800 transition"
                                    >
                                        Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
