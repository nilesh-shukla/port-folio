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
import { faArrowRight, faAward, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

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
        
        <Achievement bgColor={"bg-gray-100"}>          
          <div className="flex">
            <h1 className="text-3xl font-sans font-bold mr-2">W.</h1>
            <FontAwesomeIcon icon={faAward} className="text-3xl mt-1 text-yellow-400" />
          </div> 
        </Achievement>

        <Achievement className={"shadow-box z-10 h-full"} bgColor={"bg-black"}>
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-gray-600" />

          <p className="text-white text-2xl mt-2 font-dmsans">Nilesh’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>

          <div className="flex gap-3 mt-30">
            <img src={clientImage} alt="client"  className="w-8 h-8 mt-2 rounded-lg"/>
            <div className="flex flex-col">
              <p className="text-white">Divyanshu Chaubey</p>
              <p className="text-gray-500">Founder at Nexatech</p>
            </div>
          </div>

        </Achievement>

        <Achievement className={"relative group flex flex-col gap-2 text-xl justify-center items-center"} bgColor={"bg-gray-100"}>

          <button className="absolute w-[80%] text-left transition duration-500 group-hover:translate-y-0 z-30 bg-white rounded-2xl p-3 translate-y-0 shadow-xl">4+ Projects Completed</button>
          <button className="absolute w-[75%] text-left transition duration-500 group-hover:translate-y-14 group-hover:w-[80%] z-20 bg-white rounded-2xl p-3 translate-y-3 shadow-xl ease-in-out">2+ Years Experience</button>
          <button className="absolute w-[70%] text-left transition duration-500 group-hover:translate-y-28 group-hover:w-[80%] z-10 bg-white rounded-2xl p-3 translate-y-6 shadow-xl ease-in-out">10+ Happy Clients</button>

        </Achievement>


      </div>

    </>
  )
}

export default App
