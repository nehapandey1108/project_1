import React from "react";
import Image from "next/image";
import pic from "../public/candra-winata-CYOFvtpOIpU-unsplash.jpg";
export const Todo = () => {
  return (
    <div>
      {/* <div className='flex min-h-screen items-center justify-center overflow-hidden bg-slate-100 '>
            <div className="group h-96 w-80 [perspective:1000px]">
                <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500[transform-style:preserve-3d]group-hover:[transform:rotateY(180deg)]'>
                    <div className="absolute inset-0">
                    <Image className=' h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={pic} alt=''/>
                    </div>
                    <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200[transform:rotateY(180deg)][backface-visibility:hidden]'>
                        <div className='flex min-h-full flex-col items-center justify-center'>
                            <h1 className='text-3xl font-bold'> Alpha</h1>
                            <p className="text-lg">web Developer</p>
                            <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                            <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900 ">Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

      {/* <div className='flex min-h-screen items-center justify-center overflow-hidden bg-slate-100'>
    <div className="group h-96 w-80 perspective-1000">
        <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-style-preserve-3d group-hover:transform-rotate-y-180'>
            <div className="absolute inset-0">
                <Image className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' src={pic} alt=''/>
            </div>
            <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 transform-rotate-y-180 backface-visibility-hidden'>
                <div className='flex min-h-full flex-col items-center justify-center'>
                    <h1 className='text-3xl font-bold'> Alpha</h1>
                    <p className="text-lg">Web Developer</p>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur.</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                </div>
            </div>
        </div>
    </div>
</div> */}

      {/* <div className='pt-20 ml-10'>
<div className=" flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <Image src={pic}alt="Avatar" className="width:300px;height:300px;"/>
    </div>
    <div className="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

</div> */}
      <div className="pt-20 ml-10 rounded-xl">
        <div className="flip-card relative  rounded-xl">
          <div className="flip-card-inner absolute w-full h-full rounded-xl">
            <div className="flip-card-front bg-gray-200 rounded-xl">
              <Image
                src={pic}
                alt="Avatar"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flip-card-back  w-full h-full rounded-xl  pl-6  ">
              <h1 className="title text-sm font-bold    pt-14 pl-6 ">
                TITLE
              </h1>
              <p className="cycling text-md pl-6">cycling Task</p>
              <div className="note-div rounded-lg pl-2 pt-2 mt-4 ml-4 mx-8  ">
            <div className="note border rounded-3xl w-16  ">
              <p className=" pl-2 ">Note </p>
            </div>

            <p className="text-and-tags mt-2 ml-0 font-thin  text-sm">
              Lorem ipsum dolor sit. Lorem ipsum dolor,
            </p>
          </div>
            </div>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};
