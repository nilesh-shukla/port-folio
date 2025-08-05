import React from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

import contactImg from '../assets/contactImg.webp'

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.1 }}
      className='p-45 font-isans'
    >
      <h1 className='mb-10 text-[2.6em] tracking-tighter' style={{fontWeight: 500}}><span className='text-gray-500'>Ready to create something amazing?</span> Let's talk!</h1>

      <div className='flex gap-3 text-white'>
        <div className='bg-black p-5 flex flex-col rounded-2xl tracking-tighter w-[75%] shadow-box z-10'>
          <label htmlFor="name" className='text-white mb-2'>Name</label>
          <input type="text" placeholder='Nilesh Shukla' className='bg-[#2a2a2a] p-3 mb-4 rounded-xl placeholder-[#959595] ' />
          <label htmlFor="email" className='text-white mb-2'>Email</label>
          <input type="email" placeholder='nilesh1234@example.com' className='bg-[#2a2a2a] p-3 mb-4 rounded-xl placeholder-[#959595]' />
          <label htmlFor="message" className='text-white mb-2'>Your Message</label>
          <textarea name="message" placeholder='Enter your message' className='resize-none bg-[#2a2a2a] p-3 h-32 mb-4 rounded-xl placeholder-[#959595] no-scrollbar'/>

          <Button className={"bg-white text-md tracking-tight py-3 hover:bg-gray-300 hover:cursor-pointer duration-300 rounded-2xl text-black"}>Submit</Button>
        </div>

        <div className='rounded-2xl flex flex-col justify-between bg-[#F7F7F7] w-[35%] p-5'>
          <div>
            <img src={contactImg} alt="ghibli" className='rounded-2xl w-[25%] mb-10' />
            <p className='text-xl  tracking-tighter text-black' style={{fontWeight: 500}}>Prefer a quick chat?<span className='text-gray-500'> Let's hop on a call and explore the best way to bring your ideas to life</span></p>
            <div className='bg-white rounded-2xl px-2 py-1 whitespace-nowrap ml-auto' style={{width: 'min-content', height: 'min-content'}}>
              <h1 className='text-gray-400 text-center'>approximately 15 minutes</h1>
            </div>
          </div>
          <Button className={"bg-[#F7F7F7] w-full text-md tracking-tight py-3 rounded-2xl text-black border-gray-300 border-1 hover:bg-gray-200 hover:cursor-pointer duration-300"}>Book a Call</Button>
        </div>

      </div>
    </motion.div>
  )
}

export default Contact