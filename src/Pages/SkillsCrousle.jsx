import React from 'react';

// Importing images
import Canva from '../assets/Canva.png';
import CSS from '../assets/CSS.png';
import Java from '../assets/Java.png';
import JavaScript from '../assets/JavaScript.png';
import Kotlin from '../assets/Kotlin.png';
import ReactLogo from '../assets/React.png'; // React is renamed to ReactLogo to avoid conflicts
import Responsive from '../assets/Responsive.png';
import Web from '../assets/Web.png';

// Array of skills with their image paths and alt text
const skills = [
  { src: Web, alt: 'Web Development Icon' },
  { src: Responsive, alt: 'Responsive Design Icon' },
  { src: Kotlin, alt: 'Kotlin Programming Icon' },
  { src: JavaScript, alt: 'JavaScript Programming Icon' },
  { src: Java, alt: 'Java Programming Icon' },
  { src: CSS, alt: 'CSS Styling Icon' },
  { src: Canva, alt: 'Canva Design Icon' },
  { src: ReactLogo, alt: 'React Framework Icon' },
];

const SkillsCrousle = () => {
  return (
    <div className="overflow-hidden w-full bg-black py-10 ">
      <div
        className="flex hap-6 md:gap-32 mx-6 md:mx-20"
        style={{
          animation: 'scroll 15s linear infinite',
          display: 'flex',
        }}
      >
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.src}
            alt={skill.alt}
            className="w-24 h-24 object-cover rounded-full border-2 border-white"
          />
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default SkillsCrousle;
