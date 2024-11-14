import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for toggle button

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black h-20 flex justify-between items-center px-4 md:px-8 relative z-50">
      {/* Logo or Branding */}
      <div className="text-yellow-500 text-2xl font-bold">TravelSavvy</div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-yellow-500 text-3xl focus:outline-none">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Links */}
      <ul className={`flex flex-col items-center space-y-6 bg-black text-white w-full h-screen fixed top-20 left-0 md:h-auto md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent md:relative md:w-auto transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-yellow-500 text-2xl hover:text-3xl hover:underline font-bold transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="flashy-fridays"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-3xl font-bold transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            Flashy Fridays!
          </Link>
        </li>
        <li>
          <Link
            to="bookings"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-3xl font-bold transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            Bookings
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-3xl font-bold transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-2xl hover:text-3xl font-bold transition-all cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
