import React from 'react'
import Button from './Button'

function Cards() {
  return (
    <>
    <div className='p-40'>

        <div className='flex justify-between items-center'>

        <h1 className='text-4xl text-dmsans font-boldness tracking-tighter'>Crafted Concepts</h1>
        <Button buttonName="All Works" className="works tracking-tight bg-gray-200 text-black font-dmsans px-5 py-3 cursor-pointer rounded-2xl hover:bg-black hover:text-white duration-300" />

        </div>

        <div className='flex flex-wrap '>

        <div>
            
        </div>
        <div></div>
        <div></div>
        <div></div>

        </div>

    </div>
    </>
  )
}

export default Cards