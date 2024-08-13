import React, { useReducer, useState } from 'react'
import { CgAdd } from "react-icons/cg";
import { IoIosAddCircle } from "react-icons/io";

function FaqsComponent2() {

    var [Tall1,setTall1] = useState('70px')
    var [Tall2,setTall2] = useState('70px')




    var [rotat,setRotate] = useState(0)
    var [rotat2,setRotate2] = useState(0)

   
  return (
    <div className=' h-[100vh] w-full bg-[#E7F0DC] flex justify-center'>
        <div className=" h-[100vh] w-[90%] bg-amber-950">

        <div className=" w-full bg-red-400 overflow-hidden" style={{minHeight:Tall1, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[cadetblue] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall1 == '70px') {
                    setTall1('200px')
                    setTall2('70px')



                    setRotate2('0deg')
                    setRotate('140deg')

                   } else {
                    setTall1('70px')
                    setRotate('0deg')

                    
                   }
                }
            }>What is FeedMe?  <span style={{ transform: `rotate(${rotat})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>FeedMe is an on-demand convenience app that lets you order from a curation of the best food delivery brands & shops. Now you can order jollof rice, a burger, pounded yam & a bottle of wine all in a single order!</p>
        </div>


        <div className=" w-full bg-red-400 overflow-hidden" style={{minHeight:Tall2, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[cadetblue] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall2 == '70px') {
                    setTall2('200px')
                    setTall1('70px')


                    setRotate('0deg')
                    setRotate2('140deg')


                   } else {
                    setTall2('70px')
                    setRotate2('0deg')

                    
                   }
                }
            }>How do I order?  <span style={{ transform: `rotate(${rotat2})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>Once you download FeedMe, you can place an order by simply tapping on the restaurant of your choice, selecting an item and clicking “Add to Basket” for Food. For Shop, simply visit the shop section on your bottom nav bar, then click on the blue + button to add items to your cart. Click “View Basket” to complete your order.</p>
        </div>


        <div className=" w-full bg-red-400 overflow-hidden" style={{minHeight:Tall2, transition:'1s'}}>
            <h1 className=' h-[70px] bg-[cadetblue] text-[20px] font-bold flex items-center justify-between' onClick={
                function () {
                   if (Tall2 == '70px') {
                    setTall2('200px')
                    setTall1('70px')

                   } else {
                    setTall2('70px')
                    
                   }
                }
            }>Can I order from different restaurants?  <span style={{ transform: `rotate(${rotat})`, transition:'1s' }}><IoIosAddCircle size={30} /></span></h1>
            <p className=' h-0'>Once you download FeedMe, you can place an order by simply tapping on the restaurant of your choice, selecting an item and clicking “Add to Basket” for Food. For Shop, simply visit the shop section on your bottom nav bar, then click on the blue + button to add items to your cart. Click “View Basket” to complete your order.</p>
        </div>
        </div>
       
    </div>
  )
}

export default FaqsComponent2
