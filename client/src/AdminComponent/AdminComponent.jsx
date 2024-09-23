import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import AddComponent from './AddComponent'
import PhoneAdmin from './PhoneAdmin'
import { TiThMenu } from "react-icons/ti";
import CustomButton from '../ReusableComponent/MyButton/CustomButton';


function AdminComponent() {
    var [showMe,setShowMe]= useState('-300px')

    function HideModal() {
        if (showMe === '-300px') {
        setShowMe('0')
            
        }
        else{
        setShowMe('-300px')

        }
    }
  return (
    <div className=' min-h-[100vh] bg-[#E7F0DC] w-full  mt-[100px] md:grid  md:grid-cols-[25%,75%] lg:grid-cols-[22%,78%]'>
       <PhoneAdmin
       showMe ={showMe}
       HideModal={HideModal}
       />
        <div className=" hidden md:inline-block bg-red-300 overflow-y-scroll">
            <section className=" bg-slate-200 w-full">
                <h1 className=' text-[20px] font-bold'>Main</h1>
                <Link to='/admin/profile'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>PROFILE</div>
                </Link>
                <Link to='/admin'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>DASHBOARD</div>
                </Link>
                <Link to='/admin/add'>
                    <div  className=' h-[60px] w-full bg-pink-600 flex items-center'>+ RESTUARANT </div>
                </Link>
                <Link to='/admin/addmenu'>
                    <div className=" h-[60px] w-full bg-pink-200 flex items-center">ADD MENU</div>
                </Link>
                <Link to='/admin/allrestaurant'> 
                    <div className="  h-[60px] w-full bg-pink-600 flex items-center">RESTAURANT</div>
                </Link>
                <Link to='/admin/allevent'>
                    <div  className=' h-[60px] w-full bg-pink-200 flex items-center'>ALL EVENT</div>
                </Link>

            </section>
        </div>
        <div className="min-h-[100vh] bg-[]">
            <div className=" h-[60px] w-full bg-[] text-[20px] flex items-center font-bold justify-between pr-5">
                <h1>Welcome</h1>  
                {/* <CustomButton
                 className=" text-orange-700 lg:hidden  "
                 label = <TiThMenu size={25}/>
                 onclick={HideModal}
                /> */}
                <button onClick={HideModal} className=" text-orange-700 md:hidden  "><TiThMenu size={25}/></button>
                
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

         */}
      
    </div>
  )
}

export default AdminComponent
