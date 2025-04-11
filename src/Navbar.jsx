import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black h-20 flex fixed top-0 left-0 w-full justify-between items-center px-4 md:px-8 z-50">

      {/* Logo */}
      <div className="text-yellow-500 text-2xl font-bold">TravelSavvy</div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-500 text-3xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Links */}
      <ul className={`flex flex-col md:flex-row md:space-x-8 items-center md:items-center absolute md:static top-20 left-0 w-full md:w-auto bg-black md:bg-transparent text-white md:text-white h-screen md:h-auto ${isOpen ? 'block' : 'hidden'} md:flex`}>
      <li>
          <Link
            to="sign"
            smooth={true}
            duration={500}
            className="text-white text-2xl font-bold hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </li>
        
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-yellow-500 text-2xl font-bold hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)} // Close menu on click
          >
            Home
          </Link>
        </li>
       
        <li>
          <Link
            to="bookings"
            smooth={true}
            duration={500}
            className="text-white text-2xl font-bold hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Bookings
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-2xl font-bold hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-2xl font-bold hover:underline cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
