import Header from "../components/Header";
import Cards from "../components/Cards";
import Button from "../components/Button"; 
import Services from "../components/Services"
import Achievement from "../components/Achievement";
import StepBullet from "../components/StepBullet";
import FAQ from "../components/FAQ";

import imgProject1 from "../assets/AI.jpg";
import imgProject2 from "../assets/india_tour.jpg";
import imgProject3 from "../assets/leave_form.jpg";
import imgProject4 from "../assets/CarbonWisePoster.jpg"
import clientImage from "../assets/group.jpg";
import ml1 from "../assets/ml1.jpg";
import ml2 from "../assets/ml2.webp";
import ml3 from "../assets/ml3.png";
import react1 from "../assets/react1.avif";
import react2 from "../assets/react2.jpeg";
import react3 from "../assets/react3.webp";
import da1 from "../assets/da1.jpg";
import da2 from "../assets/da2.jpg";
import da3 from "../assets/da3.jpg";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faQuoteRight, faCircleCheck, faRocket, faFaceSmile, faRightToBracket, faHexagonNodes, faIcons, faChartSimple} from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 4.0}}>
    
        <Header />

        {/*Projects Section*/}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            viewport={{ amount: 0.1 }}
            id="Projects"
            className="xl:p-45 px-4 py-45"
                >
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-3xl xl:text-4xl text-dmsans font-boldness tracking-tighter text-black'>Crafted Concepts</h1>
                    <Link to="/work">
                        <Button 
                            className="works tracking-tight bg-gray-200 text-gray-600 font-isans cursor-pointer rounded-2xl hover:bg-purple-600 hover:text-white duration-300 flex items-center justify-center gap-2 p-4 xl:px-4 xl:py-3"
                        ><span className="hidden xl:inline">All Works</span>
                            <FontAwesomeIcon 
                            icon={faArrowRight} 
                            className="text-2xl xl:text-sm" 
                            />
                        </Button>
                    </Link>
                </div> 
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 py-10'>

                    <Cards imgName={imgProject1} projectName="BugsSmith" textColor={"text-white"} describe={"A platform that uses intelligence to verify identities and detects suspicious activity to prevent fake profiles and ensure authentic online interactions"}/>
                    
                    <Cards imgName={imgProject4}  projectName="CarbonWise" textColor={"text-black"} describe={"An AI-powered platform providing personalized insights to help households monitor, reduce, and control their carbon footprint effectively"}/> 
                                        
                    <Cards imgName={imgProject2} className=" text-black" projectName="Aasan Yatra" textColor={"text-white"} describe={"A platform that guides travelers with curated destinations, tips, and resources to plan memorable and hassle-free tourism experiences"}/>
                        
                    <Cards imgName={imgProject3}  projectName="LeavePoint" describe={"A website enabling students to submit, track, and manage leave applications seamlessly with an easy-to-use interface"}/>
                        
                </div>
        </motion.div>

        {/* Achievement Section */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ amount: 0.1 }}
            id="Projects"
            className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-1 grid-rows-3 grid-cols-1  items-stretch xl:px-45 px-4 justify-center xl:gap-2.5 gap-2"
        >
            <Achievement className={"xl:block md:hidden block overflow-hidden group"} bgColor={"bg-gray-100"}>          
            <div className="flex">
                <h1 className="text-3xl font-sans font-bold mr-2">W.</h1>
                <FontAwesomeIcon icon={faAward} className="text-3xl mt-1 text-yellow-400" />
            </div> 
            <div className="flex flex-col">
                <h1 className="text-2xl tracking-tight font-isans mt-5">Awwwards Nominee</h1>
                <p className="text-gray-600 tracking-tight leading-tight">Recognized as Excellence in Web Design and innovative Machine Learning Models</p>
            </div>
            <div className="relative h-[200px] transition-transform duration-500 ease-in-out translate-y-10 xl:group-hover:-translate-y-[40%] group-hover:cursor-pointer ">
                <img src="../public/WinnerPage.jpg" className=" overflow-hidden rounded-xl border-none group-hover:brightness-70 duration-300 pointer-events-none " alt="WinnerPage" />
                <button className="absolute top-2 right-3 p-3 bg-gray-500/50 rounded-xl xl:opacity-0 xl:group-hover:opacity-100 duration-300" >
                <a href="../public/ASAAN-YATRA/AY.html" target="_blank">
                    <FontAwesomeIcon icon={faRightToBracket} className=" text-xl text-white " />
                </a>
                </button>
            </div>
            </Achievement>
            <Achievement className={"shadow-box z-10"} bgColor={"bg-black"}>
            <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-gray-600" />
            <p className="text-white text-2xl mt-2 font-isans tracking-tight">Nilesh’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>
            <div className="flex gap-3 xl:mt-30 mt-60">
                <img src={clientImage} alt="client"  className="w-8 h-8 mt-2 rounded-lg"/>
                <div className="flex flex-col">
                <p className="text-white">Divyanshu Chaubey</p>
                <p className="text-gray-500">Founder at Nexatech</p>
                </div>
            </div>
            </Achievement>

            <Achievement className={"relative p-2 group flex flex-col gap-2 text-xl justify-center items-center"} bgColor={"bg-gray-100"}>
            <button className="absolute scale-75 flex justify-between items-center bg-green-600 xl:-top-5 top-8 z-100 xl:scale-0 transition xl:group-hover:scale-100 ease-in-out duration-500 p-1 rounded-4xl text-white text-lg ">
                <img src="../public/profile1.jpg" alt="#" className="w-9 border-2 border-green-600 rounded-4xl z-40" />
                <img src="../public/profile2.jpg" alt="#" className="w-9 border-2 border-green-600 -translate-x-2 rounded-4xl z-30" />
                <img src="../public/profile3.jpg" alt="#" className="w-9 border-2 border-green-600 -translate-x-4 rounded-4xl z-20" />
                <img src="../public/profile4.avif" alt="#" className="w-9 border-2 border-green-600 -translate-x-6 rounded-4xl z-10" />
                <p className="mr-3 mb-1">Trusted by many</p>
            </button>
            <button className=" flex justify-between items-center w-full scale-100 transition duration-500 ease-in-out 
            -translate-y-4 xl:translate-y-12 xl:group-hover:translate-y-0 xl:group-hover:scale-100 z-30 bg-white rounded-2xl p-3 shadow-md xl:group-hover:shadow-none ">4+ Projects completed
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl text-purple-500" />
            </button>
            <button className=" flex justify-between items-center w-full xl:scale-95 scale-100 text-left transition duration-500 ease-in-out group-hover:translate-y-0 group-hover:scale-100 z-20 bg-white rounded-2xl p-3 shadow-md group-hover:shadow-none ">2+ Years Experience
                <FontAwesomeIcon icon={faRocket} className="text-xl text-green-500" />
            </button>
            <button className=" flex justify-between items-center w-full xl:scale-90 scale-100 text-left transition duration-500 ease-in-out translate-y-4 xl:-translate-y-12 group-hover:translate-y-0 group-hover:scale-100 z-10 bg-white rounded-2xl p-3 backdrop-blur-lg group-hover:shadow-none ">10+ Happy Clients
                <FontAwesomeIcon icon={faFaceSmile} className="text-xl text-yellow-500" />
            </button>
            </Achievement>
        </motion.div>

        {/* Service Section */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            viewport={{ amount: 0.1 }}
            id="Projects"
            className=" xl:px-45 px-4 py-45 "
        >
            <div className="flex xl:flex-row flex-col justify-between xl:gap-[35%] gap-7 xl:mb-15 mb-20">
                <h1 className="text-xl font-isans text-gray-500">Services</h1>
                <p className="xl:text-4xl text-3xl tracking-tighter xl:leading-tight leading-8 font-isans" style={{fontWeight: 500}}> <span className="text-gray-500">Design solutions that elevate brands and create seamless user experiences.</span> I help bring ideas to life with strategy and creativity</p>
            </div>

            <div className='flex xl:flex-row flex-col justify-between items-center xl:gap-2 gap-4'>
                    <Services headingName={"Machine Learning"} icon={faHexagonNodes} iconColor={"text-yellow-300"} iconBgColor={"bg-yellow-100"} bgColor={"bg-gray-100"} contentBgColor={"bg-white"} describe={"Building intelligent and adaptive models that learn from data to deliver accurate predictions, automate decisions, and unlock insights that drive smarter, data-driven solutions"} textColor={"text-gray-400"} tag={["Python", "Machine Learning", "Data Science", "Artificial Intelligence"]} tagBgColor={"bg-gray-100"} >
                        <img src={ml1} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                        <img src={ml2} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                        <img src={ml3} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                    </Services>
                    <Services headingName={"SPA Developement"} className={"shadow-box z-20"} headingColor={"text-white"} icon={faIcons} iconColor={"text-[#7430f7]"} iconBgColor={"bg-purple-100"} bgColor={"bg-black"} contentBgColor={"bg-[#7430f7]"} describe={"Crafting fast, responsive, and interactive web apps with ReactJS, combining sleek UI design with efficient functionality for seamless user experiences across devices"} textColor={"text-white"} tag={["JavaScript","Web Development","Designing","ReactJS"]} tagBgColor={"bg-[#7430f7]"} customClass="border-1 border-white">
                        <img src={react1} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                        <img src={react2} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                        <img src={react3} alt="Image" className=" rounded-2xl object-cover w-[33%]"/>
                    </Services>
                    <Services headingName={"Data Analysis"} icon={faChartSimple} iconColor={"text-green-300"} iconBgColor={"bg-green-100"} bgColor={"bg-gray-100"} contentBgColor={"bg-white"} describe={"Turning complex datasets into clear, actionable insights through visualization, pattern discovery, and statistical techniques to inform better decisions and strategies"} textColor={"text-gray-400"} tag={["Analysis", "Business Intelligence", "Visualization", "Reporting"]} tagBgColor={"bg-gray-100"}>
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
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ amount: 0.1 }}
            id="Projects"
            className="xl:px-45 px-4 py-20 bg-[url('./assets/background.webp')] bg-cover bg-no-repeat"
        >
            <div className="flex xl:flex-row flex-col justify-between xl:gap-[30%] gap-10">
                <h1 className=" xl:text-xl text-lg font-isans text-gray-500 whitespace-nowrap">How it works</h1>
                <div className="flex flex-col">
                    <p className="xl:text-4xl text-3xl tracking-tighter xl:leading-tight leading-8 font-isans text-white mb-20" style={{fontWeight: 500}}>A simple and efficient workflow to bring your vision to life.<span className="text-gray-500"> From the first call to final delivery, every step is designed for clarity and efficiency.</span></p>
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
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ amount: 0.1 }}
            id="Projects"
            className="xl:px-45 px-4 py-40"
        >
            <div className="flex xl:flex-row flex-col gap-10">
                <div className="font-isans flex flex-col xl:w-1/2 xl:gap-2 gap-4">
                    <div className="flex items-center overflow-hidden">
                    <h1 className="xl:text-xl text-lg text-gray-500 mb-2 mr-2">FAQs</h1><hr className="w-full text-[#e4e4e4]" />
                    </div>
                    <p className="xl:text-4xl text-3xl tracking-tighter xl:leading-tight leading-8 mb-6"><span className="text-gray-500">Answers to common questions to help you understand</span> the process and how we can work together</p>
                    <a href="https://mail.google.com" target='_blank'>
                    <Button buttonName="Email Me" className="emailMe hover:bg-violet-600 duration-300 cursor-pointer tracking-tight font-isans shadow-box rounded-2xl bg-black text-white px-5 py-3 w-30" />
                    </a>
                </div>
                <div className="bg-gray-100 xl:w-1/2 rounded-2xl p-3 flex flex-col gap-5">
                    <div className="flex justify-center items-center">
                    <button className="w-40 tracking-tight font-isans shadow-box rounded-2xl bg-violet-600 text-white py-2">I'm here to help you</button>
                    </div>
                    <div className="flex flex-col gap-3 tracking-tight">
                    <FAQ solution={"The timeline depends on the project’s scope and complexity. ML projects typically take 3–6 weeks, depending on the data, model complexity, and deployment needs. Websites can take from 2–4 weeks based on the number of pages and interactions. I’ll provide a detailed timeline after reviewing the project brief."}>What's your typical project timeline?</FAQ>
                    <FAQ solution={"Yes! I believe in collaboration and refining the work to match your vision. Each project includes a set number of revision rounds, which we’ll define in the project scope"}>Do you offer revisions?</FAQ>
                    <FAQ solution={"I strive to ensure that all clients are satisfied with the final result. If you’re not happy, I’ll work with you to make it right."}>What if I'm not satisfied with the final result?</FAQ>
                    <FAQ solution={"Absolutely! If you already have brand guidelines, I’ll ensure the designs and functionalities align with your established identity while still bringing fresh creativity to the project"}>Can you work with my existing brand guidelines?</FAQ>
                    <FAQ solution={"Yes, I provide one month of post-project support to address any questions or minor adjustments you may need."}>Do you provide post-project support?</FAQ>
                    <FAQ solution={"The best way to reach me is via email or through the contact form on my website. I aim to respond within 24 hours."}>What’s the best way to reach you?</FAQ>
                    </div>
                </div>
            </div>
        </motion.div>
        
    </motion.div>
  )
}

export default Home