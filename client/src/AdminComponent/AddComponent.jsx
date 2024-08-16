import React , { useState }  from 'react'

function AddComponent() {
    let [divdown,setDivdown] = useState(false)

    let box = divdown? {top:"0%"}:{top:"-10%"}

    function move() {
        setDivdown(true)
        setTimeout(() => {
            setDivdown(false)
        }, 2000);
    }

  return (
<<<<<<< HEAD
    <div className=' bg-[#E7F0DC] w-full min-h-[100vh] flex justify-center items-center mt-[30px]'>

        <div className=" min-h-[90vh] w-full lg:w-[80%] bg-[] pl-[20px] md-pl-[40px] lg:pl-[100px]">
            <form action="localhost:5000/add" method='post'>
=======
    <div className=' bg-blue-700 w-full min-h-[100vh] flex justify-center items-center'>
        <div className=" w-[max-content] bg-[#f3f9d2] p-3 absolute rounded-lg left-[50%] right-[50%] transition-[1s]" style={box}>
            <h2>Added Successfully</h2>
        </div>

        <div className=" min-h-[90vh] w-full lg:w-[80%] bg-fuchsia-500 pl-[20px] md-pl-[40px] lg:pl-[100px]">
            <form action="http://localhost:5000/add" method='post' onSubmit={move} encType="multipart/form-data">
>>>>>>> 34215d88caa6c4191a772f25cee62d81f2e917b2
                
            <div className="">
                <label htmlFor="">Restaurant Name</label> <br />
                <input type="text" name='name' required className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2' />
            </div> <br />

            <div className="">
                <label htmlFor="">Address</label> <br />
                <textarea name="address" required className=' h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
            </div> <br />
            

            <div className="">
                <label htmlFor="">Restaurant Image</label> <br />
                <input type="file" name='image' required  className=' h-[40px] w-[80%]'/>
            </div> <br />

            <div className="">
                <fieldset className=' h-[200px] w-full lg:w-[80%] ' style={{border:'2px solid black'}}>
                    <legend>Food Types</legend>

                   <div className=" h-[180px] grid grid-cols-3">
                   <span>
                        <input type="checkbox" name="food_types" value="pizza"/>
                        <label htmlFor="">Pizza</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="ice-cream"/>
                        <label htmlFor="">Ice Cream</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="pastries"/>
                        <label htmlFor="">Pastries</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="local-food"/>
                        <label htmlFor="">Local Food</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="chinese"/>
                        <label htmlFor="">Chinese</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="burgers"/>
                        <label htmlFor="">Burgers</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="jollof-rice"/>
                        <label htmlFor="">Jollof Rice</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="fried-rice"/>
                        <label htmlFor="">Fried Rice</label>
                    </span>

                    <span>
                        <input type="checkbox" name="food_types" value="pasta"/>
                        <label htmlFor="">Pasta</label>
                    </span>
                   </div>
                </fieldset>

            </div> <br />

            <div className="">
                <label htmlFor="">Opening Hour</label> <br />
                <input type="time" name="opening_time" required/> <span>To</span> <input type="time" name="closing_time" required/>
            </div> <br />

            <div className="">
                <label htmlFor="">Description</label> <br />
                <textarea name="description" className=' h-[200px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
            </div> <br />

            <div className="">
                <label htmlFor="">Rating</label>
                <input type="number" name='rating' min="1" max="5" required className=' h-[40px] w-[40%] rounded-[20px] bg-[#80808060] pl-2' />
            </div><br />

<<<<<<< HEAD
            <div className="">
                <button type="submit" className=' h-[40px] w-[90%] bg-orange-500 rounded-[20px] font-bold'>Add Restaurant</button>
            </div>
=======
                <button type="submit" className=' h-[40px] w-[90%] bg-orange-500 rounded-[20px]' >Add Restaurant</button>
>>>>>>> 34215d88caa6c4191a772f25cee62d81f2e917b2
            </form>
        </div>
    </div>
  )
}

export default AddComponent
