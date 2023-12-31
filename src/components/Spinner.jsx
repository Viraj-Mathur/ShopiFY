import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div>
      <p className='flex justify-center font-semibold'>LOADING....</p>
    <div className="hourglassBackground"> 
      <div className="hourglassContainer">
        <div className="hourglassCurves"></div>
        <div className="hourglassCapTop"></div>
        <div className="hourglassGlassTop"></div>
        <div className="hourglassSand"></div>
        <div className="hourglassSandStream"></div>
        <div className="hourglassCapBottom"></div>
        <div classN="hourglassGlass"></div>
        
      </div>
    </div>
    </div>
  )
}

export default Spinner
