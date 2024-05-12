import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaHome, FaUserCircle } from 'react-icons/fa';
import { FcManager } from 'react-icons/fc';
import { HiMenuAlt2, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <FcManager className="text-white text-3xl" />
              <span className="ml-2 text-xl font-semibold text-white">MANAGER DASHBOARD</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center">
              <Link to="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link to="/notifications" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium">
                Notifications
              </Link>
              <Link to="/account" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium">
                Account
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenuAlt2 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/notifications" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Notifications
            </Link>
            <Link to="/account" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
              Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;