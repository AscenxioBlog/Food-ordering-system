import React, { useState } from 'react'
import CustomInput from '../ReusableComponent/MyInput/CustomInput'
import { GiCancel } from "react-icons/gi";
function SignIn({passme,tinubu}) {
  let [signupData,setSignupData] = useState({
    email:'',
    password:''
  });

  const getValues =(e)=>{
    const {name,value} = e.target;
    setSignupData({
      ...signupData,
      [name]:value
    })
  }

  const forhandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });
      
      const data = await response.json();
      console.log(data); // Here you will get the JWT token if login is successful
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      <div className=" h-[400px] w-[100%] md:w-[80%] lg:w-[60%] bg-[#5F8670] mt-9 rounded-[30px]  md:ml-[80px] lg:ml-[200px] relative">
        <button  onClick={passme} className=' absolute top-3 right-3 text-[#cf9292]'><GiCancel size={25} /></button>
            <section className=' h-[60px] bg-[] text-[20px] font-semibold flex justify-center items-center'>
                <h1>Sign In To Continue</h1>
            </section>
            <div className="signin h-[] pl-[30px] md:pl-[50px] lg:pl-[70px]">
              <form onSubmit={forhandleSubmit} encType="multipart/form-data">
                {/* <label htmlFor="">Phone Number</label> <br /> */}
                <CustomInput
                            type="email"
                            name="email"
                            required 
                            placeholder= 'Email'
                            onChange={getValues}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        />
               <br /> <br />
                <CustomInput
                            type="password"
                            name="password"
                            required 
                             placeholder= 'Password'
                            onChange={getValues}
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        />

                <br />
                <br />
                <button type='submit'>submit</button>

                {/* <CustomInput
                            type="button"
                            value="submit"
                            required 
                            className='bb h-[50px] w-[80%] cursor-pointer bg-[transparent] hover:bg-[#E7F0DC] rounded-[5px]'
                        /> */}
              </form>
            </div>

            <section className="w-full flex justify-center mt-2 space-x-2"> <span>Dont't have account?</span> 
             <span className=' underline font-bold'> <button onClick={tinubu}>Sign Up</button></span>  <span>here</span>
            </section>
        </div>
      
      
    </div>
  )
}

export default SignIn
