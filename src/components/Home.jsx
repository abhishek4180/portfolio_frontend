import React, { useState } from 'react'
import Profile from './Profile';
import Navbar from './Navbar';
import About from './About';
import Coding from './Coding';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Dark from './Dark';

export default function Home({dark, setIsDark}) {

  
  return (
    <div>
        <Dark dark ={ dark} set = {setIsDark} />
        <Navbar dark ={ dark} />
        <Profile dark ={ dark}  />
        <About dark ={ dark}  />
        {/* <Coding dark ={ dark}  /> */}
        <Projects dark ={ dark}  />
        <Contact dark ={ dark}  />
        <Footer/>
    </div>
  )
}
