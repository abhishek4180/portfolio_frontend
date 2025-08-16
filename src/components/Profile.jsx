import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { getProfile } from '../services/operations/Profile';
import profile from "../assests/portfolio (2).png";
import resume from "../assests/Abhishek_Resume (2).pdf";
import { socialMedia } from '../data/projects';

export default function Profile({ dark }) {
  const scrollRef = useRef(null);
  
  const handleScrollDown = () => {
    const footerRef = document.getElementById('footer'); 
    footerRef.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  };
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getProfile(setLoading);
        setData(result);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div 
      id='home' 
      className={`flex flex-col w-[100%] justify-center items-center p-5 transition-all duration-500 
                  ${dark 
                    ? 'bg-gradient-to-b from-gray-800 to-gray-900 bac_pat_dark' 
                    : 'bg-gradient-to-b from-gray-200 to-gray-300= bac_pat_light'
                  }`}
      style={{ animation: 'fadeIn 1s ease-in-out' }}
    >
      {/* Text Section */}
      <div className='relative flex flex-col md:mt-[5%] mt-[15%] justify-center items-center gap-[10px]'>
        <p data-aos="fade-down" className='absolute -top-[20%] right-[60%] font-bold text-[22px]'>
          Hello, I'm
        </p>
        <div className='flex flex-col justify-center items-center mt-[2%]'>
          <p data-aos="fade-down" className='text-[34px] md:text-[70px] font-bold'>
            Abhishek Kumar
          </p>
          <TypeAnimation
            data-aos="fade-down"
            className='text-[22px]'
            sequence={[
  'Electronics Engineer', 1000,
  'Embedded Systems Developer', 1000,
  'IoT Engineer', 1000,
  'Circuit Designer', 1000,
  'Hardware Developer', 1000,
]}

            wrapper="span"
            speed={50}
            style={{ fontSize: '1.3em', display: 'inline-block', fontWeight: 'bold', color: dark ? '#B9FD50' : '#3E0703' }}
            repeat={Infinity}
          />
        </div>
        
        {/* Buttons */}
        <div className='mb-[10%] flex flex-row justify-center items-center md:w-[80%] w-[85%] mt-[5%]'>
          <a className='md:w-[220px] md:h-[50px] w-[180px] h-[30px]' href={resume} download>
            <button 
              className={`${dark ? 'button-dark' : 'button'} md:text-[20px] text-[17px] button-shadow rounded-full px-[15px] py-[5px] md:px-[20px] md:py-[13px] bg-[#385170]`}
            >
              Download CV
            </button>
          </a>
          <a className='md:w-[220px] md:h-[50px] w-[170px] h-[30px]' href='#contact'>
            <button 
              className={`${dark ? 'button-dark' : 'button'} md:text-[20px] text-[17px] button-shadow rounded-full px-[15px] py-[5px] md:px-[20px] md:py-[13px] bg-[#385170]`}
            >
              Let's Talk
            </button>
          </a>
        </div>
      </div>

      {/* Profile and Social Icons */}
      <div className='flex flex-col md:flex-row font-bold justify-evenly md:w-[80%] w-full p-5' ref={scrollRef}>
        <div className='md:w-[30%] flex flex-row md:flex-col justify-center items-center gap-9 md:gap-1'>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href={socialMedia.linkedIn}><FaLinkedin /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href={socialMedia.x}><FaTwitter /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href={socialMedia.github}><FaGithub /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href={socialMedia.whatsapp}><FaWhatsapp /></a>
        </div>
        <div className="flex justify-center items-center p-4">
        <div className="flex justify-center items-center p-4">
  <div
    className={`relative rounded-full md:w-[450px] w-[300px] h-[300px] md:h-[450px] overflow-hidden shadow-2xl transition-transform duration-500 transform hover:scale-105
      ${dark
        ? 'bg-[#0F1E1C] border-4 border-[#B9FD50] ring-4 ring-[#B9FD50]/50 shadow-[#B9FD50]/50'
        : 'bg-gradient-to-tl from-[#3E0703] to-[#660B05] border-4 border-[#FFF0C4] shadow-[#FF6347]/40'
      }`}
  >
    <img
      className="w-full h-full object-cover rounded-full transition-all duration-500 filter hover:brightness-110 hover:contrast-125"
      alt="profile"
      src={loading ? profile : data?.profileImage}
    />
    {/* Optional neon glow overlay for dark mode */}
    {dark && (
      <div className="absolute inset-0 rounded-full ring-2 ring-[#B9FD50] animate-pulse"></div>
    )}
  </div>
</div>

</div>

        <p className='md:w-[30%] vertical-text flex flex-col justify-center items-center gap-2 cursor-pointer' onClick={handleScrollDown}>
          <div data-aos="fade-down" className='flex md:flex-col flex-row animate-bounce'>
            {'Scroll\nDown'.split('').map((char, index) => (
              <p key={index}>{char}</p>
            ))}
          </div>
          <FaArrowDownLong className="animate-bounce text-gray-600" />
        </p>
      </div>
    </div>
  );
}
