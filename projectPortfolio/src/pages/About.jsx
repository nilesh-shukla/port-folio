import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import aboutImg from "../assets/aboutImg.avif"
import interImg from "../assets/interImg.avif"
function About() {
  return (
    <>
      <motion.div>

        <div className="p-45 font-isans">
          <h1 className="text-[2.6em] tracking-tighter leading-12 mb-12"><span className="text-gray-500">Nilesh Shukla blends data-driven insights,<br /> and dynamic experiences</span> to build intelligent <br /> and impactful digital solutions</h1>

          <div className="flex gap-2 ">
            <div className="flex flex-col w-[35%] bg-[#f4f4f4] p-3 rounded-3xl">

            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className="">CEO of Tarzan</h1>
              </div>
              <p>"From concept to execution, Michael delivered exceptional design solutions that improved our user engagement. His creativity and professionalism make him a trusted partner."</p>

            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>
              
            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>
              
            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>
              
            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>

            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>
              
            </div>
            <div className="flex flex-col">

              <div className="flex items-center bg-white p-3 rounded-2xl">
                <img src={interImg} alt="" className="w-[8%] rounded-lg" />
                <FontAwesomeIcon icon={faCircle} className="text-[5px]"/>
                <h1 className=""></h1>
              </div>
              <p></p>
              
            </div>
          </div>
          <div className="w-[65%] rounded-3xl">
            <img src={aboutImg} alt="" className="rounded-3xl"/>
          </div>
          </div>

        </div>
        
      </motion.div>
    </>
  )
}

export default About