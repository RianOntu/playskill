import React from 'react'
import team from '../assets/team.png'

function MidThirdRow() {
    return (
        <>
            <div className='bg-[white] p-6 rounded-[7px] mt-5 mb-5'>
            <div className="flex flex-row justify-between px-3 items-center">
             <h1 className='text-2xl font-bold'>Top picks for you</h1>
             
             <h1 className='text-sm text-[#939393]'>Show All<i class="fas fa-chevron-right ml-2"></i></h1>
         
             
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  bg-white rounded-[7px] p-6 sm:p-3 xl:p-6 gap-7 mt-3">
        <div class="w-[200px] p-0 mx-auto sm:mx-0">
  
  <div class="bg-[#F4F5F7] rounded-lg shadow-lg p-2">
                <div className="bg-white rounded-lg p-3 pt-5 mx-auto">
                <img src={team} alt="" class=" w-[100px] h-[100px]  p-3 mx-auto"/>
                </div>
    
    <div class="p-6">
      <h2 class="font-bold mb-2 text-md text-black">How to create CV
      </h2>
      <p class="text-slate-400 text-sm mb-2">2 Hours</p>
      
    </div>

  </div>
</div>

<div class="w-[200px] p-0 mx-auto sm:mx-0">
  
  <div class="bg-[#F4F5F7] rounded-lg shadow-lg p-2">
                <div className="bg-white rounded-lg p-3 pt-5 mx-auto">
                <img src={team} alt="" class=" w-[100px] h-[100px]  p-3 mx-auto"/>
                </div>
    
    <div class="p-6">
    <h2 class="font-bold mb-2 text-md text-black">How to create CV
      </h2>
      <p class="text-slate-400 text-sm mb-2">2 Hours</p>
      
    </div>

  </div>
</div>

<div class="w-[200px] p-0 mx-auto sm:mx-0">
  
  <div class="bg-[#F4F5F7] rounded-lg shadow-lg p-2">
                <div className="bg-white rounded-lg p-3 pt-5 mx-auto">
                <img src={team} alt="" class=" w-[100px] h-[100px]  p-3 mx-auto"/>
                </div>
    
    <div class="p-6">
    <h2 class="font-bold mb-2 text-md text-black">How to create CV
      </h2>
      <p class="text-slate-400 text-sm mb-2">2 Hours</p>
      
    </div>

  </div>
</div>
        </div>
        </div>
        </>
    )
}

export default MidThirdRow
