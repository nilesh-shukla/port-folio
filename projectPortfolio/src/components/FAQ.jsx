import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function FAQ({className, children, solution}) {
    const [rotated, setRotated] = useState(false);

    const rotateIcon = () =>{
        setRotated(prev => !prev);
    }

  return (
    <div className={`relative px-2 py-4 w-full font-isans rounded-2xl bg-white flex flex-col overflow-hidden hover:cursor-pointer ${className}`} onClick={rotateIcon}>
        <div className='flex gap-2 justify-between items-center'>
            <h1 className="xl:text-xl leading-tight text-lg">{children}</h1>
            <FontAwesomeIcon icon={faPlus} className={`text-2xl text-[#6C7179] transition-transform duration-300 ${rotated? 'rotate-45 ' : ''}`}/>
        </div>
        <p className={`text-[#6C7179] xl:text-base text-sm leading-tight transition-all overflow-hidden ease-in-out duration-300 ${rotated? 'max-h-40 mt-3' : 'max-h-0'}`}>{solution}</p>
    </div>
  )
}

export default FAQ;