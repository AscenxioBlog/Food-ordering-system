import React from 'react'
import CustomButton from '../../ReusableComponent/MyButton/CustomButton'
import capture from '../../Files/Capture.PNG'
import captur1 from '../../Files/Capture1.PNG'

function IndexComponent5() {
  return (
    <div className=" bg-[#E7F0DC]">
        <div className=" h-[100px] w-full bg-[] flex flex-col justify-end items-center ">
            <h1 className=' text-[30px] font-bold '>Work With Us</h1>
            <p className=' text-[17px] '>You can work with us and earn more than your expectation</p>
        </div>
         <div className=' min-h-[700px] w-full flex justify-center items-center'>
      <div className=" min-h-[500px] w-[70%] bg-[] grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 ">
        <div className=" bg-white p-5">
            <div className=" h-[200px] w-full bg-yellow-400">
                <img src={capture} alt="" />
            </div>
            <div className="  text-center">
                <h1 className=' text-[20px] font-bold'>Submit Your Restaurants</h1>
                <p className=' text-[gray] text-[17px] mt-3'>Start To Earn Customers</p>
                <p className=' mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque incidunt voluptates suscipit esse iusto quam. Dolorem odit molestiae, rerum nesciunt maiores eos minus dolores quaerat sequi magnam, aliquam ipsam!</p>
                
                <CustomButton 
                    height = '40px'
                    width = '150px'
                    backgroundColor = '#5F8670'
                    borderRadius = '10px'
                    label = 'Read More'
                    marginTop = '30px'
                
                
                />
            </div>
        </div>
        <div className=" bg-white p-5">
        <div className=" h-[200px] w-full bg-yellow-400">
                <img src={captur1} alt="" />
            </div>
            <div className="  text-center">
                <h1 className=' text-[20px] font-bold'>We Are Looking For A Driver</h1>
                <p className=' text-[gray] text-[17px] mt-3'>Start To Earn Money</p>
                <p className=' mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eaque incidunt voluptates suscipit esse iusto quam. Dolorem odit molestiae, rerum nesciunt maiores eos minus dolores quaerat sequi magnam, aliquam ipsam!</p>
                
                <CustomButton 
                    height = '40px'
                    width = '150px'
                    backgroundColor = '#5F8670'
                    borderRadius = '10px'
                    label = 'Read More'
                    marginTop = '30px'
                
                
                />
            </div>
        </div>
      </div>
    </div>
    </div>
   
  )
}

export default IndexComponent5
