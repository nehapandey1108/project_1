import React from "react";
import Image from "next/image";
import pic from "../public/candra-winata-CYOFvtpOIpU-unsplash.jpg";
import pic1 from "../public/illustrationsforcard/Cycling.png";
export const Todo = () => {
  return (
    <div>
   
      <div className="pt-20 ml-10 rounded-xl">
        <div className="flip-card relative  rounded-xl">
          <div className="flip-card-inner absolute w-full h-full rounded-xl">
            <div className="flip-card-front bg-gray-200 rounded-xl"> 
              <Image
                src={pic1}
                alt="Avatar"
                className="w-40 h-40 object-cover rounded-xl  ml-12   mt-6"
              />
               <h1 className=" pt-1 cycling  flex justify-center text-3xl font-extrabold  ">CYCLING</h1>
            </div>
            <div className="flip-card-back  w-full h-full rounded-xl  pl-6  ">
              <h1 className="title text-sm font-bold    pt-14 pl-6 ">
                RUNNING
              </h1>
              <p className="cycling text-sm pl-6">cycling Task</p>
              <div className="note-div rounded-lg pl-2 pt-1 mt-4 ml-4 mx-8 mb-18  ">
              <div className="badge text-sm py-3  border-0 rounded-4xl">Note</div>
            
               <textarea className=" textarea h-full overflow-y-auto  mt-2 ml-0   text-sm overflow-hidden text-and-tags w-full  font-medium ">
                 A lazy frog jump over the sand  dunes.
              </textarea>
            


          </div>
            </div>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};
