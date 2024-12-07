import React from 'react';

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and high-performance websites tailored to your needs.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/code.png',
        },
        {
            id: 2,
            title: 'UI/UX Design',
            description: 'Crafting intuitive and visually appealing designs for digital products.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/design.png',
        },
        {
            id: 3,
            title: 'Responsive Design',
            description: 'Ensuring websites look great and function perfectly across all devices.',
            icon: 'https://w7.pngwing.com/pngs/714/980/png-transparent-responsive-web-design-web-development-web-page-responsive-web-design-text-logo.png',
        },
        {
            id: 4,
            title: 'Progressive Web Apps (PWAs)',
            description: 'Creating web apps with offline functionality and native app-like experiences.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/web.png',
        },
        {
            id: 5,
            title: 'Performance Optimization',
            description: 'Improving website load times and overall performance for better user experience.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/speed.png',
        },
        {
            id: 6,
            title: 'Front-End Testing',
            description: 'Ensuring robust and error-free UI/UX with automated front-end testing solutions.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/test.png',
        },
        {
            id: 7,
            title: 'Theming and Customization',
            description: 'Creating custom themes and styling systems for unique and cohesive designs.',

        },
        {
            id: 8,
            title: 'Component Library Development',
            description: 'Building reusable UI components for consistency and faster development.',

        },
        {
            id: 9,
            title: 'Localization and Accessibility',
            description: 'Making websites accessible to all users and ready for multi-language support.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/international.png',
        },
        {
            id: 10,
            title: 'Web Animations',
            description: 'Designing smooth and engaging animations to enhance user experiences.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/animation.png',
        },
        {
            id: 11,
            title: 'CMS Integration',
            description: 'Implementing and customizing content management systems like WordPress or Strapi.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/cms.png',
        },
        {
            id: 12,
            title: 'Version Control & Collaboration',
            description: 'Using Git and GitHub for efficient code management and team collaboration.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/git.png',
        },
    ];


    return (
        <section className="py-16 bg-black text-white ">
            <div className=" text-center mx-6 md:mx-20">
                <h2 className="text-4xl font-bold mb-8">Our Services</h2>
                <p className="text-gray-400 mb-12 text-center">
                    Browse through a collection of my best work, showcasing my expertise in front-end development, UI/UX design, and responsive web applications. <br />
                    Each project reflects my commitment to creating user-centered, high-performance digital experiences <br />
                    tailored to meet the unique needs of clients.
                </p>

                {/* Grid layout for services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className=" bg-[] hover:bg-[#FFBD39] bg-[#1a1a1a]  hover:text-black py-16  transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={service.icon || 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='}
                                alt={service.title}
                                className="w-12 h-12 mx-auto mb-4  transition-transform duration-300"
                            />
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            {/* <p className="text-gray-400">{service.description}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
