

function Cards({textColor,className, projectName, imgName, children}) {
  return (
    <div className={`relative flex rounded-3xl overflow-hidden hover:cursor-pointer ${className}`}>
    
       <img src={imgName} alt="Project" className='relative object-cover w-full z-0' />

        <div className='absolute z-100 bottom-0 left-0 right-0 p-4 grid grid-rows-2 auto-rows-min gap-y-1.5 justify-left'>
          <h1 className={`${textColor} text-2xl font-isans`}>{projectName}</h1>
          <div className='flex'>
            {children}
          </div>

        </div>
    
    </div>
  )
}

export default Cards