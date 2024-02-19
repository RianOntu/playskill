import Main from "./Main/Main"
import Sidebar from "./Sidebar/Sidebar"



function App() {
  

  return (
    <>

<div className="flex flex-row">
            <div className="">
                <Sidebar></Sidebar>
            </div>
            <div className=''>
                <Main></Main>
            </div>
        </div>
    

    </>
  )
}

export default App
