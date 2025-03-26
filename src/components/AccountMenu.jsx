import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountMenu = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="flex items-center transition-colors duration-300"
      >
        <FaUserCircle
          size={28}
          className={`transition-colors duration-300 ${
            isDarkMode ? "text-gray-900" : "text-gray-100"
          } hover:text-pink-500 dark:hover:text-yellow-400`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 shadow-lg rounded-lg z-10 transition-colors duration-300
          ${
            isDarkMode
              ? "bg-gray-100 text-gray-900"
              : "bg-gray-800 text-gray-100"
          }`}
        >
          <ul>
            <li className="hover:bg-pink-50 dark:hover:bg-gray-300 px-4 py-2 cursor-pointer transition-colors duration-300">
              <Link to="/login">Sign In / Register</Link>
            </li>
            <li className="hover:bg-pink-50 dark:hover:bg-gray-300 px-4 py-2 cursor-pointer transition-colors duration-300">
              <Link to="/cart">My Cart</Link>
            </li>
            <li className="hover:bg-pink-50 dark:hover:bg-gray-300 px-4 py-2 cursor-pointer transition-colors duration-300">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="hover:bg-pink-50 dark:hover:bg-gray-300 px-4 py-2 cursor-pointer transition-colors duration-300">
              <Link to="/profile">My Profile</Link>
            </li>
            <li className="hover:bg-pink-50 dark:hover:bg-gray-300 px-4 py-2 cursor-pointer transition-colors duration-300">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
