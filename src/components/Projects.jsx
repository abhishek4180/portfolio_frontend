import React, { useEffect, useState } from 'react'
import { getProject } from '../services/operations/Projects';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects({dark}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await  getProject(setLoading);
                setData(result);
                console.log("projects data ", result);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchData();
    }, []);
  return (
    <div id='projects' className=' flex flex-col justify-center items-center w-[100%] p-5 mt-[20px]  ' >
        <div data-aos="zoom-in-right" className='flex flex-col justify-center items-center relative  '>
                <p className='z-10 md:text-[40px] text-[32px] font-bold'>Projects</p>
                {/* <div className='absolute md:translate-x-[70px] md:-translate-y-[10px] translate-x-[60px] -translate-y-[10px] w-[50px] h-[40px] bg-[#DCB6AB]'></div> */}
        </div>

        
        <div className=' flex w-[100%] mx-auto md:ml-0 ml-[7%] justify-center items-center' >
            <div className=' grid  md:grid-cols-3 grid-cols-1 gap-8 mt-[20px] md:mt-[80px] ' >
                {
                    loading ? ( projects.map((data,index) => (
                            <ProjectCard dark = {dark} key= {index} data={data}  />
                        )) ): (
                        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((data,index) => (
                            <ProjectCard dark = {dark} key= {index} data={data}  />
                        ) )
                    )
                }

                {/* {
                    projects.map((data,index) => (
                            <ProjectCard dark = {dark} key= {index} data={data}  />
                        ))
                } */}
                
            </div>
        </div>
    </div>
  )
}
