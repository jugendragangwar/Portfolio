import React from 'react';

const Skills = () => {
    const skills = [
        {
            name: 'Web Design',
            percentage: 80,
            color: '#FF6464',
        },
        {
            name: 'Mobile App',
            percentage: 95,
            color: '#9272D4',
        },
        {
            name: 'Illustrator',
            percentage: 65,
            color: '#5185D4',
        },
        {
            name: 'Photoshop',
            percentage: 75,
            color: '#CA56F2',
        },
        {
            name: 'JavaScript',
            percentage: 90,
            color: '#F7DF1E',
        },
        {
            name: 'React',
            percentage: 95,
            color: '#61DAFB',
        },
        {
            name: 'Node.js',
            percentage: 85,
            color: '#3C873A',
        },
        {
            name: 'Tailwind CSS',
            percentage: 80,
            color: '#06B6D4',
        },
    ];

    return (
        <section className="h-full py-10 bg-black dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <h4 className="text-3xl md:text-5xl text-white font-bold mb-10 text-center">
                 My Skills
                </h4>

                {/* Grid Layout for Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex justify-between items-center py-1">
                                {/* Skill logo and name */}
                                
                                    <span className="text-base text-gray-300 font-semibold">{skill.name}</span>
                       
                                <span className="text-base font-semibold text-gray-300 pr-5">
                                    {skill.percentage}%
                                </span>
                            </div>
                            <div className="relative w-full h-2 bg-gray-300 rounded-full">
                                <div
                                    className="absolute h-full rounded-full"
                                    style={{
                                        width: `${skill.percentage}%`,
                                        backgroundColor: skill.color,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
