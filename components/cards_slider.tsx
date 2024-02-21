"use client";
import React from "react";

import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";
import  card5  from "../public/people-2591874_1280 (2).jpg";
export function BackgroundGradientDemo() {
  return (
    <div className="mx-96">
      <BackgroundGradient className="rounded-[22px] max-w-4xl   p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={card5}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain w-full h-full "
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Sun rise 
          <span className= "ml-96 pl-1 text-yellow-500 bg-gray-500 m-auto" >₹ 0</span>
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
    <span className=" pl-24 "> ⭐️⭐️⭐️⭐️⭐️</span>
        
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span> ❒ 5 Challenges </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            ☑️ 25Task
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
