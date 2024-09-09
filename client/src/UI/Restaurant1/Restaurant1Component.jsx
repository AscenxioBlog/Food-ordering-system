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
import CustomInput from "../../ReusableComponent/MyInput/CustomInput";

function Restaurant1Component() {
  let [holddata, setHolddata] = useState("");
  let [foodtypes, setFoodtypes] = useState([]);
  let [selectedfoodtypes, setSelected] = useState([]);
  const [searchQuery, setSearchquery] = useState("");

  const forFoodtypes = (foodchoice) => {
    setSelected((prev) => (prev === foodchoice ? "" : foodchoice));
    console.log("Selected Food Type:", selectedfoodtypes);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/food-types")
      .then((res) => res.json())
      .then((data) => setFoodtypes(data))
      .catch((err) => console.log(`Error:${err}`));
  }, []);

  useEffect(() => {

    let query = new URLSearchParams();

    if (selectedfoodtypes) {
      query.append("foodtype", selectedfoodtypes);
    }

    if (searchQuery) {
      query.append("search", searchQuery);
    }
    console.log("Query String:", query.toString());

    fetch(`http://localhost:5000/api/restaurants?${query.toString()}`) //fetched from my server
      .then((response) => response.json()) //convert the response to json. (the response can be anything)
      .then((json) => setHolddata(json)) //(then pass the converted data into a useState)
      .catch((err) => console.log(err)); // if there is any error
  }, [selectedfoodtypes, searchQuery]); //Array of dependecies because we need the data to  be fetched only once.

  return (
    <div className="">
      <RestuarantComponentPic />

      <div className=" bg-[#E7F0DC] min-h-[100vh] w-full grid grid-cols-1 md:grid-cols-[20%,79%] gap-1 ">
        <div className="min-h-[40vh] md:h-full bg-[]  md:flex flex-col items-center">
          <h1 className=" text-[25px] font-bold text-center">
            EXPLORE CATEGORIES
          </h1>

          <div className="min-h-[40vh] md:h-[60vh] lg:min-h-[80vh] md:w-[80%] lg:w-[60%] bg-[] grid grid-cols-2 gap-5 md:grid-cols-1 mt-5">
            <ul className=" leading-[45px]">

          {foodtypes ? (
            foodtypes.map((foodtype, index) => (
              <li
                key={index}
                className=" hover:ml-1 transition-all duration-300 hover:font-bold"
              >
                 <CustomButton
                    height="40px"
                    width="150px"
                    // backgroundColor="lime"
                    borderRadius="35%"
                    label={foodtype.charAt(0).toUpperCase() + foodtype.slice(1)}
                    className="md:rounded-[20px]" // Optional className for additional styling
                    onClick={() => forFoodtypes(foodtype)}
                  />
              </li>
            ))
          ) : (
            <p>Food types loading...</p>
          )}
            </ul>
          </div>

          {/* <div className="min-h-[40vh] md:h-[60vh] lg:min-h-[80vh] md:w-[80%] lg:w-[60%] bg-[] grid grid-cols-2 gap-5 md:grid-cols-1 mt-5">
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
          </div> */}
        </div>
        {/* <div className="h-[100vh] bg-red-800 "></div> */}
        <div className=" bg-[]">
          <div className=" h-[70px] w-full bg-[] flex justify-center items-center">
            <CustomInput
              type="text"
              name="search"
              id=""
              className="bb h-[50px] w-[80%] bg-[transparent] rounded-[40px]  pl-2"
              placeholder="What did you need??"
              value={searchQuery}
              onInput={(e) => setSearchquery(e.target.value)}
              // className=' h-[40px] w-[80%] rounded-[10px] bg-[transparent] pl-2'
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

{
  /*     `

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
 )}` */
}
