import React, { useEffect ,useState } from 'react'


function Restaurant1Component() {
  let [holddata,setHolddata] = useState('')

  useEffect(()=>{
    fetch("http://localhost:5000/api/restaurants")//fetched from my server
        .then((response)=>response.json()) //convert the response to json. (the response can be anything)
        .then(json=>setHolddata(json)) //(then pass the converted data into a useState)
        .catch(err=>console.log(err)) // if there is any error

  },[])//Array of dependecies because we need the data to  be fetched only once.

  return (
    <div className=' min-h-[700px] bg-slate-600 grid grid-cols-3'>
      {
        holddata? 
        holddata.map((item)=>(
          <>
          <div>
            <h2 >{item.name}</h2>
            <img src={item.image} width={300} className=' rounded-xl'/>
            <p>{item.address}</p>
          </div>
          
          </>
          
        )) : <p>Poor network...loading</p>
      }
      
    </div>
    // <div className=' bg-teal-300 h-full w-full'>
    //   <div className=" mt-[120px] min-h-[500px] w-[95%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //   <div className=" h-[500px]  bg-white flex flex-col items-center ">
    //             <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
    //             <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[410px] bg-red-800 ">
    //               <img src="" alt="" />
    //             </div>
    //             <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
    //               <div className=" bg-[] flex flex-col justify-center pl-2">
    //                 <h1 className=' font-bold text-[17px] mb-1'>Jollof & Co</h1>
    //                 <p>Everyday Naija favourites</p>
    //               </div>
    //               <div className=" bg-[] flex justify-center items-center text-[18px]">
    //                 <span className=' text-[#FF5A3C]'><u><a href="">View More</a></u></span>
    //               </div>
    //             </div>
    //             </div>
    //         </div>


    //         <div className=" h-[500px]  bg-white flex flex-col items-center ">
    //             <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
    //             <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[410px] bg-red-800 ">
    //               <img src="" alt="" />
    //             </div>
    //             <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
    //               <div className=" bg-[] flex flex-col justify-center pl-2">
    //                 <h1 className=' font-bold text-[17px] mb-1'>Jollof & Co</h1>
    //                 <p>Everyday Naija favourites</p>
    //               </div>
    //               <div className=" bg-[] flex justify-center items-center text-[18px]">
    //                 <span className=' text-[#FF5A3C]'><u><a href="">View More</a></u></span>
    //               </div>
    //             </div>
    //             </div>
    //         </div>


    //         <div className=" h-[500px]  bg-white flex flex-col items-center ">
    //             <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
    //             <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[410px] bg-red-800 ">
    //               <img src="" alt="" />
    //             </div>
    //             <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
    //               <div className=" bg-[] flex flex-col justify-center pl-2">
    //                 <h1 className=' font-bold text-[17px] mb-1'>Jollof & Co</h1>
    //                 <p>Everyday Naija favourites</p>
    //               </div>
    //               <div className=" bg-[] flex justify-center items-center text-[18px]">
    //                 <span className=' text-[#FF5A3C]'><u><a href="">View More</a></u></span>
    //               </div>
    //             </div>
    //             </div>
    //         </div>
    //   </div>
      
    // </div>
  )
}

export default Restaurant1Component
