import React from 'react';

const Project = () => {
    // Projects data array
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A modern and responsive personal portfolio.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
        {
            id: 2,
            title: 'E-commerce Store',
            description: 'A scalable and user-friendly e-commerce platform.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
        {
            id: 3,
            title: 'Social Media App',
            description: 'A feature-rich social media application.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
        {
            id: 4,
            title: 'Blog Platform',
            description: 'A dynamic blog platform with CMS capabilities.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
        {
            id: 5,
            title: 'Mobile App Design',
            description: 'An intuitive mobile application design.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
        {
            id: 6,
            title: 'Cloud Integration Tool',
            description: 'A cloud integration tool for seamless operations.',
            image: 'https://placehold.jp/150x150.png',
            link: '#',
        },
    ];

    return (
        <section className="py-16 bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Our Projects</h2>
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
                            <div className="absolute inset-0 bg-[#FFBD39] bg-opacity-80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                                <p className="text-black mb-4">{project.description}</p>
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
