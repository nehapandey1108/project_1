import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel/Carousel';
import { BackgroundGradientDemo } from '../components/cards_slider';

import Image from 'next/image';

import card1 from '../public/card1.svg';
import card2 from '../public/card2.svg';
import card3 from '../public/card3.svg';
import card4 from '../public/card4.svg';
import card5 from '../public/people-2591874_1280 (2).jpg'
import Cards from '../components/Cards';
//import cards6 from '../components/cards_slider'
const imagesItems = [
  <Image className="h-full w-full" src={card1} alt="teste" />,
  <Image className="h-full w-full" src={card2} alt="teste" />,
  <Image className="h-full w-full" src={card3} alt="teste" />,
  <Image className="h-full w-full" src={card4} alt="teste" />,
  // <Image className="h-full w-full" src={card5} alt="teste" />,
  <Image className="h-full w-full" src={card1} alt="teste" />,
];

const Home: NextPage = () => {
  return (
    <div>
     <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>Animated Gradients</title>
        {/* <link rel="icon" href="favicon.ico" /> */}
      </Head>
    {/* <Header /> */}
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-10 flex flex-col  justify-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">Beautiful animated gradients</h1>
          
        </div>
        <Carousel items={imagesItems} />
       
      </main>
      
    {/* <Cards/> */}
      <BackgroundGradientDemo/>
      

      </div>
    </div>
  );
};

export default Home;
