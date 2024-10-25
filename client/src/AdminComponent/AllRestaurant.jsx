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


  const deleteRestaurant = (id) => {
    fetch(`http://localhost:5000/admin/allrestaurants/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then((json) => {
        // console.log(json)
        // Update the restaurantData state to remove the deleted restaurant
        setRestaurantData(prevData => prevData.filter(restaurant => restaurant.id !== id));
      })
      .catch(err => console.log(err.message));
  };

  const fetchRestaurantById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/restaurants/${id}`);
      const data = await response.json();
      setRestaurantData(data); // Set the fetched restaurant data to prefill the form
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };
  

  return (
    <div className=' h-full p-8  flex justify-center items-center overflow-x-scroll'>
      
      <table className=' text-[#5F8670] lg:inline-block w-[90%] border-[2px] border-solid border-emerald-600 text-center '>
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
                <td className=' border-[1px] border-dotted border-emerald-600 py-3 pl-5 w-[15%]'>
                  <img src={`http://localhost:5000/${item.image}`} className=' h-[50px] w-[80px] rounded-xl'/>
                </td>
                <td className=' border-[1px] border-dotted border-emerald-600 text-[20px] font-bold w-[20%]'>{item.name}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 '>{item.rating}⭐</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[30%]'>{item.food_types.toString()}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[20%]'>{item.address}</td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[9%] cursor-pointer  hover:text-blue-600 transition-all duration-500'><FaRegEdit className=' inline'/></td>
                <td className=' border-[1px] border-dotted border-emerald-600 w-[20%] cursor-pointer hover:text-red-600 transition-all duration-500' onClick={()=>deleteRestaurant(item._id)}><BsTrashFill className=' inline ' /></td>
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
