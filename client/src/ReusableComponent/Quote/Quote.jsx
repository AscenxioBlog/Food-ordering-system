import React, { useEffect, useState } from 'react'

// Updated quotes array to include both quote and author
const quotes = [
    { text: "I have not failed. I’ve just found 10,000 ways that won’t work.", author: "Hassan Ascenxio"},
    { text: "The best way to predict the future is to invent it.", author: "OMA EGE" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { text: "The words impossible is not in my dictionary. I will give it a try first", author: "Chef Code Arnold"},
    { text: 'I am so clever that sometimes I don’t understand a single word of what I am saying🤣', author: 'Hassan Ascenxio'},
  ];
function Quote() {
    const [quote, setQuote] = useState(quotes[0]);

 

  useEffect(()=>{
    // var setspeech = setInterval(() => {
    //     const generateQuote = () => {
    //         const randomIndex = Math.floor(Math.random() * quotes.length);
    //         setQuote(quotes[randomIndex]);
    //       };
    // }, 1000);

    const setspeech = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
      }, 4000); // Changes quote every second
  
    return ()=> clearInterval(setspeech)
  },[])

  return (
    <div>
        {/* “I am so clever that sometimes I don’t understand a single word of what I am saying.” —Oscar Wilde */}
          {/* <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <p className="text-xl font-semibold mb-4">{quote}</p>
        <button
          onClick={generateQuote}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          New Quote
        </button>
      </div>
    </div> */}

<div className=" h-[450px] w-full flex justify-center items-center">
        <div className=" h-[400px] w-[70%] bg-[#E7F0DC] rounded-[30px] flex flex-col justify-center items-center p-[20px]">
          <h1 className=' text-[20px] font-bold mb-6 lg:text-[30px] text-[#5F8670] ' style={{textShadow:'0px 7px 5px orangered'}}>{quote.author}</h1>
          <p className=' text-[20px] font-semibold'>{quote.text}</p>
        </div>
      </div>
  


    </div>
  )
}

export default Quote