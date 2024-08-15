import React from 'react'

function SignIn() {
  return (
    <div>
      <div className=" h-[400px] w-[100%] md:w-[80%] lg:w-[60%] bg-yellow-200 rounded-[30px]  md:ml-[80px] lg:ml-[200px]">
            <section className=' h-[60px] bg-[] text-[20px] font-semibold flex justify-center items-center'>
                <h1>Sign In To Continue</h1>
            </section>
            <div className="signin h-[] pl-[30px] md:pl-[50px] lg:pl-[70px]">
              <form action="" method="post">
                <label htmlFor="">Phone Number</label> <br />
                <input type="Number" className='innp' /> <br />

                <label htmlFor="">Email</label> <br />
                <input type="email" name="" id="" className='innp'/>

                <br />
                <br />
                <input type="submit" value="Sign In" className=' btn' />
              </form>
            </div>
        </div>
      
      
    </div>
  )
}

export default SignIn
