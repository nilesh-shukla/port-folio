import Header from "./components/Header";
import Cards from "./components/Cards";
import Button from "./components/Button"; 
import Achievement from "./components/Achievement";
import imgProject1 from "./assets/AI.png";
import imgProject2 from "./assets/india_tour.jpg";
import imgProject3 from "./assets/leave_form.png";
import imgProject4 from "./assets/CarbonWisePoster.png"
import clientImage from "./assets/group.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faQuoteRight, faCircleCheck, faRocket, faFaceSmile } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (
    <>
      <Header />

      <div className='p-30'>
      
            {/* Heading */}
              <div className='flex justify-between items-center mb-8'>
      
                <h1 className='text-4xl text-dmsans font-boldness tracking-tighter text-black'>Crafted Concepts</h1>
                <Button buttonName="All Works" className="works tracking-tight bg-gray-200 text-black font-dmsans px-5 py-3 cursor-pointer rounded-2xl hover:bg-purple-600 hover:text-white duration-300" >
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </Button>
      
              </div>

            {/*Cards Section*/}
              <div className='flex flex-wrap flex-row gap-x-2 gap-y-8 justify-center px-5 py-10'>
      
              <Cards imgName={imgProject1} className="w-[40%] h-[50vh] hover:h-[70vh] transition-all duration-500 ease-in-out" projectName="BugsSmith" textColor={"text-white"}>

                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-2 mr-2">ML</button>        

              </Cards>            
              <Cards imgName={imgProject2} className="w-[40%] h-[50vh] hover:h-[70vh] transition-all duration-500 ease-in-out text-black" projectName="Aasan Yatra" textColor={"text-brown-500"}>

                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">HTML</button>  
                <button className="bg-transparent border-1 border-gray-700 text-black px-3 py-1 rounded-xl text-lg mr-2">CSS</button>  

              </Cards>
              <Cards imgName={imgProject3} className="w-[40%] h-[50vh] hover:h-[70vh] transition-all duration-500 ease-in-out" projectName="LeavePoint">

                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">JavaScript</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">NextJS</button>  
  
              </Cards>
              <Cards imgName={imgProject4} className="w-[40%] h-[50vh] hover:h-[70vh] transition-all duration-500 ease-in-out" projectName="CarbonWise" textColor={"text-white"}>

                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg mr-2">ML</button>
                <button className="bg-transparent border-1 border-gray-300 text-white px-3 py-1 rounded-xl text-lg">React</button>    

              </Cards>
    
              </div>

      </div>

      <div className="grid grid-cols-3 items-stretch px-40 py-20 justify-center gap-2.5">
        
        <Achievement className={"overflow-hidden group"} bgColor={"bg-gray-100"}>          
          <div className="flex">
            <h1 className="text-3xl font-sans font-bold mr-2">W.</h1>
            <FontAwesomeIcon icon={faAward} className="text-3xl mt-1 text-yellow-400" />
          </div> 

          <div className="flex flex-col">
            <h1 className="text-2xl font-dmsans mt-5">Awwwards Nominee</h1>
            <p className="text-gray-600">Recognized as Excellence in Web Design and innovative Machine Learning Models</p>
          </div>

          <div className="relative w-full h-full transition-transform duration-500 ease-in-out translate-y-10 group-hover:-translate-y-[20%] from-gray-300 to-gray-500 group-hover:cursor-pointer ">
            <iframe src="../public/Asaan-Yatra/AY.html" className="w-full h-full overflow-hidden rounded-xl border-none pointer-events-none " scrolling="no" title="Website Preview" />
          </div>

        </Achievement>

        <Achievement className={"shadow-box z-10"} bgColor={"bg-black"}>
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-gray-600" />

          <p className="text-white text-2xl mt-2 font-dmsans">Nilesh’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>

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


      </div>

    </>
  )
}

export default App
