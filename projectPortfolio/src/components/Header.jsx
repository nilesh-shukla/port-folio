import React from 'react'
import Button from './Button';
import myface from '../assets/myFace.jpg';

function Header() {
  return (
    <>
    <div className=' m-0 '>

      {/* NAVIGATION BAR */}

      <header className='fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-white'>
        
        <a className='hover:text-gray-600 duration-200' href="#">
        <h1 className='text-xl tracking-tighter font-dmsans'>Nilesh Shukla</h1></a>

        <nav className='absolute left-1/2 transform -translate-x-1/2'>
          
          <ul className="flex gap-5 text-[15px] items-center tracking text-black font-dmsans ">

            <li><a className='hover:text-gray-600 duration-300' href="#Work">Work</a></li>
            <li><a className='hover:text-gray-600 duration-300' href="#About">About</a></li>
            <li><a className='hover:text-gray-600 duration-300' href="#Contact">Contact</a></li>

          </ul>

        </nav>

        <Button buttonName="Book A Call" className='booking tracking-tight bg-black rounded-2xl text-white font-dmsans font-boldness px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-400' />
        
      </header>

      {/* IMAGE */}

      <div className='relative flex justify-center items-end h-screen'>
        <img src={myface} alt="Profile" className='h-94 sm:h-140 md:h-158 lg:h-170 object-cover ml-8' />

        <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-5'>
          <div className='flex flex-col md:flex-row gap-100'>

            <div className='w-full md:w-[35%]'>
              <div >
                
              </div>
              <p className='text-5xl font-dmsans'>I think and create the thoughts that turn data into design and logic into innovation.</p>
            </div>
            <div className='w-full md:w-[35%]'>
              <p className='font-raleway tracking-tight text-gray-800 mb-6'>As a machine learning enthusiast with a growing eye for visual design and frontend development, I combine data-driven thinking with clean, responsive interfaces using React and Tailwind. I collaborate to build intelligent, user-aware products that bridge functionality and experience.</p>

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