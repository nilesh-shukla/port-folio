import Header from "./components/Header";
import Cards from "./components/Cards";
import Button from "./components/Button"; 
import Services from "./components/Services"
import Achievement from "./components/Achievement";
import StepBullet from "./components/StepBullet";
import FAQ from "./components/FAQ";

import imgProject1 from "./assets/AI.png";
import imgProject2 from "./assets/india_tour.jpg";
import imgProject3 from "./assets/leave_form.png";
import imgProject4 from "./assets/CarbonWisePoster.png"
import clientImage from "./assets/group.jpg";
import ml1 from "./assets/ml1.jpg";
import ml2 from "./assets/ml2.webp";
import ml3 from "./assets/ml3.png";
import react1 from "./assets/react1.avif";
import react2 from "./assets/react2.jpeg";
import react3 from "./assets/react3.webp";
import da1 from "./assets/da1.jpg";
import da2 from "./assets/da2.jpg";
import da3 from "./assets/da3.jpg";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faQuoteRight, faCircleCheck, faRocket, faFaceSmile, faRightToBracket, faHexagonNodes, faIcons, faChartSimple} from '@fortawesome/free-solid-svg-icons';

function App() {
  
  return (
    <>
      <Header />

      {/*Projects Section*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        id="Projects"
        className="p-30"
            >
              <div className='flex justify-between items-center mb-8'>
                <h1 className='text-4xl text-dmsans font-boldness tracking-tighter text-black'>Crafted Concepts</h1>
                <Button buttonName="All Works" className="works tracking-tight bg-gray-200 text-black font-isans px-5 py-3 cursor-pointer rounded-2xl hover:bg-purple-600 hover:text-white duration-300" >
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </Button>
              </div>
              <div className='flex flex-wrap flex-row gap-x-2 gap-y-8 justify-center px-5 py-10'>
              <Cards imgName={imgProject1} className="w-[40%] h-[50vh]" projectName="BugsSmith" textColor={"text-white"}>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-2 mr-2">ML</button>        
              </Cards>            
              <Cards imgName={imgProject2} className="w-[40%] h-[50vh] text-black" projectName="Aasan Yatra" textColor={"text-brown-500"}>
                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">HTML</button>  
                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">CSS</button>  
              </Cards>
              <Cards imgName={imgProject3} className="w-[40%] h-[50vh]" projectName="LeavePoint">
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">JavaScript</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">NextJS</button>  
              </Cards>
              <Cards imgName={imgProject4} className="w-[40%] h-[50vh]" projectName="CarbonWise" textColor={"text-white"}>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">ML</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg">React</button>    
              </Cards>
              </div>
      </motion.div>

      {/* Achievement Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        id="Projects"
        className="grid grid-cols-3 items-stretch px-40 py-20 justify-center gap-2.5"
      >
        <Achievement className={"overflow-hidden group"} bgColor={"bg-gray-100"}>          
          <div className="flex">
            <h1 className="text-3xl font-sans font-bold mr-2">W.</h1>
            <FontAwesomeIcon icon={faAward} className="text-3xl mt-1 text-yellow-400" />
          </div> 
          <div className="flex flex-col">
            <h1 className="text-2xl font-isans mt-5">Awwwards Nominee</h1>
            <p className="text-gray-600">Recognized as Excellence in Web Design and innovative Machine Learning Models</p>
          </div>
          <div className="relative h-[200px] transition-transform duration-500 ease-in-out translate-y-5 group-hover:-translate-y-[40%] group-hover:cursor-pointer ">
            <img src="../public/WinnerPage.jpg" className=" overflow-hidden rounded-xl border-none group-hover:brightness-70 duration-300 pointer-events-none " alt="WinnerPage" />
            <button className="absolute top-2 right-3 p-3 bg-gray-500 rounded-xl opacity-0 group-hover:opacity-100 duration-300" >
              <a href="../public/ASAAN-YATRA/AY.html" target="_blank">
                <FontAwesomeIcon icon={faRightToBracket} className=" text-xl text-white " />
              </a>
            </button>
          </div>
        </Achievement>
        <Achievement className={"shadow-box z-10"} bgColor={"bg-black"}>
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-gray-600" />
          <p className="text-white text-2xl mt-2 font-isans">Nilesh’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>
          <div className="flex gap-3 mt-40">
            <img src={clientImage} alt="client"  className="w-8 h-8 mt-2 rounded-lg"/>
            <div className="flex flex-col">
              <p className="text-white">Divyanshu Chaubey</p>
              <p className="text-gray-500">Founder at Nexatech</p>
            </div>
          </div>
        </Achievement>
        <Achievement className={"relative group flex flex-col gap-2 text-xl justify-center items-center"} bgColor={"bg-gray-100"}>
          <button className="absolute flex justify-between items-center bg-green-600 -top-5 z-100 scale-0 transition group-hover:scale-100 ease-in-out duration-500 p-1 rounded-4xl text-white text-lg ">
            <img src="../public/profile1.jpg" alt="#" className="w-9 border-2 border-green-600 rounded-4xl z-40" />
            <img src="../public/profile2.jpg" alt="#" className="w-9 border-2 border-green-600 -translate-x-2 rounded-4xl z-30" />
            <img src="../public/profile3.jpg" alt="#" className="w-9 border-2 border-green-600 -translate-x-4 rounded-4xl z-20" />
            <img src="../public/profile4.avif" alt="#" className="w-9 border-2 border-green-600 -translate-x-6 rounded-4xl z-10" />
            <p className="mr-3 mb-1">Trusted by many</p>
          </button>
          <button className=" absolute flex justify-between items-center w-[85%] scale-100 transition duration-500 ease-in-out -translate-y-3 group-hover:-translate-y-15 group-hover:scale-100 z-30 bg-white rounded-2xl p-3 shadow-md group-hover:shadow-none ">4+ Projects completed
            <FontAwesomeIcon icon={faCircleCheck} className="text-xl text-purple-500" />
          </button>
          <button className=" absolute flex justify-between items-center w-[85%] scale-95 text-left transition duration-500 ease-in-out translate-y-0 group-hover:translate-y-0 group-hover:scale-100 z-20 bg-white rounded-2xl p-3 shadow-md group-hover:shadow-none ">2+ Years Experience
            <FontAwesomeIcon icon={faRocket} className="text-xl text-green-500" />
          </button>
          <button className=" absolute flex justify-between items-center w-[85%] scale-90 text-left transition duration-500 ease-in-out translate-y-3 group-hover:translate-y-15 group-hover:scale-100 z-10 bg-white rounded-2xl p-3 backdrop-blur-lg group-hover:shadow-none ">10+ Happy Clients
            <FontAwesomeIcon icon={faFaceSmile} className="text-xl text-yellow-500" />
          </button>
        </Achievement>
      </motion.div>

      {/* Service Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        id="Projects"
        className=" px-40 py-20 "
      >
        <div className="flex justify-between gap-[35%] mb-10">
          <h1 className="text-xl font-isans text-gray-500">Services</h1>
          <p className="text-4xl font-isans" style={{fontWeight: 500}}> <span className="text-gray-500">Design solutions that elevate brands and create seamless user experiences.</span> I help bring ideas to life with strategy and creativity</p>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <Services headingName={"Machine Learning"} icon={faHexagonNodes} iconColor={"text-yellow-300"} iconBgColor={"bg-yellow-100"} bgColor={"bg-gray-100"} contentBgColor={"bg-white"} describe={"An ML project is vital for extracting insights from data, enabling predictions, automation, and smarter decisions. It drives innovation, improves efficiency, and supports intelligent solutions across various industries."} textColor={"text-gray-400"} tag={["Python", "Machine Learning", "Data Science", "Artificial Intelligence"]} tagBgColor={"bg-gray-100"} >
              <img src={ml1} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
              <img src={ml2} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
              <img src={ml3} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
          </Services>
          <Services headingName={"React Developement"} headingColor={"text-white"} icon={faIcons} iconColor={"text-[#7430f7]"} iconBgColor={"bg-purple-100"} bgColor={"bg-black"} contentBgColor={"bg-[#7430f7]"} describe={"A React project helps create responsive, dynamic user interfaces using reusable components. It enhances development speed, code maintainability, and delivers smooth experiences across modern applications."} textColor={"text-white"} tag={["JavaScript","Web Development","Designing","+more"]} tagBgColor={"bg-[#7430f7]"} customClass="border-1 border-white">
            <img src={react1} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
            <img src={react2} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
            <img src={react3} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
          </Services>
          <Services headingName={"Data Analysis"} icon={faChartSimple} iconColor={"text-green-300"} iconBgColor={"bg-green-100"} bgColor={"bg-gray-100"} contentBgColor={"bg-white"} describe={"Data Analysis focuses on interpreting and visualizing data to drive informed decision-making. It involves data collection, cleaning, and analysis to uncover insights and trends that can benefit businesses."} textColor={"text-gray-400"} tag={["Data Analysis", "Business Intelligence", "Visualization", "Reporting"]} tagBgColor={"bg-gray-100"}>
            <img src={da1} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
            <img src={da2} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
            <img src={da3} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
          </Services>
        </div>
      </motion.div>

      {/* How I work */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        id="Projects"
        className="px-40 py-20 bg-[url('./assets/background.webp')] bg-cover bg-no-repeat"
      >
        <div className="flex justify-between gap-[30%]">
          <h1 className=" text-xl font-isans text-gray-500 whitespace-nowrap">How it works</h1>
          <div className="flex flex-col">
            <p className="text-4xl font-isans text-white mb-14" style={{fontWeight: 500}}>A simple and efficient workflow to bring your vision to life.<span className="text-gray-500">From the first call to final delivery, every step is designed for clarity and efficiency.</span></p>
            <div className="flex flex-col gap-4">
              <StepBullet number={1} heading={"Book A Call"} paragraph={"Let’s start with a conversation! We’ll discuss your goals, ideas, and how I can help bring them to life. This is where we align expectations and ensure a great fit"}/>
              <StepBullet number={2} heading={"Project Brief"} paragraph={"Once we’re on the same page, we’ll define the project scope, timeline, and deliverables. A structured brief ensures a smooth and efficient process"} />
              <StepBullet number={3} heading={"Develop"} paragraph={"This is where the magic happens! I’ll craft thoughtful designs and refine them based on feedback, ensuring the final outcome meets your vision and goals"}/>
              <StepBullet number={4} heading={"Deliver"} paragraph={"The final product is polished and ready to go. Whether it’s a brand identity, UI/UX design, or a Framer website, you’ll receive all the necessary files and guidance for a seamless handoff"}/>
              <StepBullet number={5} heading={"Support"} paragraph={"Enjoy one month of free support after project delivery. I’ll be available to answer questions, make minor adjustments, and ensure everything runs smoothly"}/>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Frequently Asked */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ amount: 0.3 }}
        id="Projects"
        className="p-40"
      >
        <div className="flex gap-10">
          <div className="font-isans flex flex-col w-1/2">
            <div className="flex items-center overflow-hidden">
              <h1 className="text-xl text-gray-500 mb-2 mr-2">FAQs</h1><hr className="w-full text-[#e4e4e4]" />
            </div>
            <p className="text-4xl mb-8"><span className="text-gray-500">Answers to common questions to help you understand</span> the process and how we can work together</p>
            <Button buttonName="Email Me" className="hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3 w-30" />
          </div>
          <div className="bg-gray-100 w-1/2 rounded-2xl p-3 flex flex-col gap-5">
            <div className="flex justify-center items-center">
              <button className="w-40 tracking-tight font-isans shadow-box rounded-2xl bg-black text-white py-2">I'm here to help you</button>
            </div>
            <div className="flex flex-col gap-3">
              <FAQ solution={"The timeline depends on the project’s scope and complexity. Branding and UI/UX projects usually take 2–6 weeks, while Framer website development can range from 1–4 weeks. I’ll provide a detailed timeline after the project brief"}>What's your typical project timeline?</FAQ>
              <FAQ solution={"Yes! I believe in collaboration and refining the work to match your vision. Each project includes a set number of revision rounds, which we’ll define in the project scope"}>How do you handle revisions?</FAQ>
              <FAQ solution={"I strive to ensure that all clients are satisfied with the final result. If you’re not happy, I’ll work with you to make it right."}>What if I'm not satisfied with the final result?</FAQ>
              <FAQ solution={"Absolutely! If you already have brand guidelines, I’ll ensure the designs align with your established identity while still bringing fresh creativity to the project"}>Can you work with my existing brand guidelines?</FAQ>
              <FAQ solution={"Yes, I provide one month of post-project support to address any questions or minor adjustments you may need."}>Do you provide post-project support?</FAQ>
              <FAQ solution={"The best way to reach me is via email or through the contact form on my website. I aim to respond within 24 hours."}>What’s the best way to reach you?</FAQ>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Section */}
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
      
    </>
  )
}

export default App
