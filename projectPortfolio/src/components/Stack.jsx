import React from 'react'

function Stack({className, textColor, titleColor, image, title, description}) {
  return (
    <div className={`px-3 py-4 flex gap-4 font-isans rounded-2xl ${className}`}>
        <img src={image} alt="Image" className='w-[10%] rounded-2xl object-cover' />
        <div className='flex flex-col gap-1'>
            <h1 className={`text-xl tracking-tight ${titleColor}`}>{title}</h1>
            <p className={`text-md tracking-tight ${textColor}`}>{description}</p>
        </div>
    </div>
  )
}

export default Stack