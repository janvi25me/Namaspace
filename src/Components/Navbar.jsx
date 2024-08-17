import React from "react";
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="h-8 w-auto"
                src="https://namascape.me/assets/images/footer-logo.svg"
                alt="Logo"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex flex-1 space-x-8">
          
            <a href="/" className="text-orange-500 px-3 py-2 text-sm font-bold">
              Home
            </a>
            
            
            <a
              href="#aboutus"
              className="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-bold"
            >
              Experiences
            </a>
       

            <a
              href="#aboutus"
              className="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-bold"
            >
              About Us
            </a>

            <a
              href="#contactus"
              className="text-gray-500 hover:text-orange-500 px-3 py-2 text-sm font-bold"
            >
              Contact Us
            </a>
          </div>

          {/* Sign In / Sign Up and Language Selector */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/signup"
              
              className="text-black bg-gray-100 hover:text-white hover:bg-orange-400  hover:border-none  px-7 py-2 border border-black text-sm font-medium"
            >
              Sign Up
            </a>

            <a
              href="/signin"
              className="text-white bg-orange-400 hover:bg-orange-500 px-7 py-2  text-sm font-medium"
            >
              Sign In
            </a>

            {/* Language Selector */}
            <button
              type="button"
              className="text-gray-800 px-3 py-2 text-sm font-medium"
            >
              EN
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hamburger menu) */}
      <div className="md:hidden flex flex-col space-y-1 px-2 pb-3">
      
        <a href="/" className="text-orange-600 px-3 py-2 text-sm font-medium">
          Home
        </a>
        <a
          href="/experiences"
          className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium"
        >
          Experiences
        </a>
        <a
          href="/aboutus"
          className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium"
        >
          About Us
        </a>
        <a
          href="/contactus"
          className="text-gray-800 hover:text-orange-600 px-3 py-2 text-sm font-medium"
        >
          Contact Us
        </a>
        <a
          href="/signup"
          className="text-gray-800 hover:text-orange-600 px-4 py-2 text-sm font-medium"
        >
          Sign Up
        </a>
        <a
          href="/signin"
          className="text-white bg-orange-400 hover:bg-orange-500 px-4 py-2  text-sm font-medium"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
