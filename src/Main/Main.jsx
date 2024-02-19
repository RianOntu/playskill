import React from 'react'
import './Main.css'
import FirstRow from '../FirstRow/FirstRow'
import MidPart from '../MidPart/MidPart'
import RightPart from '../RightPart/RightPart'

function Main() {
    return (
       <>
      <div className="overflow-y-auto">
      <FirstRow></FirstRow>
       <div className="flex flex-col xl:flex-row  z-0 mx-8 ">
        <MidPart></MidPart>
        <RightPart></RightPart>
       </div>
       
      </div>
       </> 
    )
}

export default Main
