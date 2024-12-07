import React from 'react';
import SkillsCrousle from './SkillsCrousle'
const Skills = () => {
    const skills = [
        {
            name: 'JavaScript',
            percentage: 70,
            color: '#F7DF1E',
        },
        {
            name: 'React',
            percentage: 65,
            color: '#61DAFB',
        },
        {
            name: 'Tailwind CSS',
            percentage: 90,
            color: '#06B6D4',
        },
        {
            name: 'Web Design',
            percentage: 85,
            color: '#FF6464',
        },
        {
            name: 'Responsive Design',
            percentage: 95,
            color: '#3C873A',
        },
        {
            name: 'Canva',
            percentage: 50,
            color: '#CA56F2',
        },
        {
            name: 'TypeScript',
            percentage: 60,
            color: '#3178C6',
        },
        {
            name: 'Redux',
            percentage: 50,
            color: '#764ABC', // State management for React applications
        },
        {
            name: 'Git & GitHub',
            percentage: 80,
            color: '#F1502F', // Version control and collaboration
        },
        {
            name: 'Performance Optimization',
            percentage: 65,
            color: '#FFB703', 
        },
        {
            name: 'Soft Skills (Collaboration, Communication)',
            percentage: 85,
            color: '#FF7A00', 
        },
    ];
    

    return (
        <>
            <SkillsCrousle/>
    
        <section className="h-full py-10 min-h-screen bg-black">
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
        </>
    );
};

export default Skills;
