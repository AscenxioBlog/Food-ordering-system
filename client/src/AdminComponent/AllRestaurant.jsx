import React, { useEffect, useState } from 'react'
import { BsTrashFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

function AllRestaurant() {
  let [restaurantData,setRestaurantData] = useState(null);

  useEffect(()=>{
    fetch('http://localhost:5000/api/allrestaurants')
      .then(res=>res.json())
      .then(json=>setRestaurantData(json))
      .catch(err=>console.log(err.message))
  },[])

  return (
    <div className=' bg-gray-800 w-full h-[100vh] p-8 overflow-y-scroll'>
      <table className=' w-[80%] border-[2px] border-solid border-emerald-600 text-center text-white'>
        <thead>
          <tr className=' border-[2px] border-dotted border-emerald-600'>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Image</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Restaurant Name</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Rating</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Food types</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Address</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Edit</th>
            <th className=' border-[1px] border-dotted border-emerald-600 '>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            restaurantData ? 
            restaurantData.map(item=>(
              <tr className='border-[2px]'>
                <td className=' border-[1px] border-dotted border-emerald-600 py-3 pl-5 w-[13%]'>
                  <img src={`http://localhost:5000/${item.image}`} className=' h-[50px] w-[80px] rounded-xl'/>
                </td>
                <td className=' border-[1px] border-dotted border-emerald-600 text-[20px] font-bold w-[20%]'>{item.name}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 '>{item.rating}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[30%]'>{item.food_types.toString()}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[20%]'>{item.address}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[9%] cursor-pointer'><FaRegEdit className=' inline'/></td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[20%] cursor-pointer'><BsTrashFill className=' inline'/></td>
              </tr>
            ))
            
            : 
            <tr>
              <td>Restaurants loading...</td>
            </tr> 
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default AllRestaurant
