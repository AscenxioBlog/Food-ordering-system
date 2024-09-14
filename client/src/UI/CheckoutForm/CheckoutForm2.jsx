import React from 'react'
import Cart from '../../ReusableComponent/Cart'
import CustomInput from '../../ReusableComponent/MyInput/CustomInput'
import SliderComponent from '../../ReusableComponent/Slider/SliderComponent'

function CheckoutForm2() {
  return (
    <div className=' min-h-[100vh] w-full bg-[#E7F0DC] grid grid-cols-1 lg:grid-cols-[32%,40%,24%] gap-6 '>
        <div className="h-[60vh] md:h-[60vh] lg:h-[100vh] bg-[] flex items-center p-2">
            <div className=" min-h-[400px] w-full bg-[] flex justify-center">
                <SliderComponent/>
            </div>

        </div>

        <div className=" bg-[] ">
            <div className=" h-[80px] w-full bg-[#5F8670] text-[20px] md:text-[35px] flex justify-center items-center text-white font-bold">
                <h1>Your order details</h1>
            </div>
            
           <div className=" p-5">
            <form action="" method="post">
            <div className=" font-bold">
                <label htmlFor="name">First name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='first_name'
                 required
                 placeholder='First Name'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold">
                <label htmlFor="name">Last name <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='last_name'
                 required
                 placeholder='Last Name'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


            <div className=" font-bold">
                <label htmlFor="telephone/mobile">Telephone/mobile <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='Telephone/mobile'
                 required
                 placeholder='Telephone/mobile'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>

            <div className=" font-bold">
                <label htmlFor="email">Email <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="Email"
                 name='Telephone/mobile'
                 required
                 placeholder='Your Email'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


            <div className=" font-bold">
            <label htmlFor="email">Your full address <span className=' text-[red]'>*</span></label>
                <CustomInput
                 type="text"
                 name='address'
                 required
                 placeholder='Your full address'
                 className='bb h-[50px] w-[100%]  bg-[transparent] rounded-[10px]'
                
                />
            </div>


           



        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">City<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="text"
                    name="city"
                     required 
                    placeholder= 'Your City'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Postal code</label> <br />
                <CustomInput
                     type="text"
                     name="Postal_code"
                     required  
                    placeholder= 'Your Postal code'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>

        <div className=" min-h-[100px] w-full bg-[] grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className=" bg-[] font-bold space-y-2">
                <label htmlFor="">Delivery Day<span className=' text-[red]'>*</span></label> <br />
                <select className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]' required  name="" id="">
                    <option value="">Select Day</option>
                    <option value="">Today</option>
                    <option value="">Tomorrow</option>
                </select>
                {/* <CustomInput
                     type="text"
                    name="city"
                     required 
                    placeholder= 'Your City'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                /> */}
            </div>
            <div className=" bg-[] font-bold space-y-2">
            <label htmlFor="">Delivery Time<span className=' text-[red]'>*</span></label> <br />
                <CustomInput
                     type="time"
                     name="time"
                    //  required  
                    // placeholder= 'Your Postal code/'
                     className='bb h-[50px] w-[90%] bg-[transparent] rounded-[5px]'

                />
            </div>
        </div>
        <CustomInput
                     type="submit"
                    //  name="/"
                    //  required  
                    // placeholder= 'Your Postal code/'
                     className='bb h-[40px] w-[90%] bg-[] rounded-[10px] lg:ml-3 hover:bg-[#5F8670] cursor-pointer'

                />

            </form>
           </div>


        </div>

        <div className=" bg-red-400">
            Display all the product in cart here
            {/* <Cart/> */}
        </div>
      
    </div>
  )
}

export default CheckoutForm2
