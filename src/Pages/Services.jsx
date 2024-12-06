import React from 'react';

const Services = () => {
    // Services data array
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description: 'Building responsive and high-performance websites tailored to your needs.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/code.png',
        },
        {
            id: 2,
            title: 'Mobile App Development',
            description: 'Creating seamless and feature-rich mobile applications for iOS and Android.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/smartphone.png',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Crafting intuitive and visually appealing designs for digital products.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/design.png',
        },
        {
            id: 4,
            title: 'SEO Optimization',
            description: 'Improving search engine rankings and online visibility for your business.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/search.png',
        },
        {
            id: 5,
            title: 'E-commerce Solutions',
            description: 'Developing scalable and secure online stores with user-friendly interfaces.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/shopping-cart.png',
        },
        {
            id: 6,
            title: 'Cloud Integration',
            description: 'Integrating and optimizing cloud solutions for enhanced business efficiency.',
            icon: 'https://img.icons8.com/ios-filled/50/ffffff/cloud.png',
        },
    ];

    return (
        <section className="py-16 bg-black text-white ">
            <div className=" text-center mx-6 md:mx-20">
                <h2 className="text-4xl font-bold mb-8">Our Services</h2>
                <p className="text-gray-400 mb-12">
                    Explore the wide range of professional services we offer to elevate your business.
                </p>

                {/* Grid layout for services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className=" bg-[] hover:bg-[#FFBD39] bg-[#1a1a1a]  hover:text-black py-16  transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={service.icon}
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
