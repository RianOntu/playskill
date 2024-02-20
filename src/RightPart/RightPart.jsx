import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function RightPart() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
      setDate(date);
    };
  
    return (
        <>
        <div className="flex flex-col md:flex-row xl:flex-col mt-[50px] ml-5">
           <div>
           <Calendar
        onChange={onChange}
        value={date}
        className="border-none rounded-lg"
      />
           </div>
           <div className="bg-white rounded-lg p-3 mt-5">
            <h1 className='text-2xl font-bold'>Schedule</h1>
            <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>09 AM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
             <div className="absolute bg-[#E7FAFF] p-3 rounded-lg top-[37px] left-[58px]">
                <div className="flex flex-col">
                <h1 className='text-sm text-slate-400'>Start UI Design Communication</h1>
                <h1 className='text-md text-black font-semibold'>Learn User Flow</h1>
                <h1 className='text-sm text-slate-400'>09 AM - 10 AM</h1>
                </div>

             </div>
            </div>
            <div className="relative mt-3 py-7">
            <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>10 AM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                </div>
                <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>11 AM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                </div>
                <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>12 PM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                <div className="absolute bg-[#FEF3F7] p-3 rounded-lg top-[37px] left-[58px]">
                <div className="flex flex-col">
                <h1 className='text-sm text-slate-400'>Start UX Design Communication</h1>
                <h1 className='text-md text-black font-semibold'>Identify User Points</h1>
                <h1 className='text-sm text-slate-400'>12 PM - 01 PM</h1>
                </div>

             </div>
                </div>
                <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>01 PM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                </div>
                <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>02 PM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                </div>
                <div className="relative mt-3 py-7">
                <div className="flex flex-row items-center">
                <h1 className='text-md text-slate-500'>03 PM</h1>
                <hr className='border-t-[1px] ml-[1px] w-[80%]' />
                </div>
                </div>
           </div>
        </div>
        </>
    )
}

export default RightPart
