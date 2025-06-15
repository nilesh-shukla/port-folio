import React, { PureComponent } from 'react'

function Achievement({ className, bgColor, children }) {
  return (
    <div className={`p-5 rounded-2xl ${bgColor} ${className}`}>

      {children}
        
    </div>
    )
}

export default Achievement