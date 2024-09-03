import React from 'react'
import CustomInput from '../ReusableComponent/MyInput/CustomInput'

function SignUp(props) {
  return (
    <div>
        <div  className=" SignUp h-[600px] w-full bg-[#5F8670] rounded-[30px] flex flex-col items-center mt-6">
          <section className=" h-[40px] w-full bg-[] flex justify-center text-[20px] text-white font-bold">
        <h1>Sign Up To Continue</h1>
          </section>
            <div className=" w-[100%] pl-[30px] md:pl-[50px] lg:pl-[80px]">
              <form action="" method="post">
                {/* <label htmlFor="">First Name</label> <br /> */}
                <CustomInput
                            type="text"
                            name="first_name"
                            required 
                             placeholder= 'First Name'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        />
                        <br />
                {/* <input type="text" className='inp' placeholder='Input your first name here' /> */}

                <br />
                {/* <label htmlFor="">Last Name</label> <br /> */}
                <CustomInput
                            type="text"
                            name="last_name"
                            required 
                             placeholder= 'Last Name'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Write your last name here'/> */}


                <br />
                {/* <label htmlFor="">Email</label> <br /> */}
                <CustomInput
                            type="email"
                            name="email"
                            required 
                             placeholder= 'Email'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="email" className='inp' placeholder='Write our correct email here'/> */}


                <br />
                {/* <label htmlFor="">Phone Number</label> <br /> */}
                <CustomInput
                            type="text"
                            name="phone_number"
                            required 
                             placeholder= 'Phone Number'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Your active phoe number' /> */}


                <br />
                {/* <label htmlFor="">Password</label> <br /> */}
                <CustomInput
                            type="password"
                            name="password"
                            required 
                            placeholder= 'Password'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br /> <br />

                        {/* <label htmlFor="">Comfirm Password</label> */}
                        <CustomInput
                            type="password"
                            name="comfirm_password"
                            required 
                             placeholder= 'Comfirm Password'
                            className='bb h-[50px] w-[80%]  bg-[transparent] rounded-[5px]'
                        /> <br />
                {/* <input type="text" className='inp' placeholder='Any refferal code?'/><br /> */}

                <br />
                <CustomInput
                            type="submit"
                            name=""
                            required 
                            className='bb h-[50px] w-[80%]  bg-[transparent] hover:bg-[#E7F0DC] rounded-[5px]'
                        />
                {/* <input type="submit" value={'Next'} className='sub' /> */}
              </form>
            </div> 

            <section className="w-full flex justify-center mt-2 space-x-2"> <span>Already have an account?</span> 
             <span className=' underline font-bold'> <button onClick={props.SeeSignUp}>Sign In</button></span>  <span>here</span>
            </section>
        </div>
      
    </div>
  )
}

export default SignUp
