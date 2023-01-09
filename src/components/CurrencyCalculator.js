import React, { useEffect } from 'react'
import Sidebar from './Sidebar'


const CurrencyCalculator = () => {
  useEffect(()=>{
    document.title = "Calculator - Currency"
  },[])
  return (
    <div>
        <Sidebar/>
    </div>
  )
}

export default CurrencyCalculator