import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleMenu}
        className="flex items-center text-gray-700 hover:text-pink-700 transition"
      >
        <FaUserCircle size={28} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          <ul className="text-gray-700">
            <li className="hover:bg-pink-50 px-4 py-2 cursor-pointer">
              <Link to="/login">Sign In / Register</Link>
            </li>
            <li className="hover:bg-pink-50 px-4 py-2 cursor-pointer">
              <Link to="/cart">My Cart</Link>
            </li>
            <li className="hover:bg-pink-50 px-4 py-2 cursor-pointer">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="hover:bg-pink-50 px-4 py-2 cursor-pointer">
              <Link to="/profile">My Profile</Link>
            </li>
            <li className="hover:bg-pink-50 px-4 py-2 cursor-pointer">
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
