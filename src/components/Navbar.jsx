import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { CiMenuKebab } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Rooms' },
    { to: '/venue', label: 'Gallery' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/about', label: 'About Us' },
  ];

  return (
    <nav className="w-full bg-ivory shadow-md sticky top-0 z-50" data-aos="fade-in">
      <div className="flex items-center justify-between py-4 px-4 sm:px-6 md:px-12 lg:px-20">
      
        <div className="flex-shrink-0">
          <img
            className="w-16 sm:w-20 md:w-20 lg:w-24 rounded-br-3xl rounded-tl-3xl object-cover"
            src={logo}
            alt="Doodle's Stay Logo"
          />
        </div>

    
        <ul className="hidden lg:flex items-center gap-8 capitalize text-lg font-medium text-gray-800">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                className="relative pb-1 hover:text-gray-600 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-gray-800 after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

      
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/menu" className="flex-shrink-0">
            <button className="bg-gray-800 text-white text-ivory px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium text-xs sm:text-sm uppercase hover:bg-gray-700 transition-colors">
              Book a Room
            </button>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl sm:text-3xl text-gray-800 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoClose /> : <CiMenuKebab />}
          </button>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-50 bg-ivory px-4 sm:px-6 py-6 shadow-md absolute w-full top-full left-0 z-40">
          <ul className="flex flex-col gap-6 capitalize text-lg font-medium text-gray-800">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 px-4 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;