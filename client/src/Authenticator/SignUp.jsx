import React from 'react'

function SignUp() {
  return (
    <div>
        <div  className=" SignUp h-[600px] w-full bg-[] rounded-[30px] flex flex-col items-center">
          <section className=" h-[40px] w-full bg-[] flex justify-center text-[20px] font-bold">
        <h1>Sign Up To Continue</h1>
          </section>
            <div className=" w-[100%] pl-[30px] md:pl-[50px] lg:pl-[80px]">
              <form action="" method="post">
                <label htmlFor="">First Name</label> <br />
                <input type="text" className='inp' placeholder='Input your first name here' />

                <br />
                <label htmlFor="">Last Name</label> <br />
                <input type="text" className='inp' placeholder='Write your last name here'/>


                <br />
                <label htmlFor="">Email</label> <br />
                <input type="email" className='inp' placeholder='Write our correct email here'/>


                <br />
                <label htmlFor="">Phone Number</label> <br />
                <input type="text" className='inp' placeholder='Your active phoe number' />


                <br />
                <label htmlFor="">Refferal Code(Optional)</label> <br />
                <input type="text" className='inp' placeholder='Any refferal code?'/><br />

                <br />
                <input type="submit" value={'Next'} className='sub' />
              </form>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
