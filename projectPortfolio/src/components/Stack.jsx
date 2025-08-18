import React from 'react'

function Stack({className, textColor, titleColor, image, title, description}) {
  return (
    <div className={`flex items-center gap-4 px-3 py-4 font-isans rounded-3xl ${className}`}>
        <div className='w-15 h-15 '>
          <img src={image} alt="Image" className='rounded-xl object-cover' />
        </div>
        <div className='flex flex-col gap-1'>
            <h1 className={`text-xl tracking-tight ${titleColor}`}>{title}</h1>
            <p className={`text-md tracking-tight leading-5 ${textColor}`}>{description}</p>
        </div>
    </div>
  )
}

export default Stack