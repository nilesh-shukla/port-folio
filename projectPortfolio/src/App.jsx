import Header from "./components/Header";
import Cards from "./components/Cards";
import Button from "./components/Button"; 
import Achievement from "./components/Achievement";
import imgProject1 from "./assets/AI.png";
import imgProject2 from "./assets/india_tour.jpg";
import imgProject3 from "./assets/leave_form.png";
import imgProject4 from "./assets/CarbonWisePoster.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faAward, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (
    <>
      <Header />

      <div className='p-30 bg-black'>
      
            {/* Heading */}
              <div className='flex justify-between items-center mb-8'>
      
                <h1 className='text-4xl text-dmsans font-boldness tracking-tighter text-white'>Crafted Concepts</h1>
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

      <div className="flex p-30 justify-center gap-2.5">
        

        <Achievement className={" "} bgColor={"bg-gray-100"}>
          
          <div className="flex">

            <h1 className="text-3xl font-sans font-bold mr-2">W.</h1>
            <FontAwesomeIcon icon={faAward} className="text-3xl mt-1 text-yellow-400" />

          </div>
          
  
        </Achievement>

        <Achievement className={"shadow-box z-10 w-[33%]"} bgColor={"bg-black"}>
          <FontAwesomeIcon icon={faQuoteRight} className="text-4xl text-gray-600" />

          <p className="text-white text-2xl mt-2 font-dmsans">Shukla’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart</p>
        </Achievement>

        <Achievement className={" "} bgColor={"bg-gray-100"}></Achievement>


      </div>

    </>
  )
}

export default App
