import { motion } from "framer-motion";

import Cards from "../components/Cards";
import imgProject1 from "../assets/AI.png";
import imgProject2 from "../assets/india_tour.jpg";
import imgProject3 from "../assets/leave_form.png";
import imgProject4 from "../assets/CarbonWisePoster.png"


function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      viewport={{ amount: 0.3 }}
      id="Projects"
      className="p-45"
    >
          <h1 className="text-[2.6em] tracking-tighter font-isans leading-12" style={{fontWeight: 500}}><span className="text-gray-500">Building intelligent interfaces</span> that blend <br /> data-driven insights with sleek user experiences.</h1>

          <div className='flex flex-wrap flex-row gap-y-4 justify-between py-10'>
            <Cards imgName={imgProject1} className="w-[49%] h-[50vh]" projectName="BugsSmith" textColor={"text-white"}>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-2 mr-2">ML</button>        
            </Cards>            
            <Cards imgName={imgProject2} className="w-[49%] h-[50vh] text-black" projectName="Aasan Yatra" textColor={"text-brown-500"}>
                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">HTML</button>  
                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">CSS</button>  
            </Cards>
            <Cards imgName={imgProject3} className="w-[49%] h-[50vh]" projectName="LeavePoint">
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">JavaScript</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">NextJS</button>  
            </Cards>
            <Cards imgName={imgProject4} className="w-[49%] h-[50vh]" projectName="CarbonWise" textColor={"text-white"}>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">ML</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg">React</button>    
            </Cards>
            </div>

    </motion.div>
  )
}

export default Work