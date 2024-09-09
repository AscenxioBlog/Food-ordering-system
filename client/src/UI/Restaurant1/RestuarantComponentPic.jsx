import React from 'react'
import ch from '../../Files/ch.jpg'
import { MdStarBorderPurple500 } from "react-icons/md";


function RestuarantComponentPic() {
  return (
    <div >
        <div className=" h-[80vh] w-full bg-slate-400 mt-[100px]">
          <img src={ch} alt="" />

        </div>
        {/* <div className="h-[150px] w-full bg-[] p-4">
          <h1 className='text-[25px] font-bold'>Chicken & Co</h1>
          <p className='text-[16px] text-slate-400'>African, Rice, Chicken, Snacks</p>
          <p className='text-[16px] text-slate-400 flex'><MdStarBorderPurple500 className='text-[yellow] text-[20px]' /> 4.1 537+ Ratings</p>
          <p className='text-[16px] text-slate-400'>Ijebu-Ode, Ogun State</p>
        </div> */}
      
    </div>
  )
}

export default RestuarantComponentPic
