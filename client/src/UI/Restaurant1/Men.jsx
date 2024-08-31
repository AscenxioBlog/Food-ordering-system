import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


function Men() {
    let [holdmenu,setHoldmenu] = useState('')
    let {restaurantname,restaurantid} = useParams()
  
    useEffect(()=>{
      fetch(`http://localhost:5000/menu/${restaurantid}`)
          .then(res=>res.json())
          .then(json=>console.log(json))
          .catch(err=>console.log(err))
    },[])
  return (
    <div className=' h-[200px] mt-[100px] bg-yellow-800'>
      <h1>{restaurantname}</h1>
    </div>
  )
}

export default Men
