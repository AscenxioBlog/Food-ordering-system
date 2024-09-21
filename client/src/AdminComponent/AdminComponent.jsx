import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddComponent from './AddComponent'

function AdminComponent() {
  return (
    <div className=' min-h-[100vh] bg-[#E7F0DC] w-full  mt-[100px] p-[20px]'>

        <section className=" h-[70px] col-span-2 bg-[]  flex items-end lg:pl-[122px]">
            <ul className=' flex justify-around items-end gap-3'>
                <li className='adminbtn h-[35px] w-[110px]  md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center  text-[15px]'>
                    <Link to='/admin/add'>+ RESTUARANT</Link>
                </li>
                <li className='adminbtn h-[35px] w-[110px] md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[15px] '>
                    <Link to='/admin/addmenu'>ADD MENU</Link>
                </li>
                {/* <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[20px]' >
                    <Link to="test">Edit</Link>
                </li>
                <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[20px] '>
                    <Link to="next">Delete</Link>
                </li> */}

                <li className='adminbtn h-[35px] w-[110px] md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center  text-[15px] md:text-[20px] lg:text-[20px]'>
                    <Link to="/admin/allrestaurant"> RESTAURANT</Link>
                </li>
            </ul>
        </section>
        <section className=" min-h-[100vh] bg-[] ">
            <div className="  ">
                <Outlet/>
            </div>
        </section>

        
      
    </div>
  )
}

export default AdminComponent
