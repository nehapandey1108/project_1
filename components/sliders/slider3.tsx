import React from 'react'
import Image from 'next/image'
import card13 from '../../public/johanser-martinez-ab65hzbQJJ0-unsplash.jpg'
export const Slider3 = () => {
  return (
  //   <div>   
  //         <div className="p-10 min-h-screen flex items-center justify-center rounded-3xl  bg-black">
  //   <div className="w-full max-w-2xl h- rounded-3xl shadow-2xl overflow-hidden relative ">
  //     <Image className="absolute inset-0 h-full w-full object-cover rounded-3xl" 
  //     src={card13} 
  //     alt="" />
  //     <div className="relative inset-0 bg-gray-900 bg-opacity-75 mt-72 py-4">
  //       <h2 className='px-8'>Advature</h2>
  //       <p className='px-8 text-xs '>Lorem ipsum dolor sit amet consectetur.
  //       <span className= "ml-72 mt-2 text-yellow-500 bg-gray-500 text-lg " >₹0</span>
  //       </p>
  //       <button className="bg-zinc-700 rounded text-[0.8rem] px-8 py-1 text-white  ml-8 mt-2">
  //         <span className='my-2 pr-2'> ❒ 5 Challenges </span>
  //         <span className=""> ☑️ 25 Task </span>
          
  //       </button>
  //       <span className=" ml-72 bg-gray-950  "> ⭐️⭐️⭐️⭐️⭐️</span>
  //       </div>
     
  //   </div>
  // </div>
  // </div>
   <div className="bg-white shadow-md rounded-lg overflow-hidden ">
      <Image src={card13} alt="Placeholder" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold">Card Title</h2>
        <p className="text-gray-600 mt-2">This is a description of the card.</p>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Button</button>
      </div>
    </div>
  );
}