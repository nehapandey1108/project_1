import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from '../components/Carousel/Carousel';
import card14 from "../public/people-2591874_1280 (2).jpg"
import { Slider1 } from '../components/sliders/slider1';
import { Slider3 } from '../components/sliders/slider3';
import { Slider4 } from '../components/sliders/slider4';
import { Slider5 } from '../components/sliders/slider5';
import {Slider2 } from '../components/sliders/slider2';
// import card1 from '../public/card1.svg';
// import card2 from '../public/card2.svg';
// import card3 from '../public/card3.svg';
// import card4 from '../public/card4.svg';
// import Cards from '../components/Cards';
const imagesItems = [
 <Slider1 />,<Slider2/>,<Slider3/>,<Slider4/>,<Slider5/> 
  //  <Image className="h-full w-full" src={card1} alt="teste" />,
  // <Image className="h-full w-full" src={card2} alt="teste" />,
  // <Image className="h-full w-full" src={card3} alt="teste" />,
  // <Image className="h-full w-full" src={card4} alt="teste" />,
   //<Image className="h-full w-full" src={card1} alt="teste" />,
];

const Home: NextPage = () => {
  return (
    // <div>
     <div className="h-screen w-screen overflow-hidden bg-red-300  mt-96 mr-3">
      <main  className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
        <Carousel items={imagesItems} />
       
       
      </main> 
    {/* <Cards/> */}
 
    {/* <Carousel items={imagesItems} />
    <Carousel items={imagesItems} />
    <Carousel items={imagesItems} /> */}
                          
      {/* </div> */}
    </div>
  );
};

export default Home;
