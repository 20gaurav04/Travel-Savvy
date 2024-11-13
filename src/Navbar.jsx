import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-black h-20 flex justify-center items-center">
      <ul className="flex space-x-8">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-yellow-500 text-2xl hover:text-3xl hover:underline font-bold transition-all cursor-pointer"
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
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
