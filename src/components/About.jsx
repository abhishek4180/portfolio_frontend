import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/operations/Profile';
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { BASE_URL } from '../services/apis';
import { axiosInstance } from '../services/apiConnector';
import aboutImage from "../assests/about2.jpg";

export default function About() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [skills, setSkills] = useState([]);
    const [aboutLoading, setAboutLoading] = useState(false);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const result = await getProfile(setLoading);
                setData(result);
                console.log("Profile data: ", result);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfileData();
    }, []);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setAboutLoading(true);
                const response = await axiosInstance.get(`${BASE_URL}/get-skill`);
                setSkills(response?.data?.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
            } finally {
                setAboutLoading(false);
            }
        };

        fetchSkills();
    }, []);

    return (
        <div id='about' className='flex flex-col w-full p-5 items-center justify-center'>
            <div data-aos="zoom-in-right" className='flex flex-col justify-center items-center relative'>
                <p className='z-10 md:text-[40px] text-[32px] font-bold'>About Me</p>
            </div>
            <div className='flex md:mt-[80px] mt-[20px] flex-col md:flex-row gap-10 w-full p-5 items-center justify-evenly'>
                <div data-aos="fade-down" className='md:w-[40%] w-full'>
                    <img className='shadow-inset-20-20-60 inset shadow-inset--20--20-60 rounded-[20%] md:w-[70%] w-full' src={aboutLoading ? aboutImage : data?.aboutImage} alt="About Me" />
                </div>
                <div className='md:text-[20px] text-[18px] md:w-[50%] w-full flex flex-col justify-center md:items-start text-center md:text-start gap-5'>
                    <p data-aos="fade-up" className='relative flex flex-row gap-2 items-start justify-center text-start'>
                        <span className='absolute -left-10 top-3 border-b-4 border-black block w-[30px]'></span>
                        {loading ? "Hi, I'm an undergraduate Computer Science Engineering student at YMCA. Skilled in full-stack web development, I'm seeking internships and full-time roles as a software engineer. With a strong dedication to learning and a passion for technology, I'm excited to embark on my career journey." : data.about}
                    </p>
                    <p data-aos="fade-down" className='flex flex-row gap-3'>
                        <span className='text-[22px] font-bold'>Skill:</span>
                        {aboutLoading ? "Java, HTML, CSS, Tailwind CSS, JavaScript, MongoDB, Express.js, React.js, Node.js, GitHub, Git" : skills.map((result, index) => (<p className='flex flex-row' key={index}>{result.name},</p>))}
                    </p>
                    <div data-aos="fade-up" className='flex flex-row justify-around items-center'>
                        <a target="_blank" rel="noopener noreferrer" className='md:w-[220px] md:h-[50px] w-[170px] h-[30px]' href='#contact'>
                            <button className='md:text-[20px] text-[17px] button-shadow rounded-full px-[15px] py-[5px] md:px-[20px] md:py-[13px] bg-[#385170]'>Let's talk</button>
                        </a>
                        <div className='w-[50px] flex justify-center items-center h-[50px] -translate-x-[30px] border-black border-2 hover:border-[#385170] hover:text-[#385170]'>
                            <a href='https://www.linkedin.com/in/rkvrahul/'><FaLinkedin style={{ width: "30px", height: "30px" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
