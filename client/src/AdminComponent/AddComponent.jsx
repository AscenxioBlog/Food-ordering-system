import React from 'react'

function AddComponent() {
  return (
    <div className=' bg-blue-700 w-full min-h-[100vh] flex justify-center items-center'>

        <div className=" min-h-[90vh] w-full lg:w-[80%] bg-fuchsia-500 pl-[20px] md-pl-[40px] lg:pl-[100px]">
            <form action="localhost:5000/add" method='post'>
                
            <div className="">
                <label htmlFor="">Restaurant Name</label> <br />
                <input type="text" required className=' h-[40px] w-[80%] rounded-[20px] bg-[#80808060] pl-2' />
            </div> <br />

            <div className="">
                <label htmlFor="">Address</label> <br />
                <textarea name="" id="" required className=' h-[150px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
            </div> <br />
            

            <div className="">
                <label htmlFor="">Restaurant Image</label> <br />
                <input type="file" required  className=' h-[40px] w-[80%]'/>
            </div> <br />

            <div className="">
                <fieldset className=' h-[200px] w-full lg:w-[80%] ' style={{border:'2px solid black'}}>
                    <legend>Food Types</legend>

                   <div className=" h-[180px] grid grid-cols-3">
                   <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Pizza</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Ice Cream</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Pastries</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Local Food</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Chinese</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Burgers</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Jollof Rice</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Fried Rice</label>
                    </span>

                    <span>
                        <input type="checkbox"  required/>
                        <label htmlFor="">Pasta</label>
                    </span>
                   </div>
                </fieldset>

            </div> <br />

            <div className="">
                <label htmlFor="">Opening Hour</label> <br />
                <input type="time" /> <span>To</span> <input type="time" />
            </div> <br />

            <div className="">
                <label htmlFor="">Description</label> <br />
                <textarea name="description" className=' h-[200px] w-[80%] rounded-[20px] bg-[#80808060] pl-3 pt-2'></textarea>
            </div> <br />

            <div className="">
                <label htmlFor="">Rating</label>
                <input type="text" className=' h-[40px] w-[40%] rounded-[20px] bg-[#80808060] pl-2' />
            </div><br />

            <div className="">
                <button type="submit" className=' h-[40px] w-[90%] bg-orange-500 rounded-[20px]'>Add Restaurant</button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default AddComponent
