import React from 'react'
import Button from './Button';
import myface from '../assets/myFace.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <div className=' m-0 '>

      {/* NAVIGATION BAR */}

      <header className='fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-white'>
        
        <a className='hover:text-gray-600 duration-200' href="#">
        <h1 className='text-xl tracking-tighter font-dmsans'>Nilesh Shukla</h1></a>

        <nav className='absolute left-1/2 transform -translate-x-1/2'>
          
          <ul className="flex gap-7 text-sm items-center tracking text-black font-dmsans ">

            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Work">Work</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#About">About</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Contact">Contact</a></li>

          </ul>

        </nav>

        <Button buttonName="Book A Call" className='booking tracking-tight bg-black rounded-2xl text-white font-dmsans font-boldness px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-400' />
        
      </header>

      <div className='relative flex justify-center items-end h-screen'>

        {/* BACKGROUND IMAGE */}
        <img src={myface} alt="Profile" className='h-94 sm:h-140 md:h-158 lg:h-170 object-cover ml-8' />

        <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-5'>
          <div className='flex flex-col md:flex-row justify-between items-start'>
    
          <div className='w-full md:w-[35%] md:mt-[65vh] z-100'>

            <div className='font-dmsans text-gray-500 flex items-center gap-[2px] shadow rounded-3xl px-2 py-1 w-1/3 mb-2'>
              <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[10px] mr-2" />
              <span className='text-sm'> 2 projects left in April </span>
            </div>

            <p className='text-5xl font-dmsans'>I turn data into design and logic into innovation</p >

          </div>

          <div className='w-full md:w-[30%] md:mt-[60vh] z-100'>

            <p className='text-l  font-raleway tracking-tight text-gray-800 mb-8'>
            As a machine learning enthusiast with a growing eye for visual design and frontend development, I combine data-driven thinking with clean, responsive interfaces using React. I collaborate to build intelligent, user-aware products that bridge functionality and experience
            </p>

          <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-400 cursor-pointer tracking-tight font-dmsans shadow-box rounded-2xl bg-black text-white px-5 py-3" />
          </div>

        </div>
      </div>


        {/* BLURR EFFECT */}
        <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
          <div className="w-full h-full backdrop-blur-md mask-gradient-fade" />
        </div>

      </div>



    </div> 
    </>
  )
}

export default Header;