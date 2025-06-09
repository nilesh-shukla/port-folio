import React from 'react'
import Button from './Button'

function Cards({className, projectName, imgName, children}) {
  return (
    <div className={`flex w-[45%] h-[60%] rounded-xl ${className}`}>
    
       <img src={imgName} alt="Project" className='object-cover w-full' />
       <h1>{projectName}</h1>
       <div>
          {children}
       </div>
    
    </div>
  )
}

export default Cards