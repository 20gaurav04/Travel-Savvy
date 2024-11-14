import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import banner2 from './assets/banner2.jpg';
import airTransport from './assets/air.jpg';
import railTransport from './assets/rail.jpg';
import roadTransport from './assets/road.jpg';

const Section3 = () => {
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
      delay: 0.5,
    });

    // GSAP animation for the banner image
    gsap.from(bannerImageRef.current, {
      duration: 1.5,
      opacity: 0,
      scale: 0.8,
      ease: 'power3.out',
      delay: 1,
    });

    // GSAP animation for transport images
    gsap.from(transportImagesRef.current, {
      duration: 1.5,
      opacity: 0,
      y: 50,
      stagger: 0.3,
      ease: 'power3.out',
      delay: 1.5,
    });
  }, []);

  return (
    <div>
      <section className="flex flex-col items-center text-center mx-auto p-4 sm:p-8">
        {/* Heading with GSAP animation */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mt-8 sm:mt-12 hover:text-orange-700 transition-all"
        >
          TRAVEL SAVVY IS HERE!
        </h1>

        {/* Tagline with GSAP animation */}
        <p
          ref={taglineRef}
          className="text-lg sm:text-2xl text-gray-400 mt-4 mb-8 sm:mb-12"
        >
          Discover, Explore, and Experience
        </p>

        {/* Banner Image with GSAP animation */}
        <img
          ref={bannerImageRef}
          className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
          src={banner2}
          alt="Travel Banner"
        />
      </section>
    </div>
  );
};

export default Section3;
