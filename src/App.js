import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import About from './components/About';
import Coding from './components/Coding';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './Admin/Login';
import Home from './components/Home';
import ManagePortfolio from './Admin/ManagePortfolio';
import PageNotFound from './components/PageNotFound';

import AOS from "aos";
import "aos/dist/aos.css";


// Define your components/pages outside of the App component
// For example, let's say you have a Home component

function App() {
  const [user,setUser] = useState('false');
  useEffect(() => {
    AOS.init({
      
      duration: 1500,
      easing: "ease-out-cubic",
    });
  }, []);
  const [dark, setIsDark] = useState(false);
  return (
    <Router>
    {/* className={`App h-full ${dark ? "bg-[#2C2F31] text-[#fff] " : "bg-[#d9dcdf]"}`} */}
    <div className={`App h-full${dark 
                    ? 'bg-gradient-to-b from-gray-800 to-gray-900 bac_pat_dark text-white' 
                    : 'bg-gradient-to-b from-gray-200 to-gray-300 bac_pat_light'
                  }`}>


        
        <Routes>
        <Route exact path ='/' element = { <Home dark = {dark} setIsDark = {setIsDark} /> } />
        <Route exact path="/admin/login" element = { <Login setUser = {setUser} /> }  />
        <Route exact path ='/admin/manage-portfolio' element = { <ManagePortfolio/> } />
        <Route exact path='*' element={<PageNotFound/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
