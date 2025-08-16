import React from 'react'
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import ContactForm from './ContactForm';
import { socialMedia } from '../data/projects';

export default function Contact({dark}) {
    
  return (
    <div id='contact' className=' p-5 flex flex-col justify-center items-center gap-4 w-[100%] ' >
        <div data-aos="zoom-in-right" className='flex flex-col justify-center items-center relative  '>
                <p className='z-10 md:text-[40px] text-[32px] font-bold'>Contact Me</p>
                {/* <div className='absolute md:translate-x-[70px] md:-translate-y-[10px] translate-x-[60px] -translate-y-[10px] w-[50px] h-[40px] bg-[#DCB6AB]'></div> */}
        </div>
        <div className=' relative flex md:flex-row text-start flex-col  items-center mt-[20px] md:mt-[80px] ' >
            <div data-aos="fade-down"  className={`  z-10 md:translate-y-0 translate-y-[5%] md:absolute md:left-[-52%]    w-[300px] md:w-[270px] p-4  flex flex-col ${dark ? "bg-[#333739] shadow-sm shadow-slate-200 " : "bg-[#aaaaf6]"}  `} >
                <p className=' text-white font-bold md:text-[22px] text-20px '>Contact Me</p>
                <p className='text-white md:text-[18px] text-[16px] ' >Have something to share or a project in mind? Reach out via the contact form  and let's start a conversation!</p>
                <div className='  flex flex-row gap-4' >
                    <div  className=' flex gap-2 flex-col p-4 text-[16px] md:text-[18px] ' >
                    <p>Don't want to send Mails</p>
                    <p>Write me on social media</p>
                    </div>
                    <div className=' flex flex-row  justify-center items-center gap-4 '>
                           <a className=' hover:bg-blue-300 '  href={socialMedia.linkedIn} > <FaLinkedin style={{width:"30px", height:"30px"}} /></a>
                           <a className=' hover:bg-blue-300 '  href={socialMedia.github} > <FaTwitter style={{width:"30px", height:"30px"}} /></a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up"  className=' md:w-[90%] w-full ' >

               <ContactForm  />

            </div>
        </div>
    </div>
  )
}
