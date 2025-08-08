import { motion } from "framer-motion"
import Button from './Button';

function Footer() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        id="Projects"
        className="px-40 py-35 font-isans bg-[url('./assets/background.webp')]"
      >
        <div className="flex gap-12">
          <img src="../src/assets/myImage.avif" alt="myImage" className="w-[40%] rounded-3xl" />
          <div className="relative flex flex-col w-[50%]">
            <p className="text-[4em] tracking-tight leading-tight text-white mb-5">Book a call, and I’ll take care of the rest</p>
            <Button buttonName="Book a Call" className="hover:bg-[#d0d1d3] duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-white text-black px-5 py-3 w-30" />
            <div className="grid grid-cols-3 gap-6 mt-[10vh] text-white">
              <div className="flex flex-col gap-2">
                <a href="#" className="hover:text-[#6C7179] duration-300">Home</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">Works</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">About</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">Contact</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://x.com/NileshS32355762" className="hover:text-[#6C7179] duration-300 ">X</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">Youtube</a>
                <a href="https://www.instagram.com/nil_esh21/?next=%2F" className="hover:text-[#6C7179] duration-300">Instagram</a>
                <a href="https://github.com/nilesh-shukla" className="hover:text-[#6C7179] duration-300">Github</a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/nilesh-shukla21/" className="hover:text-[#6C7179] duration-300">LinkedIn</a>
                <a href="#" className="hover:text-[#6C7179] duration-300">Become Affiliate</a>
              </div>
            </div>
            <div className="mt-auto ml-auto">
               <h1 className=" text-lg text-[#6C7179] tracking-tight whitespace-nowrap">Created by <span className="text-xl text-white">Nilesh Shukla</span></h1>
            </div>
          </div>
         </div>
      </motion.div>
    </div>
  )
}

export default Footer