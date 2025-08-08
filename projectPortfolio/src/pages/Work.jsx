import { motion } from "framer-motion";

import Cards from "../components/Cards";
import imgProject1 from "../assets/AI.jpg";
import imgProject2 from "../assets/india_tour.jpg";
import imgProject3 from "../assets/leave_form.jpg";
import imgProject4 from "../assets/CarbonWisePoster.jpg"


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
          <h1 className="text-[2.6em] tracking-tighter font-isans leading-12 mb-8" style={{fontWeight: 500}}><span className="text-gray-500">Building intelligent interfaces</span> that blend <br /> data-driven insights with sleek user experiences.</h1>

          <div className='flex flex-wrap flex-row gap-y-4 justify-between py-10'>

            <Cards imgName={imgProject1} className="w-[49%] h-[50vh]" projectName="BugsSmith" textColor={"text-white"}/>
                
            <Cards imgName={imgProject4} className="w-[49%] h-[50vh]" projectName="CarbonWise" textColor={"text-white"}/>            
                                  
            <Cards imgName={imgProject2} className="w-[49%] h-[50vh] text-black" projectName="Aasan Yatra" textColor={"text-brown-500"}/>
                
            <Cards imgName={imgProject3} className="w-[49%] h-[50vh]" projectName="LeavePoint"/>

          </div>

    </motion.div>
  )
}

export default Work