import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import Button from './Button';
import myface from '../assets/myFace.jpg';

function Header() {

  const [scrollY, setScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const smoothHandleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', smoothHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', smoothHandleScroll);
  }, []);

  const scrollYMotion = useMotionValue(scrollY);
  scrollYMotion.set(scrollY);
  
  const backgroundY = -(scrollY * 0.2);
  const foregroundY = -(scrollY * 0.6);
  const scrollScale = 0.9 + (scrollY / 8000);

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1.5, ease:'easeInOut'}}
      className=' m-0 '
    >
      <div
        className='relative flex justify-center items-end h-screen overflow-hidden'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* BACKGROUND IMAGE */}
        <motion.div 
          className='absolute w-full h-full p-16'
          animate={{ 
            y: backgroundY,
            scale: scrollScale,
          }}
          transition={{
            type: 'spring',
            ease: 'easeOut',
            duration: isHovered ? 0.3 : 0.1
          }}
        >
          <motion.img src={myface} alt="Profile" className='absolute ease-in-out w-full h-full max-w-none object-cover'/>
        </motion.div>
        
        {/* DESCRIPTION SECTION */}
        <motion.div 
          className='absolute inset-0 flex flex-col justify-center px-6 md:px-5 z-50'
          animate={{
            y: -foregroundY * 0.0009,
          }}
          transition={{
            type: 'tween',
            ease: 'easeOut',
            duration: isHovered ? 0.3 : 0.1
          }}
        >
          <div className='flex flex-col md:flex-row justify-between items-start'>
            <motion.div
             className='w-full md:w-[35%] md:mt-[65vh]'
            >
              <div className='font-isans text-gray-500 flex items-center gap-[2px] shadow rounded-3xl px-2 py-1 w-1/3 mb-2'>
                <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[10px] mr-2" />
                <span className='text-sm'> 2 projects left in April </span>
              </div>
              <p className='text-5xl font-isans'>I turn data into design and logic into innovation</p >
            </motion.div>
            <motion.div 
              className='w-full md:w-[30%] md:mt-[60vh]'
            >
              <p className='text-l  font-raleway tracking-tight text-gray-800 mb-8'>
              As a machine learning enthusiast with a growing eye for visual design and frontend development, I combine data-driven thinking with clean, responsive interfaces using React. I collaborate to build intelligent, user-aware products that bridge functionality and experience
              </p>
              <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* BLUR EFFECT SECTION */}
        <motion.div
         className="absolute left-0 w-full h-50 pointer-events-none z-10"
         animate={{
           bottom: -foregroundY * 0.0009,
         }}
         transition={{
           type: 'tween',
           ease: 'easeOut',
           duration: isHovered ? 0.3 : 0.1
         }}
        >
          <motion.div className="w-full h-full backdrop-blur-xl mask-gradient-fade" />
        </motion.div>

      </div>
    </motion.div>
  )
}

export default Header;