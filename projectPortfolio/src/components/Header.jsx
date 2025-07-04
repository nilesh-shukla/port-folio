import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import myface from '../assets/myFace.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
  useEffect(() => {
    const image = document.getElementById('header-item');
    const handleScroll =() =>{
      const scrollY = window.scrollY;
      const scale = 1+scrollY*0.0002;
      const maxScale = Math.min(scale, 1.25);
      image.style.transform=`scale(${maxScale})`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1.5, ease:'easeInOut'}}
      className=' m-0 '
    >
      {/* NAVIGATION BAR */}
      <header className='fixed top-0 left-0 w-full z-500 flex justify-between items-center px-8 py-2 bg-white'>
        <a className='hover:text-gray-600 duration-200' href="#">
        <h1 className='text-xl tracking-tighter font-isans font-boldness'>Nilesh Shukla</h1></a>
        <nav className='absolute left-1/2 transform -translate-x-1/2'>
          <ul className="flex gap-7 text-sm items-center tracking text-black font-isans font-boldness">
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Work">Work</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#About">About</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <Button buttonName="Book A Call" className='booking tracking-tight bg-black rounded-2xl text-white font-isans px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-300' /> 
      </header>

      <div className='relative flex justify-center items-end h-screen overflow-hidden'>
        {/* BACKGROUND IMAGE */}
        <div className='absolute w-full h-full p-16'>
          <img
          id="header-item"
          src={myface}
          alt="Profile"
          className='absolute transition-transform ease-in-out w-full h-full max-w-none object-cover'
        />
        </div>
        
        <div id='header-item'>
          <div className='absolute inset-0 flex flex-col justify-center px-6 md:px-5'>
            <div className='flex flex-col md:flex-row justify-between items-start'>
              <div className='w-full md:w-[35%] md:mt-[65vh] z-100'>
                <div className='font-isans text-gray-500 flex items-center gap-[2px] shadow rounded-3xl px-2 py-1 w-1/3 mb-2'>
                  <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[10px] mr-2" />
                  <span className='text-sm'> 2 projects left in April </span>
                </div>
                <p className='text-5xl font-isans'>I turn data into design and logic into innovation</p >
              </div>
              <div className='w-full md:w-[30%] md:mt-[60vh] z-100'>
                <p className='text-l  font-raleway tracking-tight text-gray-800 mb-8'>
                As a machine learning enthusiast with a growing eye for visual design and frontend development, I combine data-driven thinking with clean, responsive interfaces using React. I collaborate to build intelligent, user-aware products that bridge functionality and experience
                </p>
                <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3" />
              </div>
            </div>
          </div>
          {/* BLURR EFFECT */}
          <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
            <div className="w-full h-full backdrop-blur-md mask-gradient-fade" />
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default Header;