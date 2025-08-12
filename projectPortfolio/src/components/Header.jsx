import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import MySphere from './MySphere';
import Button from './Button';

function Header() {

  return (
    <div className='m-0 relative h-screen overflow-hidden' >
      <div className='relative w-full h-full' >

        {/* BACKGROUND SPHERE */}
        <div className='absolute group inset-0 w-full h-full z-0'>
          <MySphere />
        </div>
        
        {/* DESCRIPTION SECTION */}
        <div className='absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-8 z-20' >
          <div className='flex flex-col md:flex-row md:gap-[33%] justify-between items-end gap-8'>
            <div className='flex-1 md:w-[33%]'>
              <div className='w-fit font-isans text-gray-500 flex items-center gap-[2px] shadow rounded-3xl px-2 py-1 mb-4 bg-white/80 backdrop-blur-sm'>
                <FontAwesomeIcon icon={faCircle} className="text-green-600 text-[10px] mr-2" />
                <span className='text-sm'> 2 projects left in April </span>
              </div>
              <p className='text-4xl md:text-5xl font-isans tracking-tight text-gray-900 leading-tight'>
                I turn data into design <br /> 
                and logic into innovation
              </p>
            </div>

            <div className='flex flex-col gap-4 items-end md:w-[30%]'>
              <p className=' text-gray-800 '>As an ML enthusiast with a strong focus on React and clean UI, I collaborate closely with teams to build smart, user-aware interfaces. A reliable partner in turning data-driven ideas into intuitive experiences</p>
                <a href="https://mail.google.com" target='_blank'>
                <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;