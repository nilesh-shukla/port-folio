import Header from "./components/Header";
import Cards from "./components/Cards";
import Button from "./components/Button"; 
import  imgProject1 from "./assets/AI.png";
import  imgProject2 from "./assets/india_tour.jpg";
import  imgProject3 from "./assets/leave_form.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function App() {
  

  return (
    <>
      <Header />

      <div className='p-40'>
      
            {/* Heading */}
              <div className='flex justify-between items-center'>
      
                <h1 className='text-4xl text-dmsans font-boldness tracking-tighter'>Crafted Concepts</h1>
                <Button buttonName="All Works" className="works tracking-tight bg-gray-200 text-black font-dmsans px-5 py-3 cursor-pointer rounded-2xl hover:bg-black hover:text-white duration-300" >
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                </Button>
      
              </div>

            {/*Cards Section*/}
              <div className='flex flex-wrap flex-row gap-2 justify-center px-5 py-10 h-screen'>
      
              <Cards imgName={imgProject1} className=""></Cards>            
              <Cards imgName={imgProject2} className=""></Cards>
              <Cards imgName={imgProject3} className=""></Cards>
      
              </div>

      </div>

    </>
  )
}

export default App
