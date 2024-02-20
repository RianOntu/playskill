import React from 'react'
import bg from '../assets/bg-white.jpg'
import bg1 from '../assets/bg1-white.jpg'
import bg2 from '../assets/bg2-white.jpg'

function MidFirstRow() {
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3    bg-white rounded-[7px] p-6 sm:p-3 xl:p-6 gap-7 mt-[50px] ">
        <div className="relative w-[200px] p-0 mx-auto md:mx-0">
              <img src={bg} className='h-[150px] rounded-[10px]' alt="" />
        <div className="flex flex-col absolute p-3 top-[30px] left-[42px] text-center">
        <h1 className='text-3xl text-white font-bold  '>500</h1>
              <h1 className='text-sm font-bold text-white'>Hours Spent</h1>
        </div>
             
             </div>

             <div className="relative w-[200px] p-0 mx-auto md:mx-0">
              <img src={bg1} className='h-[150px] rounded-[10px]' alt="" />
              <div className="flex flex-col absolute p-3 top-[30px] left-[42px] text-center">
        <h1 className='text-3xl text-white font-bold'>500</h1>
              <h1 className='text-sm font-bold text-white'>Hours Spent</h1>
        </div>
             
             </div>
             <div className="relative w-[200px] p-0 mx-auto md:mx-0">
              <img src={bg2} className='h-[150px] rounded-[10px]' alt="" />
              <div className="flex flex-col absolute p-3 top-[30px] left-[42px] text-center">
        <h1 className='text-3xl text-white font-bold'>500</h1>
              <h1 className='text-sm font-bold text-white'>Hours Spent</h1>
        </div>
             
             </div>

        </div>
        </>
    )
}

export default MidFirstRow
