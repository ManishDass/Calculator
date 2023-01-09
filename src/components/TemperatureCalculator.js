import React,{useEffect} from 'react'
import Sidebar from './Sidebar'

const TemperatureCalculator = () => {
  useEffect(()=>{
    document.title = "Calculator - Temperature"
  },[])
  
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default TemperatureCalculator