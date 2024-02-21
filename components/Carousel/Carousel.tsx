import React, { useState, useEffect } from "react";

import CarouselItem from "./CarouselItem";
import CarouselIndicator from "./CarouselIndicator";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slider1 } from "../sliders/slider1";

export interface CarouselProps {
  width?: number;
  height?: number;
  items: React.ReactNode[];
}

export default function Carousel({ width, height, items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextItemBtn();
    }, 1000); // Change the interval time as per your requirement (5000 milliseconds = 5 seconds)

    return () => clearInterval(interval);
  }, [activeIndex]); // Run effect whenever activeIndex changes

  return (
    <div className="carousel-container">
      <IoIosArrowBack className="carousel-control" onClick={handlePrevItemBtn} />
      
      {items?.map((item, index) => (
        <CarouselItem key={index} index={index} activeIndex={activeIndex}>
          {item}
        </CarouselItem>
      ))}

      <IoIosArrowForward className="carousel-control" onClick={handleNextItemBtn} />

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
}
