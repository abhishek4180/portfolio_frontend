import React, { useState } from 'react'

export default function Footer() {
    const [active,setActive] = useState("#home")
  return (
    <div id='footer' className=' md:h-[200px] h-[250px]  text-white md:text-[20px] text-[18px]  bg-[#525150c9] md:mt-[80px] mt-[20px] '>
        <div className=' flex flex-col md:flex-row md:justify-between gap-7 justify-center items-center p-10 ' >
            <p>© Abhishek Kumar. All rights reserved.</p>
            <div className=' md:w-[60%] md:p-5 gap-3 flex flex-row justify-evenly items-center ' >
            <a onClick={() => setActive("#home")} className={`  hover:text-blue-500  ${active === '#home' && " underline text-blue-900 " }  flex flex-col text-[16px] md:text-[18px] items-center justify-center`} href='#home' >  Home </a>
           <a onClick={() => setActive("#about")} className={`    hover:text-blue-500   ${active === '#about' && "underline text-blue-900" }  flex flex-col text-[16px] md:text-[18px] items-center justify-center`} href='#about' >   About </a>
           {/* <a onClick={() => setActive("#coding")} className={`    hover:text-blue-500   ${active === '#coding' && "underline text-blue-900" }  flex flex-col text-[16px] md:text-[18px] items-center justify-center`} href='#coding' >  Coding </a> */}
           <a onClick={() => setActive("#projects")} className={`   hover:text-blue-500  ${active === '#projects' && "underline text-blue-900" }  flex flex-col text-[16px] md:text-[18px] items-center justify-center`} href='#project' > Projects </a>
           <a onClick={() => setActive("#contact")} className={`    hover:text-blue-500   ${active === '#contact' && "underline text-blue-900" }  flex flex-col text-[16px] md:text-[18px] items-center justify-center`} href='#contact' >  Contact </a>
            </div>
        </div>
    </div>
  )
}
