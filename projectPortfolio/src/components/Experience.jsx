import React from 'react'

function Experience( {className, textColor, expColor, children, exp, time, language} ) {
  return (
    <div className={`grid grid-cols-3 gap-x-4 items-center font-isans px-5 py-4 rounded-2xl ${className}`}>
        <h1 className={`text-xl tracking-tight text-left ${expColor}`}>{exp}</h1>
        <h1 className={`text-md tracking-tight text-right ${textColor}`}>{language}</h1>
        <h1 className={`text-md tracking-tight text-right ${textColor}`}>{time}</h1>
        {children}
    </div>
  )
}

export default Experience