import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import CustomInput from '../ReusableComponent/MyInput/CustomInput'

function AddMenu() {
    var [allRestaurant, setAllrestuarant]= useState('')

    useEffect(()=>{
        fetch("http://localhost:5000/api/restaurants")
        .then((res) => res.json())
        .then((json) => setAllrestuarant(json));
    }, [])
  return (
    <div>
     <div className=' bg-[#E7F0DC] w-full min-h-[100vh] flex justify-center items-center'>
            {/* <div className=" w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" >
                <h2>Added Successfully</h2>
            </div> */}

            <div className=" min-h-[90vh] w-full lg:w-[80%] pl-[20px] md-pl-[40px] lg:pl-[100px]">
                <form action="http://localhost:5000/add" method='post' encType="multipart/form-data">
                    


                    <div className="">
                        <select name="restaurant" id="">
                            <option value="">Select Restaurant</option>
                            {
                                allRestaurant? (
                                    allRestaurant.map((restaurant) => (
                                        <option key={restaurant._id} value={restaurant._id}>
                                            {restaurant.name.charAt(0).toUpperCase() + 
                                            restaurant.name.slice(1)}
                                        </option>
                                    ))
                                ): (
                                    <option >Loading</option>
                                )
                            }
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="food-name">Food Name</label> <br />
                        <CustomInput
                            type="text"
                            name='name'
                            required
                            className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2'
                        />
                    </div> <br />

                    
                    
                    <div className="">
                        <label htmlFor="restaurant-image">Food Image</label> <br />
                        <CustomInput
                            type="file"
                            name='image'
                            required
                            className=' h-[40px] w-[80%]'
                        />
                    </div> <br />

         


                    <div className="">
                        <label htmlFor="description">Description</label> <br />
                        <textarea
                            name="food_description"
                            className=' h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'
                        ></textarea>
                    </div> <br />

                    <div className="">
                        <label htmlFor="rating">Food Price</label>
                        <CustomInput
                            type="number"
                            name='price'
                            required
                            className=' h-[40px] w-[40%] rounded-[20px] bg-[#80808060] pl-2'
                        />
                    </div><br />

                   

                    <button type="submit" className=' h-[40px] w-[90%] bg-orange-500 rounded-[20px]'>Add Menu</button>
                </form>
            </div>
        </div>      
    </div>
  )
}

export default AddMenu
