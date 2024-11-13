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
    <div>
      <section className="flex-row justify-center">
        {/* Heading with GSAP animation */}
        <h1
          ref={headingRef}
          className="text-7xl font-extrabold text-center mt-12 m-4 mb-4 hover:text-8xl hover:text-orange-700 transition-all"
        >
          TRAVEL SAVVY IS HERE!
        </h1>

        {/* Tagline with GSAP animation */}
        <p
          ref={taglineRef}
          className="text-2xl text-center text-gray-400 mb-12"
        >
          Discover, Explore, and Experience
        </p>

        {/* Banner Image with GSAP animation */}
        <img
          ref={bannerImageRef}
          className="h-96 w-full"
          src={banner1}
          alt="Travel Banner"
        />
      </section>

      {/* Transport Images Section */}
      <section className="flex justify-center items-center space-x-8 mt-12">
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[0] = el)}
            className="h-40 w-40 rounded-lg shadow-lg"
            src={airTransport}
            alt="Air Transport"
          />
          <p className="text-lg mt-2">Air</p>
        </div>
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[1] = el)}
            className="h-40 w-40 rounded-lg shadow-lg"
            src={railTransport}
            alt="Rail Transport"
          />
          <p className="text-lg mt-2">Rail</p>
        </div>
        <div className="text-center">
          <img
            ref={(el) => (transportImagesRef.current[2] = el)}
            className="h-40 w-40 rounded-lg shadow-lg"
            src={roadTransport}
            alt="Road Transport"
          />
          <p className="text-lg mt-2">Road</p>
        </div>
      </section>
    </div>
  );
};

export default Section1;
