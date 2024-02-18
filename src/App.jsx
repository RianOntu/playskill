import Main from "./Main/Main"
import Sidebar from "./Sidebar/Sidebar"



function App() {
  

  return (
    <>

<div className="flex flex-row">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className='overflow-y-auto w-[100vw] md:w-[calc(100vw-13rem)] h-screen z-0 m-8 mt-12'>
                <Main></Main>
            </div>
        </div>
    

    </>
  )
}

export default App
