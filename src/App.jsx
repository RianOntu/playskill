import Main from "./Main/Main"
import Sidebar from "./Sidebar/Sidebar"



function App() {
  

  return (
    <>

<div className="flex flex-row ">
            <div className="z-10">
                <Sidebar></Sidebar>
            </div>
            <div className='w-[88%] sm:w-[100%] z-0'>
                <Main></Main>
            </div>
        </div>
    

    </>
  )
}

export default App
