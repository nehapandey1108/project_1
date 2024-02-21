import React, { useState } from 'react';

export interface CardProps {
  index: number;
  activeIndex: number;
  children?: React.ReactNode;
  
}

export default function CarouselItem({ index, activeIndex, children }: CardProps) {
  
  const offset = (index- activeIndex) /4;
  const direction = Math.sign(index- activeIndex );
  const absOffset = Math.abs(offset);

  const cssTransformProperties = `
        rotateY(calc(${offset} * 55deg))
        scaleY(calc(1 +  ${absOffset}  * -0.5))
        translateX(calc( ${direction} * -3.5rem))
        translateZ(calc( ${absOffset} * -35rem))
       
       `;

  const cssOpacity = `
        ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

  const cssDisplay = `
        ${Math.abs(index - activeIndex) >= 3 ? 'none' : '1'},
  `;


  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
       
      }}
      onClick={() => {
       
      }}
    >
      {children}
    </div>
  );
}
// export default function CarouselItem({ index, activeIndex, children, itemsLength }: CardProps) {
  
//   const offset = ((index - activeIndex) % itemsLength) / 4; // Calculate offset with modulus to wrap around
//   const direction = Math.sign(index - activeIndex);
//   const absOffset = Math.abs(offset);

//   const cssTransformProperties = `
//     rotateY(calc(${offset} * 55deg))
//     scaleY(calc(1 +  ${absOffset}  * -0.5))
//     translateX(calc( ${direction} * -3.5rem))
//     translateZ(calc( ${absOffset} * -35rem))
//   `;

//   const cssOpacity = `
//     ${Math.abs(index - activeIndex) >= 3 ? '0' : '1'}`;

//   const cssDisplay = `
//     ${Math.abs(index - activeIndex) >= 3 ? 'none' : '1'},
//   `;

//   return (
//     <div className="carousel-item" style={{ transform: cssTransformProperties, opacity: cssOpacity, display: cssDisplay }}>
//       {children}
//     </div>
//   );
// }
