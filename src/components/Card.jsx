import React from 'react'

export default function Card(props) {
  const dark = props.dark
  return (
    // page not found
    <div data-aos="fade-down"  className= {` ${dark ? "bg-[#232528] project-dark " : "card  hover:bg-[#385170] bg-[#88a0be]" }  md:w-[350px] w-[200px] h-[150px] md:h-[200px] md:text-[22px] text-[18px] flex flex-col justify-center items-center gap-4 rounded-3xl `} >
        <p className=' font-bold text-white ' > {props.data.title} </p>
        <p className=' md:text-[20px] text-[16px] text-gray-600 font-bold ' > {props.data.description} </p>
        <a target="_blank" rel="noopener noreferrer" className=' underline text-blue-600 ' href={props.data.link} >View Profile</a>
    </div>
  )
}
