import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function AdminComponent() {
  return (
    <div className=' min-h-[100vh] bg-rose-300 w-full grid grid-cols-12 mt-[100px] '>

        <section className=" min-h-[100vh] col-span-2 bg-green-300 ">
        <ul className='min-h-[100vh] flex flex-col justify-around items-center'>
                <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center rounded-[20px] text-[20px] font-bold'>
                    <Link to='/admin/add'>Add</Link>
                </li>
                <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center rounded-[20px] text-[20px] font-bold' >
                    <Link to="test">Edit</Link>
                </li>
                <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center rounded-[20px] text-[20px] font-bold'>
                    <Link to="next">Delete</Link>
                </li>

                <li className='adminbtn h-[30px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center rounded-[20px] text-[12px] md:text-[20px] lg:text-[20px] font-bold'>
                    <Link to="/admin/allres"> Restaurant</Link>
                </li>
            </ul>
        </section>
        <section className=" col-span-10 bg-yellow-800">
            <Outlet/>
        </section>
      
    </div>
  )
}

export default AdminComponent
