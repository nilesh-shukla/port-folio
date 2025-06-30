import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Services({ className, customClass, children, headingName, icon, iconColor, iconBgColor, contentBgColor, bgColor, headingColor, textColor, describe, tag, tagBgColor }) {
  return (
    <div className={`${className} ${bgColor} group p-2 rounded-3xl flex flex-col gap-2 w-[32%]`}>
        
        <div className={`${contentBgColor} flex justify-between items-center group-hover:cursor-pointer rounded-2xl p-2`}>
            <div className='relative w-[75%] h-10 overflow-hidden'>
                <span className={`absolute top-1.5 translate-y-0 transition-all duration-300 group-hover:-translate-y-10`}><h1 className={`${headingColor} text-xl font-ralway`}>{headingName}</h1></span>
                <span className={`absolute top-full transition-all duration-300 group-hover:top-1/2 group-hover:-translate-y-1/2`}><h1 className={`${headingColor} text-xl font-ralway`}>Start a Project</h1></span>
            </div>
                
            <button className={`relative ${iconBgColor} w-8 h-8 px-3 py-2 rounded-lg overflow-hidden`}>
                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:-translate-y-10'>
                    <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
                </span>
                <span className='absolute top-full left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:top-1/2 group-hover:-translate-y-1/2'>
                    <FontAwesomeIcon icon={faArrowRight} className={`${iconColor}`}/>
                </span>
            </button>
        </div>

        <div className={`${contentBgColor} flex flex-col group-hover:opacity-50 duration-300 group-hover:cursor-pointer rounded-2xl px-2 py-3 gap-3`}>
            <p className={`${textColor} font-ralway`}>{describe}</p>
            <div className='flex justify-between'>
                {children}
            </div>
            <div className='flex flex-wrap mt-6 gap-x-3 gap-y-1 font-ralway'>
                <button className={`rounded-xl p-2 ${tagBgColor} ${textColor} ${customClass}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[0] : 'N/A'}
                </button>
                <button className={`rounded-xl p-2 ${tagBgColor} ${textColor} ${customClass}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[1] : 'N/A'}
                </button>
                <button className={`rounded-xl p-2 ${tagBgColor} ${textColor} ${customClass}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[2] : 'N/A'}
                </button>
                <button className={`rounded-xl p-2 ${tagBgColor} ${textColor} ${customClass}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[3] : 'N/A'}
                </button>
            </div>

        </div>
    </div>
  )
}

export default Services