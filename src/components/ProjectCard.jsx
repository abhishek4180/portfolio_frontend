import React, { useState } from 'react'
import { TbView360 } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard(props) {
  const dark = props.dark;
  const [readMore, setReadMore] = useState(false);

  const shortDesc = props.data.description.slice(0, 100); // first 100 chars

  return (
    <div className='w-[100%]'>
      <div
        data-aos="fade-up"
        className={`flex flex-col w-[80%] p-5 gap-5 ${
          dark ? "bg-[#232528] project-dark" : "project bg-[#e0e0e0]"
        }`}
      >
        <div>
          <img src={props.data.thumbnail} alt='Thumbnail' />
        </div>

        <div className='flex flex-col gap-3 justify-center items-center'>
          <p className='font-bold md:text-[20px] text-[18px]'>
            {props.data.title}
          </p>

          <p className='font-[600] text-slate-500 text-center'>
            {readMore ? props.data.description : shortDesc}
            {props.data.description.length > 100 && (
              <button
                onClick={() => setReadMore(!readMore)}
                className='ml-2 text-blue-500 underline text-sm'
              >
                {readMore ? "Read Less" : "Read More"}
              </button>
            )}
          </p>

          <div className='flex justify-evenly items-center gap-3 w-[100%]'>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.github}
              className='text-[16px] md:text-[18px] text-blue-500 underline flex justify-center items-center gap-3 w-[50%]'
            >
              <FaGithub /> Github
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={props.data.url}
              className='text-[16px] md:text-[18px] text-blue-500 underline flex justify-center items-center gap-3 w-[50%]'
            >
              <TbView360 /> View
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
