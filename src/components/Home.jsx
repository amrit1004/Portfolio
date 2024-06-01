import React from 'react'
import  HeroImage from '../assets/he.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name = "home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
       <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl font-bold text-white sm:text-7xl'>
            I'm a Full Stack Developer
          </h2>
          <p className='max-w-md py-4 text-gray-500'>
            I have 2 years of experience building and desgining software.
            Currently , I loves to work on web application using technologies like
            React, Node.js, Express, MongoDB, and more.
          </p>
          <div>
            <Link to ="portfolio" smooth duration={500} className='flex items-center px-6 py-3 my-3 text-white rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500'>
              Portfolio 
              <span className='duration-300 group-hover:rotate-90'>
              <MdKeyboardArrowRight size ={25} className='ml-1'/>
              </span>
            </Link> 

          </div>
        </div>
        <div>
          <img src= {HeroImage} alt= "my profile" className='mx-auto w-[300px] h-[400px] rounded-2xl md:w-[500px]'/>
        </div>
       </div>
    </div>
  )
}

export default Home