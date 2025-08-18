import Phone from "../assets/phone.webp";
import { Link } from 'react-router-dom'; 

function Booking() {
  return (
    <div className="flex flex-col w-screen h-screen xl:p-20 p-7 font-isans items-center justify-center">
      <img src={Phone} alt="Phone" className="w-xl blur-xs hover:cursor-pointer"/>
      <h1 className="text-center"><span className="bold">This page is still in progress and will be made available soon.</span>Please contact me through my email or <Link to="/contact"><span className="text-gray-500">visit my contact page</span></Link>. <Link to="/Work"> You can also check out <span className="text-gray-500">my works and projects</span>.</Link></h1>
    </div>
  )
}

export default Booking;