import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const imageBaseUrl = "http://localhost:5000"; // Base URL of your server
// import chickcat from "../Files/chickcat.png";
// import ricecat from "../Files/ricecat.png";
// import juicecat from "../Files/juicecat.png";
// import grillcat from "../Files/grillcat.png";
// import shawacat from "../Files/shawacat.png";
// import localcat from "../Files/localcat.png";
import CustomButton from "../../ReusableComponent/MyButton/CustomButton";
import RestuarantComponentPic from "./RestuarantComponentPic";

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
    
    <div className="">

<RestuarantComponentPic/>

<div className=" bg-[#E7F0DC] min-h-[100vh] w-full grid grid-cols-1 md:grid-cols-[20%,79%] gap-1 ">
      <div className="min-h-[40vh] md:h-full bg-[]  md:flex flex-col items-center">
        <h1 className=" text-[25px] font-bold text-center">
          EXPLORE CATEGORIES
        </h1>

        <div className="min-h-[40vh] md:h-[60vh] lg:min-h-[80vh] md:w-[80%] lg:w-[60%] bg-[] grid grid-cols-2 gap-5 md:grid-cols-1 mt-5">
          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime"
            borderRadius="35%"
            label="Local Food"
            className="md:rounded-[20px]" // Optional className for additional styling
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="pink"
            borderRadius="35%"
            label="Jollof Rice"
            className="md:rounded-[20px]"
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime-400"
            borderRadius="35%"
            label=" Ice Cream"
            className="md:rounded-[20px]"
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime-400"
            borderRadius="35%"
            label="Burger"
            className="md:rounded-[20px]"
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime-400"
            borderRadius="35%"
            label="Pasta"
            className="md:rounded-[20px]"
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime"
            borderRadius="35%"
            label="Chinese"
            className="md:rounded-[20px]"
          />

          <CustomButton
            height="40px"
            width="150px"
            // backgroundColor="lime-400"
            borderRadius="35%"
            label="Shawama"
            className="md:rounded-[20px]"
          />
        </div>
      </div>
      {/* <div className="h-[100vh] bg-red-800 "></div> */}
      <div className=" bg-[]">
        <div className=" h-[70px] w-full bg-[] flex justify-center items-center">
          <input
            type="text"
            name="search"
            id=""
            className=" h-[50px] w-[80%] bg-[] rounded-[40px] pl-2"
            placeholder="What did you need??"
          />
        </div>
        <div className=" min-h-[500px] w-[100%] bg-[] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-3">
          {holddata
            ? holddata.map((item) => (
                <>
                <Link to={`/menu/${item.name}/${item._id}`} key={item._id}>
                  <div className=" h-[300px]  bg-[white] flex flex-col items-center rounded-[20px] ">
                    <div className=" border-[1px] border-[gray] rounded-[25px] overflow-">
                      <div className=" h-[200px] w-[250px] md:w-[220px] lg:w-[280px] bg-red-800 mt-2 ">
                        <img
                          src={`${imageBaseUrl}${item.image}`}
                          alt={item.name}
                          height="100%"
                          width="100%"
                        />
                        {console.log(item.image)}
                      </div>
                      <div className=" h-[90px]  bg-[] grid grid-cols-[70%,30%]">
                        <div className=" bg-[] flex flex-col justify-center pl-2">
                          <h1 className=" font-bold text-[17px] mb-1">
                            {item.name}
                          </h1>
                          <p>{item.address}</p>
                        </div>
                        <div className=" bg-[] flex justify-center items-center text-[15px]">
                          <span className=" text-[#FF5A3C]">
                            <a href="" className=" underline">
                              View More
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                </>
              ))
            : null}

     
        </div>
      </div>
    </div>
    </div>
  );
}

export default Restaurant1Component;
















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