import React from 'react'
import Image from 'next/image';
import card5 from'../public/people-2591874_1280 (2).jpg';
const Cards = () => {
    return (
        <div className=''>

            <div className='relative h-72 w-2/6  text-center rounded-3xl'>
                
                    <Image className='  rounded-3xl' src={card5} alt="taste" />
                <div className=' absolute mt-0 z-10'>
                    <h2 className='flex justify-start bg-blac ml-6 '>Mission 2</h2>
                    {/* <div className='  place content-end inset-y-0  bg-slate-500' >₹ 0</div> */}
                    
                    <p className='flex justify-normal ml-6'>Lorem, ipsum dolor.</p>
                    <div className='  mb-2 px-4  ml-2  bg-gray-500  w-72 rounded-lg'>
                 <h4 className='flex justify-start'>❒&nbsp;5 Challenges  &nbsp; &nbsp; &nbsp; <span> ☑️ &nbsp;5 Tasks</span></h4>
                 </div>
                       

                    
                </div>
            </div>

        </div>
    );
}

export default Cards