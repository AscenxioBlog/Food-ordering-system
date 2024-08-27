import React from 'react'
import Restaurant1Component from './Restaurant1Component'

function RestauarantLandingpage() {
  return (
    <div className=' h-[100vh] w-full bg-slate-900 grid grid-cols-[20%,80%]'>
        <div className=" bg-amber-700"></div>
        <div className=" bg-amber-100 overflow-scroll">
            {/* <Restaurant1Component/> */}
        </div>
    </div>
  )
}

export default RestauarantLandingpage