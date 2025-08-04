import Button from "./Button"
function Navigation() {
  return (
    <div>
      <header className='fixed top-0 left-0 w-full z-[9999] flex justify-between items-center px-8 py-2 bg-white'>
        <a className='hover:text-gray-600 duration-200' href="#">
        <h1 className='text-xl tracking-tighter font-isans font-boldness'>Nilesh Shukla</h1></a>
        <nav className='absolute left-1/2 transform -translate-x-1/2'>
          <ul className="flex gap-7 text-sm items-center tracking text-black font-isans font-boldness">
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Work">Work</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#About">About</a></li>
            <li><a className='inline-block hover:text-violet-600 transition-transform duration-200 ease-in-out hover:scale-150' href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <Button buttonName="Book A Call" className='booking tracking-tight bg-black rounded-2xl text-white font-isans px-5 py-3 shadow-box cursor-pointer hover:bg-violet-600 duration-300' /> 
      </header>
    </div>
  )
}

export default Navigation