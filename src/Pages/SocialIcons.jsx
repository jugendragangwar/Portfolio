import React from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGithub, FiFacebook } from "react-icons/fi";

const SocialIcons = () => {
  return (
    <div className="flex  space-x-8 mt-8">
      {/* Twitter Icon */}
      <div className="group relative">
        <div className="bg-blue-500 rounded-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-10px]">
          <FaTwitter className="text-white text-2xl" />
        </div>
        <div className="absolute top-0 left-0 bg-blue-500 rounded-full p-4 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-15 group-hover:translate-y-[45px]">
          <FaTwitter className="text-white text-2xl" />
        </div>
      </div>

      {/* Instagram Icon */}
      <div className="group relative">
        <div className="bg-pink-500 rounded-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-10px]">
          <FaInstagram className="text-white text-2xl" />
        </div>
        <div className="absolute top-0 left-0 bg-pink-500 rounded-full p-4 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-15 group-hover:translate-y-[45px]">
          <FaInstagram className="text-white text-2xl" />
        </div>
      </div>

      {/* Facebook Icon */}
      <div className="group relative">
        <div className="bg-blue-700 rounded-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-10px]">
          <FiFacebook className="text-white text-2xl" />
        </div>
        <div className="absolute top-0 left-0 bg-blue-700 rounded-full p-4 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-15 group-hover:translate-y-[45px]">
          <FiFacebook className="text-white text-2xl" />
        </div>
      </div>

      {/* Github Icon */}
      <div className="group relative">
        <div className="bg-black rounded-full p-4 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-[-10px]">
          <FiGithub className="text-white text-2xl" />
        </div>
        <div className="absolute top-0 left-0 bg-black rounded-full p-4 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-15 group-hover:translate-y-[45px]">
          <FiGithub className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
