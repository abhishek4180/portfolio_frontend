import React, { useState, useEffect } from 'react';
import { FaHome, FaRegUser, FaCode } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [active, setActive] = useState("#home");

    useEffect(() => {
      const sectionIds = ["home", "about", "coding", "projects", "contact"];
  
      const handleScroll = () => {
          const scrollPosition = window.scrollY;
          for (let i = 0; i < sectionIds.length; i++) {
              const sectionId = sectionIds[i];
              const section = document.getElementById(sectionId);
              if (!section) continue;
  
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
  
              if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                  setActive(`#${sectionId}`);
                  console.log("Active Section:", sectionId);
                  break; // Exit the loop once active section is found
              }
          }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Call handleScroll initially to set the initial active section
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  

    return (
        <div className='flex justify-center items-center w-[100%]' >
            <div className='nav shadow-xl shadow-slate-500 fixed z-40 group bottom-1 md:bottom-2 bg-transparent backdrop-blur-3xl px-10 p-3 rounded-full flex gap-2 w-[90%] md:w-[30%] justify-between items-center' >
                <a className={` text-[13px] flex justify-center items-center flex-col w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full  ${active === '#home' && "activeclass"}`} href='#home' > <FaHome style={{ width: "20px", height: "20px" }} /> Home </a>
                <a className={` text-[13px] flex justify-center items-center flex-col w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#about' && "activeclass"}`} href='#about' > <FaRegUser style={{ width: "20px", height: "20px" }} /> About </a>
                {/* <a className={` text-[13px] flex justify-center items-center flex-col w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#coding' && "activeclass"}`} href='#coding' > <FaCode style={{ width: "20px", height: "20px" }} /> Coding </a> */}
                <a className={` text-[13px] flex justify-center items-center flex-col w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#projects' && "activeclass"}`} href='#projects' > <GoProject style={{ width: "20px", height: "20px" }} /> Projects </a>
                <a className={` text-[13px] flex justify-center items-center flex-col w-[50px] h-[50px] hover:bg-slate-400 hover:text-white rounded-full ${active === '#contact' && "activeclass"}`} href='#contact' > <MdContactPhone style={{ width: "20px", height: "20px" }} /> Contact </a>
            </div>
        </div>
    )
}
