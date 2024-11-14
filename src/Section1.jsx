import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import banner1 from './assets/banner.jpg';
import airTransport from './assets/air.jpg';
import railTransport from './assets/rail.jpg';
import roadTransport from './assets/road.jpg';

const Section1 = () => {
  // Refs for each animated element
  const headingRef = useRef(null);
  const taglineRef = useRef(null);
  const bannerImageRef = useRef(null);
  const transportImagesRef = useRef([]);

  useEffect(() => {
    // GSAP animation for the heading
    gsap.from(headingRef.current, {
      duration: 1.5,
      opacity: 0,
      x: -200,
      ease: 'power3.out',
    });

    // GSAP animation for the tagline
    gsap.from(taglineRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.5,
      ease: 'power3.out',
      delay: 0.5, // Delay the tagline animation after the heading
    });

    // GSAP animation for the banner image
    gsap.from(bannerImageRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: 'power3.out',
      delay: 1, // Delay the image animation after both the heading and tagline
    });

    // GSAP animation for transport images
    gsap.from(transportImagesRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.3, // Stagger each image animation
      ease: 'power3.out',
      delay: 1.5, // Delay the transport images after the banner
    });
  }, []);

  return (
    <div className="p-4">
      <section className="flex flex-col items-center justify-center text-center">
        {/* Heading with GSAP animation */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mt-8 m-2 hover:text-6xl md:hover:text-8xl hover:text-orange-700 transition-all"
        >
          TRAVEL SAVVY IS HERE!
        </h1>

        {/* Tagline with GSAP animation */}
        <p
          ref={taglineRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8"
        >
          Discover, Explore, and Experience
        </p>

        {/* Banner Image with GSAP animation */}
        <img
          ref={bannerImageRef}
          className="w-full h-60 sm:h-80 md:h-96 object-cover"
          src={banner1}
          alt="Travel Banner"
        />
      </section>

      {/* Transport Images Section */}
      <section className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 mt-8">
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[0] = el)}
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-lg shadow-lg"
            src={airTransport}
            alt="Air Transport"
          />
          <p className="text-md sm:text-lg mt-2">Air</p>
        </div>
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[1] = el)}
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-lg shadow-lg"
            src={railTransport}
            alt="Rail Transport"
          />
          <p className="text-md sm:text-lg mt-2">Rail</p>
        </div>
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[2] = el)}
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-lg shadow-lg"
            src={roadTransport}
            alt="Road Transport"
          />
          <p className="text-md sm:text-lg mt-2">Road</p>
        </div>
      </section>
    </div>
  );
};

export default Section1;
