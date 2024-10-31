import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";
import { getProfile } from '../services/operations/Profile';
import profile from "../assests/profile4.png";
import resume from "../assests/Rahul_Kumar_FullStack_Developer.pdf";

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
                    : 'bg-gradient-to-b from-gray-200 to-gray-300 bac_pat_light'
                  }`}
      style={{ animation: 'fadeIn 1s ease-in-out' }}
    >
      {/* Text Section */}
      <div className='relative flex flex-col mt-[5%] justify-center items-center gap-[10px]'>
        <p data-aos="fade-down" className='absolute -top-[20%] right-[60%] font-bold text-[22px]'>
          Hello, I'm
        </p>
        <div className='flex flex-col justify-center items-center mt-[2%]'>
          <p data-aos="fade-down" className='text-[30px] md:text-[48px] font-bold'>
            Rahul Kumar Verma
          </p>
          <TypeAnimation
            data-aos="fade-down"
            className='text-[22px]'
            sequence={[
              'Developer', 1000, 'Full Stack Developer', 1000,
              'Frontend Developer', 1000, 'Backend Developer', 1000, 'Web Designer', 1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.3em', display: 'inline-block', fontWeight: 'bold', color: dark ? '#4DB6AC' : '#3B4252' }}
            repeat={Infinity}
          />
        </div>
        
        {/* Buttons */}
        <div className='mb-[10%] flex flex-row justify-center items-center md:w-[80%] w-[85%] mt-[5%]'>
          <a className='md:w-[220px] md:h-[50px] w-[170px] h-[30px]' href={resume} download>
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
      <div className='flex flex-col md:flex-row font-bold justify-evenly w-[100%] p-5' ref={scrollRef}>
        <div className='md:w-[30%] flex flex-row md:flex-col justify-center items-center gap-9 md:gap-1'>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href='https://www.linkedin.com/in/rkvrahul/'><FaLinkedin /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href='https://twitter.com/devrahuljourney'><FaTwitter /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href='https://github.com/devrahuljourney'><FaGithub /></a>
          <a target="_blank" rel="noopener noreferrer" className='icon text-gray-600 hover:text-gray-800' href='https://wa.me/9162988797'><FaWhatsapp /></a>
        </div>
        <div className='md:w-[40%] flex justify-center items-center'>
          <div className={`${dark ? 'profile-dark bg-[#2A5D54] border-4 border-[#FFD700]' : 'profile  bg-[#9FD3C7]  border-4 border- '} rounded-full p-[5px]`}>
            <img className='object-cover w-[100%] rounded-full' alt='profileimage' src={loading ? profile : data.profileImage} />
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
