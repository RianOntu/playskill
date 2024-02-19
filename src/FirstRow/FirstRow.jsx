import React from 'react'
import './FirstRow.css'

function FirstRow() {
    return (
        <>
        <div className='flex flex-row items-center  z-0 mx-8 mt-3'>
            <h1 className='text-4xl hidden xl:block font-extrabold text-black'>Good Afternoon Anzhelika!</h1>
            <i class="fas fa-bell bg-[#FCFFFF] p-3 rounded-[50%] ml-6"></i>
            <button className='ml-6 p-3 font-bold bg-black text-white rounded-[7px]'>Start New Course</button>
           <div className="relative hidden lg:block">
           <input type="text" name="" id="" className='placeholder-margin ml-6 pl-10 left-[37px] top-[16px] bg-[#FCFFFF] p-3 rounded-[7px] w-96 focus:outline-none' placeholder='Voice Search' />
           <i class="fas fa-microphone top-[16px] left-[36px] absolute text-[#8689A9]"></i>
           <div className="absolute flex flex-row items-center top-[0px] right-[15px] ">
           <i class="fab fa-soundcloud text-2xl mr-2"></i>
           <p style={{fontSize:"29px",color:"gray"}} className=' '>|</p>
           <i class="fas fa-search text-2xl ml-2"></i>
           </div>
           </div>
           <i class="fas fa-search text-[#494C55] p-2 lg:hidden block  bg-[#F4F4F4] rounded-[50%] ml-6"></i>
        </div>
        </>
    )
}

export default FirstRow
