import React, { useEffect, useState } from "react";
const imageBaseUrl = "http://localhost:5000"; // Base URL of your server

function Restaurant1Component() {
  let [holddata, setHolddata] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/restaurants") //fetched from my server
      .then((response) => response.json()) //convert the response to json. (the response can be anything)
      .then((json) => setHolddata(json)) //(then pass the converted data into a useState)
      .catch((err) => console.log(err)); // if there is any error
  }, []); //Array of dependecies because we need the data to  be fetched only once.

  return (
    // <div className=' min-h-[800px] bg-slate-600 grid grid-cols-3 gap-2 grid-rows-2'>
    //       {holddata ? 
    //       holddata.map((item) => (
    //         <> 
    //         <div>
    //         <img src={`${imageBaseUrl}${item.image}`} alt={item.name} />
    //           <h1>{item.address}</h1>
    //           <p>{item.name}</p>
    //         </div>
    //         </> 
            
    //       )):null }


    // </div>
    <div className=" bg-teal-300 h-full w-full">
      <div className=" mt-[120px] min-h-[500px] w-[95%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
    
    {holddata ? 
      holddata.map((item) => (
        <> 


<div className=" h-[500px]  bg-white flex flex-col items-center " >
                 <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
                   <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[380px] bg-red-800 ">
                    <img src={`${imageBaseUrl}${item.image}`} alt={item.name} />
                     {console.log(item.image)}
                   </div>
                   <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
                     <div className=" bg-[] flex flex-col justify-center pl-2">
                       <h1 className=" font-bold text-[17px] mb-1">
                         {item.name}
                       </h1>
                       <p>{item.address}</p>
                     </div>
                     <div className=" bg-[] flex justify-center items-center text-[18px]">
                       <span className=" text-[#FF5A3C]">
                         <a href="" className=" underline">
                           View More
                         </a>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
        {/* <div>
        <img src={`${imageBaseUrl}${item.image}`} alt={item.name} />
          <h1>{item.address}</h1>
          <p>{item.name}</p>
        </div> */}
        </> 
        
      )):null }
    
    
    
    
    
    
{/*     `
    
    {holddata ? (
           holddata.map((item) => (
             <>

               <div className=" h-[500px]  bg-white flex flex-col items-center " >
                 <div className=" border-[1px] border-[gray] rounded-[25px] overflow-hidden">
                   <div className=" h-[350px] w-[350px] md:w-[320px] lg:w-[380px] bg-red-800 ">
                     <img src={item.image} />
                     {console.log(item.image)}
                   </div>
                   <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
                     <div className=" bg-[] flex flex-col justify-center pl-2">
                       <h1 className=" font-bold text-[17px] mb-1">
                         {item.name}
                       </h1>
                       <p>{item.address}</p>
                     </div>
                     <div className=" bg-[] flex justify-center items-center text-[18px]">
                       <span className=" text-[#FF5A3C]">
                         <a href="" className=" underline">
                           View More
                         </a>
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
             </>
           ))
         ) : (
           <p>Poor network...loading</p>
         )}` */}
      </div>
    </div>
  );
}

export default Restaurant1Component;
