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
                className="w-48 h-48 object-cover rounded-xl  ml-12 my-6 "
              />
               <h1 className="cycling font-bold flex justify-center text-2xl ">CYCLING</h1>
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
