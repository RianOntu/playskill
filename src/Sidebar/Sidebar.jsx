import React, { useEffect, useState } from 'react'
import person from '../assets/person.jpg'
import bg2 from '../assets/bg2-white.jpg'



function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    console.log('clicked');
      
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.getElementById('hamburger');
      if (sidebar && !sidebar.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  useEffect(()=>{
    console.log(isOpen);
  
    isOpen===true?document.getElementById('hamburger').style.transform = "translateX(208px)":document.getElementById('hamburger').style.transform = "translateX(0px)"
  },[isOpen])


    return (
        <>
        <i class="fas fa-bars block sm:hidden" onClick={toggleSidebar} id='hamburger'></i>
        <div  class={`${isOpen == true ? 'flex flex-col z-10 bg-[#FFFFFF] p-6 w-52  inset-y-0  shadow-md h-screen overflow-y-auto absolute' : 'hidden'}`}>
          <h1 className='text-2xl font-bold mt-1 pl-6 text-center'>Playskill</h1>
          <hr className='mt-5 border-t-[3px]' />
          <div style={{top: "2px",left: "2px"}} className="bg-[#854685]  rounded-[50%] w-[100px] h-[100px] relative  mx-auto mt-5">
                    <div style={{top:"2px",left:"2px"}} className="bg-white rounded-[50%] w-[96px] h-[96px] absolute">
                        <div style={{    top: "5px",left: "5px"}} className="bg-[#FFF5FD] p-6 rounded-[50%] w-[87px] h-[86px] absolute border-2">
                        <img src={person} className='absolute rounded-[50%] w-[88px] h-[86px] top-[-1px] left-[-1px] object-cover' alt="" />
                        </div>

                    </div>
                    
                  </div>
                  <div className="mt-3 mx-auto">
                    <h1 className='text-xl font-bold'>Angelica Volnich</h1>
                     <h1 className='text-xs text-[#9F9EA6]'>angelicavolnich@gmail.com</h1>
                  </div>
                  <hr className='mt-5 border-t-[3px]' />
                  <h1 className='mt-5 text-xs text-[#9F9EA6]'>Menu</h1>
                <a className='p-3 mt-1 text-[#868391] font-semibold' href="/dashboard"><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
             <a className='p-3 text-[#868391] font-semibold' href="/orders"><i class="fas fa-border-style mr-4"></i>Lessons</a>
             <a className='p-3 text-[#868391] font-semibold' href="/clients"><i class="fas fa-users mr-3"></i>Assignment</a>
             <a className='p-3 text-[#868391] font-semibold' href="/statistics"><i class="fas fa-signal mr-3"></i>Messages</a>
             <a className='p-3 text-[#868391] font-semibold' href="/finance"><i class="fas fa-piggy-bank mr-3"></i>Settings</a>
            
            
             <hr className='mt-5 border-t-[3px]' />
             <button className='w-[100%]  rounded-[9px] px-[2px] py-[10px] border bg-white text-[#6A6B6A] mt-[90px]'><i class="fas fa-plus mr-3"></i>Start New Course</button>
             <div className="mt-3 relative">
              <img src={bg2} className='h-[150px] rounded-[10px]' alt="" />
              <h1 className='text-xl text-white font-bold absolute p-3 top-0'>Upgrade to<br />premium</h1>
              <button className='mt-5 bg-[#F9FFF9] text-black font-semibold absolute top-[63px] ml-3 px-[8px] py-[5px] rounded-[10px]'>Get Started</button>
             </div>
                
                
                
            
          </div>
       
          <div className="bg-[#FFFFFF] p-6 hidden md:flex lg:flex  md:flex-col md:w-52 inset-y-0  shadow-md sm:h-screen sm:overflow-y-auto">
          <h1 className='text-2xl font-bold mt-1 pl-6 text-center'>Playskill</h1>
          <hr className='mt-5 border-t-[3px]' />
          <div style={{top: "2px",left: "2px"}} className="bg-[#854685]  rounded-[50%] w-[100px] h-[100px] relative  mx-auto mt-5">
                    <div style={{top:"2px",left:"2px"}} className="bg-white rounded-[50%] w-[96px] h-[96px] absolute">
                        <div style={{    top: "5px",left: "5px"}} className="bg-[#FFF5FD] p-6 rounded-[50%] w-[87px] h-[86px] absolute border-2">
                        <img src={person} className='absolute rounded-[50%] w-[88px] h-[86px] top-[-1px] left-[-1px] object-cover' alt="" />
                        </div>

                    </div>
                    
                  </div>
                  <div className="mt-3 mx-auto">
                    <h1 className='text-xl font-bold'>Angelica Volnich</h1>
                     <h1 className='text-xs text-[#9F9EA6]'>angelicavolnich@gmail.com</h1>
                  </div>
                  <hr className='mt-5 border-t-[3px]' />
                  <h1 className='mt-5 text-xs text-[#9F9EA6]'>Menu</h1>
                  <a className='p-3 mt-1 text-[#868391] font-semibold' href="/dashboard"><i class="fas fa-tachometer-alt mr-3"></i>Dashboard</a>
             <a className='p-3 text-[#868391] font-semibold' href="/orders"><i class="fas fa-border-style mr-4"></i>Lessons</a>
             <a className='p-3 text-[#868391] font-semibold' href="/clients"><i class="fas fa-users mr-3"></i>Assignment</a>
             <a className='p-3 text-[#868391] font-semibold' href="/statistics"><i class="fas fa-signal mr-3"></i>Messages</a>
             <a className='p-3 text-[#868391] font-semibold' href="/finance"><i class="fas fa-piggy-bank mr-3"></i>Settings</a>
           
            
            
             <hr className='mt-5 border-t-[3px]' />
             <button className='w-[100%]  rounded-[9px] px-[2px] py-[10px] border bg-white text-[#6A6B6A] mt-[90px]'><i class="fas fa-plus mr-3"></i>Start New Course</button>
             <div className="mt-3 relative">
              <img src={bg2} className='h-[150px] rounded-[10px]' alt="" />
              <h1 className='text-xl text-white font-bold absolute p-3 top-0'>Upgrade to<br />premium</h1>
              <button className='mt-5 bg-[#F9FFF9] text-black font-semibold absolute top-[63px] ml-3 px-[8px] py-[5px] rounded-[10px]'>Get Started</button>
             </div>
               
                
            
          </div>
        </>
    )
}

export default Sidebar



