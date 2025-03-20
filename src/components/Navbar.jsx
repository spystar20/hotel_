import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-in" className="w-full capitalize bg-[#fffff0] shadow-md">
      <div className="flex items-center justify-between py-6 px-4 lg:px-20">
        
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-lg font-outfit">
          <Link to="/"><li className="text-black cursor-pointer hover-underline-animation">Home</li></Link>
          <Link to="/Menu"><li className="text-black cursor-pointer hover-underline-animation">Room</li></Link>
          <Link to="/Venue"><li className="text-black cursor-pointer hover-underline-animation">Gallery</li></Link>
          <Link to="/Contact"><li className="text-black cursor-pointer hover-underline-animation">Contact Us</li></Link>
          <Link to="/About"><li className="text-black cursor-pointer hover-underline-animation">About Us</li></Link>
        </ul>

        {/* Booking Button */}
        <div>
          <Link to="/Booking">
            <button className="bg-black text-white px-5 py-2 rounded-2xl font-outfit text-base hover:bg-gray-800">
              Book a Room
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <CiMenuKebab size={28} className="text-black cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
