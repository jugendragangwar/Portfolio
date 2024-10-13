import React, { useState } from 'react';
import myAvtaar from '../../assets/my-avatar.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Profile = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(prev => !prev);
  };

  return (
    <div className='flex justify-center p-2 sm:p-4'>
      <div className='flex flex-col bg-[#1E1E1F] w-full max-w-6xl rounded-xl'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='flex flex-col sm:flex-row py-2 sm:py-4'>
            <div className='bg-[#343434] rounded-3xl flex justify-center items-center my-2 sm:my-0 mx-auto sm:mx-4'>
              <img className='w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-3xl' src={myAvtaar} alt="Profile" />
            </div>
            <div className='my-auto text-white text-center sm:text-left mt-2 sm:mt-0'>
              <h2 className='text-xl sm:text-2xl font-semibold'>Jugendra</h2>
              <p className='text-sm sm:text-base bg-[#343434] rounded-md px-2'>Front End Developer</p>
            </div>
          </div>

          <div className='mt-2 sm:mt-0 flex justify-center sm:justify-end'>
            <div
              onClick={toggleInfo}
              className='bg-[#343434] text-3xl text-yellow-400 sm:hidden rounded-full p-2 cursor-pointer'
            >
              <RiArrowDropDownLine />
            </div>
            <button
              className='hidden sm:flex bg-[#343434] rounded-bl-lg rounded-tr-xl w-28 h-12 text-     text-yellow-400 self-start'
              onClick={toggleInfo}
            >
              Show contect
            </button>
          </div>
        </div>

        {/* Additional Info Section */}
        <div
          className={`transition-all duration-700 ease-in-out overflow-hidden ${showInfo ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className='p-2 sm:p-4'>
            <div className='border-[1px] border-[#343434] mx-3 my-2 sm:my-4'></div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {/* Email Section */}
              <div className='flex items-center space-x-3'>
                <div className='bg-[#343434] h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow-lg flex items-center justify-center'>
                  <MdOutlineEmail className='text-[#63593A] text-xl sm:text-2xl' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white'>Email</h4>
                  <p className='text-sm sm:text-base text-gray-400'>jugendragangwar@gmail.com</p>
                </div>
              </div>

              {/* Phone Section */}
              <div className='flex items-center space-x-3'>
                <div className='bg-[#343434] h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow-lg flex items-center justify-center'>
                  <IoPhonePortraitOutline className='text-[#63593A] text-xl sm:text-2xl' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white'>Phone</h4>
                  <p className='text-sm sm:text-base text-gray-400'>+91 7409750449</p>
                </div>
              </div>

              {/* DOB Section */}
              <div className='flex items-center space-x-3'>
                <div className='bg-[#343434] h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow-lg flex items-center justify-center'>
                  <FaCalendarDays className='text-[#63593A] text-xl sm:text-2xl' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white'>DOB</h4>
                  <p className='text-sm sm:text-base text-gray-400'>06 May, 2003</p>
                </div>
              </div>

              {/* Location Section */}
              <div className='flex items-center space-x-3'>
                <div className='bg-[#343434] h-10 w-10 sm:h-12 sm:w-12 rounded-lg shadow-lg flex items-center justify-center'>
                  <IoLocationOutline className='text-[#63593A] text-xl sm:text-2xl' />
                </div>
                <div>
                  <h4 className='text-base sm:text-lg font-semibold text-white'>Location</h4>
                  <p className='text-sm sm:text-base text-gray-400'>UP, India</p>
                </div>
              </div>
            </div>

            <div className='border-[1px] border-[#343434] mx-3 my-2 sm:my-4'></div>

            <div className='flex justify-center sm:justify-start space-x-4 p-2 sm:p-4 text-xl sm:text-2xl text-gray-400'>
              <CiLinkedin className="cursor-pointer hover:text-white transition-colors" />
              <FaGithub className="cursor-pointer hover:text-white transition-colors" />
              <SiLeetcode className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;