import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Authenticator(props) {
    var [hide,Reveal]=useState('block')
    var [hideSignUp,ShowSignUp]= useState('none')

    function setReveal() {
        Reveal('none')
        ShowSignUp('block')
        
    }

    function setsignUp() {
        ShowSignUp('none')
        Reveal('block')

    }
  return (
    <div>
        <div className=" h-[100vh] w-full bg-[#80707092] mt-[] absolute overflow-y-scroll" style={{top:props.getheight, transition:'1s', opacity:props.seemodal}}>

            {/* <div className=" bg-[] flex justify-center items-end">
                <div className=" h-[60px] w-[300px] md:w-[400px] lg:w-[400px] bg-[] grid grid-cols-2 gap-2">
                    <nav className=" bg-[] rounded-[20px] flex justify-center items-center font-bold text-[25px] ">
                    <Link to='/auth/signup'>Sign Up</Link>
                    </nav>
                    <nav className=" bg-[] rounded-[20px] flex justify-center items-center font-bold text-[25px]">
                        <Link to='/auth/signin'>Sign In</Link>
                    </nav>
                </div>
            </div> */}

            <div className=" h-[120vh]  bg-[] flex justify-center">
                <div className=" min-h-[400px] w-[80%] lg:w-[60%] bg-[]  rounded-[30px]">
               <div className="" style={{display:hide}}>
               <SignIn tinubu={setReveal}/>
               </div>
               <div className="" style={{display:hideSignUp}}>
                <SignUp SeeSignUp={setsignUp}/>
               </div>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Authenticator
