import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Services({ className, children, headingName, icon, iconColor, iconBgColor, contentBgColor, bgColor, headingColor, textColor, describe, tag }) {
  return (
    <div className={`${className} ${bgColor} p-2 rounded-2xl flex flex-col gap-2 w-1/3`}>
        
        <div className={`${contentBgColor} flex justify-between items-center rounded-2xl p-2`}>
            <h1 className={`${headingColor} text-xl font-ralway`}>{headingName}</h1>
            <button className={`${iconBgColor} px-3 py-2 rounded-lg`}>
              <FontAwesomeIcon icon={icon} className={`${iconColor}`} />
            </button>
        </div>

        <div className={`${contentBgColor} flex flex-col rounded-2xl px-2 py-3 gap-2`}>
            <p className={`${textColor} font-ralway text-md`}>{describe}</p>
            <div className='flex'>
                {children}
            </div>
            <div className='flex'>
                <button className={`rounded-xl p-1 ${textColor}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[0] : 'N/A'}
                </button>
                <button className={`rounded-xl p-1 ${textColor}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[1] : 'N/A'}
                </button>
                <button className={`rounded-xl p-1 ${textColor}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[2] : 'N/A'}
                </button>
                <button className={`rounded-xl p-1 ${textColor}`}>
                    {Array.isArray(tag) && tag.length > 0 ? tag[3] : 'N/A'}
                </button>
            </div>

        </div>
    </div>
  )
}

export default Services