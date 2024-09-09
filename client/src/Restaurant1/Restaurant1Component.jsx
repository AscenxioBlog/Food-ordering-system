import React, { useEffect, useState } from "react";
// const imageBaseUrl = "http://localhost:5000"; // Base URL of your server
import chickcat from "../Files/chickcat.png";
import ricecat from "../Files/ricecat.png";
import juicecat from "../Files/juicecat.png";
import grillcat from "../Files/grillcat.png";
import shawacat from "../Files/shawacat.png";
import localcat from "../Files/localcat.png";

function Restaurant1Component() {
  let [holddata, setHolddata] = useState("");
  let [foodtypes, setFoodtypes] = useState([]);
  let [selectedfoodtypes, setSelected] = useState([]);
  const [searchQuery, setSearchquery] = useState("");

  const forFoodtypes = (foodchoice) => {
    setSelected((prev) => (prev === foodchoice ? "" : foodchoice));
    console.log("Selected Food Type:", selectedfoodtypes);
    // setSelectedfood((prev) =>
    //   checked ? [...prev, value] : prev.filter((type) => type !== value)
    // );
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

    fetch("http://localhost:5000/api/restaurants") //fetched from my server
      .then((response) => response.json()) //convert the response to json. (the response can be anything)
      .then((json) => setHolddata(json)) //(then pass the converted data into a useState)
      .catch((err) => console.log(err)); // if there is any error
  }, [selectedfoodtypes, searchQuery]); //Array of dependecies because we need the data to  be fetched only once.

  return (
    <main className=" flex gap-2 mt-[50px]">
      <nav className=" w-[15%] bg-emerald-400 sticky top-[0px] flex flex-col pt-[30px] items-center">
        <h1 className=" text-2xl text-center font-bold font-[cursive]">
          Filter
        </h1>
        <ul className=" leading-[45px]">
          {foodtypes ? (
            foodtypes.map((foodtype, index) => (
              <li
                key={index}
                className=" hover:ml-1 transition-all duration-300 hover:font-bold"
              >
                <button onClick={() => forFoodtypes(foodtype)}>
                  {foodtype.charAt(0).toUpperCase() + foodtype.slice(1)}
                </button>
              </li>
            ))
          ) : (
            <p>Food types loading...</p>
          )}
        </ul>
      </nav>
      <div className=" h-[inherit] flex-1 bg-slate-600 p-3">
        <div className=" flex justify-center mb-4">
          <input type="search" className=" p-2 rounded-lg w-[50%] placeholder:font-bold placeholder:text-black placeholder:text-[13px] " placeholder="thou cravest for...?"/>
        </div>
        <div className=" grid gap-2 grid-cols-3">
          {holddata ? (
            holddata.map((item) => (
              <>
                <div className=" bg-[grey] rounded-t-[20px] h-[200px] mb-2">
                  <section className=" h-[70%]">
                    <img
                      src={`http://localhost:5000${item.image}`}
                      className=" rounded-t-[10px] h-[100%]"
                    />
                  </section>
                  <h2>{item.name}</h2>
                  <p>{item.address}</p>
                </div>
              </>
            ))
          ) : (
            <p>Poor network...loading</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default Restaurant1Component;
