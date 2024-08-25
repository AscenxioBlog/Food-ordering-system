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
    <main className=' flex gap-2 mt-[50px]'>
      <nav className=' w-[15%] bg-emerald-400 sticky top-[0px]'>
        <h1 className=' text-2xl text-center font-bold font-[cursive]'>Filter</h1>
      </nav>
      <div className=' h-[inherit] overflow-scroll flex-1 bg-slate-600 grid gap-2 grid-cols-3 p-3'>
      {
        holddata? 
        holddata.map((item)=>(
          <>
          <div className=' bg-[grey] rounded-t-[20px] h-[200px] mb-2'>
            <section className=' h-[70%]'>
              <img src={`http://localhost:5100${item.image}`} className=' rounded-t-[10px] h-[100%]'/>
            </section>
            <h2 >{item.name}</h2>
            <p>{item.address}</p>
          </div>
          
          </>
          
        )) : <p>Poor network...loading</p>
      }
      
    </div>
    </main>
    
    

  )
}

export default Restaurant1Component
