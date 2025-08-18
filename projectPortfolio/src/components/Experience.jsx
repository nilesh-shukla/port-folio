import React from 'react'

function Experience( {className, textColor, expColor, children, exp, time, language} ) {
  return (
    <div className={`flex lg:flex-row flex-col gap-2 justify-between  font-isans px-5 py-4 rounded-2xl ${className}`}>
        <h1 className={`text-xl tracking-tight ${expColor}`}>{exp}</h1>        
        <div className='flex lg:w-[50%] justify-between'>
          <h1 className={`text-md tracking-tight ${textColor}`}>{language}</h1>
          <h1 className={`text-md tracking-tight ${textColor}`}>{time}</h1>
        </div>
        {children}
    </div>
  )
}

export default Experience