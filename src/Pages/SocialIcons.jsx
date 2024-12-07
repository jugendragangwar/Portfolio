import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGithub, FiFacebook } from "react-icons/fi";

const SocialIcons = () => {
  const icons = [
    {
      href: "https://x.com/Jugendra7409",
      icon: <FaTwitter className="text-white text-2xl" />,
      bgColor: "bg-blue-500",
    },
    {
      href: "https://www.instagram.com/jugendra_gangwar_/",
      icon: <FaInstagram className="text-white text-2xl" />,
      bgColor: "bg-pink-500",
    },
    {
      href: "https://www.facebook.com/jugendra.kurmi.77",
      icon: <FiFacebook className="text-white text-2xl" />,
      bgColor: "bg-blue-700",
    },
    {
      href: "https://github.com/jugendragangwar",
      icon: <FiGithub className="text-white text-2xl" />,
      bgColor: "bg-gray-950",
    },
  ];

  return (
    <div className="flex justify-center space-x-8 mt-8">
      {icons.map(({ href, icon, bgColor }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${href}`}
          className="group relative"
        >
          <div
            className={`${bgColor} rounded-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-10px]`}
          >
            {icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
