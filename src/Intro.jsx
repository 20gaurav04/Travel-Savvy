import React, { useEffect } from 'react';
import { Carousel } from 'flowbite-react';
import gsap from 'gsap';

import image1 from './assets/hawamahal.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

const Intro = () => {
  useEffect(() => {
    // GSAP animation for the overlay text
    gsap.from('.carousel-text', {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: 'power3.out',
      stagger: 0.5, // Stagger each text animation
    });
  }, []);

  return (
    <div className="mt-4 p-12">
      <div className="sm:h-64 xl:h-80 2xl:h-[550px]">
        <Carousel>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="carousel-text text-white text-8xl font-extrabold">Travel Savvy is Here!</h2>
            </div>
            <img className="object-cover w-full h-full" src={image1} alt="Hawa Mahal" />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35 flex items-center justify-center">
              <h2 className="carousel-text text-white text-7xl font-extrabold">Discover, Explore, and Experience</h2>
            </div>
            <img className="object-cover w-full h-full" src={image2} alt="Second Image" />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="carousel-text text-white text-7xl font-extrabold">Your Next Adventure Awaits Here!</h2>
            </div>
            <img className="object-cover w-full h-full" src={image3} alt="Third Image" />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center">
              <h2 className="carousel-text text-white text-7xl font-extrabold">Unforgettable Moments Await!</h2>
            </div>
            <img className="object-cover w-full h-full" src={image4} alt="Fourth Image" />
          </div>
        </Carousel>
      </div>
      
    </div>
  );
};

export default Intro;
