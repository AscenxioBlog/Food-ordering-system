import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddComponent from './AddComponent'

function AdminComponent() {
  return (
    <div className=' min-h-[100vh] bg-[#E7F0DC] w-full  mt-[100px] grid grid-cols-1 md:grid-cols-[25%,75%] lg:grid-cols-[22%,78%]'>
        <div className=" bg-red-300 overflow-y-scroll">
            <section className=" bg-slate-200 w-full">
                <h1 className=' text-[20px] font-bold'>Main</h1>
                <Link to='/admin'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>DASHBOARD</div>
                </Link>
                <Link to='/admin/add'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>+ RESTUARANT </div>
                </Link>
                <Link to='/admin/addmenu'>
                    <div className=" h-[60px] w-full bg-pink-200 flex items-center">ADD MENU</div>
                </Link>
                <Link> 
                    <div className="  h-[60px] w-full bg-pink-600 flex items-center">RESTAURANT</div>
                </Link>

            </section>
        </div>
        <div className="min-h-[100vh] bg-[]">
            <div className=" h-[60px] w-full bg-[] text-[20px] flex items-center font-bold">
                <h1>Welcome</h1>
                
            </div>
            <div className="  ">
                <Outlet/>
            </div>
        </div>


        {/* <section className=" h-[70px] col-span-2 bg-[]  flex items-end lg:pl-[122px]">
            <ul className=' flex justify-around items-end gap-3'>
                <li className='adminbtn h-[35px] w-[110px]  md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center  text-[15px]'>
                    <Link to='/admin/add'>+ RESTUARANT</Link>
                </li>
                <li className='adminbtn h-[35px] w-[110px] md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[15px] '>
                    <Link to='/admin/addmenu'>ADD MENU</Link>
                </li> */}
                {/* <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[20px]' >
                    <Link to="test">Edit</Link>
                </li>
                <li className='adminbtn h-[25px] w-[80px] md:h-[35px] md:w-[100px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center text-[20px] '>
                    <Link to="next">Delete</Link>
                </li> */}

                {/* <li className='adminbtn h-[35px] w-[110px] md:h-[35px] md:w-[120px] lg:h-[50px] lg:w-[200px] bg-slate-200 flex justify-center items-center  text-[15px] md:text-[20px] lg:text-[20px]'>
                    <Link> RESTAURANT</Link>
                </li>
            </ul>
        </section>
        <section className=" min-h-[100vh] bg-[] ">
            <div className="  ">
                <Outlet/>
            </div>
        </section>

         */}
      
    </div>
  )
}

export default AdminComponent
