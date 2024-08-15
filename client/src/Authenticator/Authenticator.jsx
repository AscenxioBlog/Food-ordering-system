import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Authenticator() {
  return (
    <div>
        <div className=" min-h-[100vh] w-full bg-[#E7F0DC] grid mt-[100px] grid-rows-[1fr 3fr]">
            <div className=" bg-[] flex justify-center items-end">
                <div className=" h-[60px] w-[300px] md:w-[400px] lg:w-[400px] bg-[] grid grid-cols-2 gap-2">
                    <nav className=" bg-[] rounded-[20px] flex justify-center items-center font-bold text-[25px] ">
                    <Link to='/auth/signup'>Sign Up</Link>
                    </nav>
                    <nav className=" bg-[] rounded-[20px] flex justify-center items-center font-bold text-[25px]">
                        <Link to='/auth/signin'>Sign In</Link>
                    </nav>
                </div>
            </div>



            <div className="  bg-[] flex justify-center">
                <div className=" min-h-[400px] w-[80%] lg:w-[60%] bg-[]  rounded-[30px]">
                    <Outlet/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Authenticator
