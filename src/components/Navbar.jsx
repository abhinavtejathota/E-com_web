import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate
import { FaSearch, FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import AccountMenu from "./AccountMenu";

const Navbar = ({ isDarkMode, setIsDarkMode, onSearch, cart, searchQuery }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState(searchQuery || ""); // Keep query persistent
  const navigate = useNavigate(); // For programmatic navigation

  // Handle input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
  };

  // Handle search submit
  const handleSearchSubmit = () => {
    onSearch(searchTerm); // Trigger filtering
    navigate("/products"); // Navigate to products page
    setSearchVisible(false);
  };

  return (
    <nav
      className={`p-4 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gray-100 text-gray-900" // Light navbar in dark mode
          : "bg-gray-800 text-gray-100" // Dark navbar in light mode
      }`}
    >
      <div className="navbar-card container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <Link
          to="/"
          className="text-2xl font-bold transition-colors duration-300"
        >
          Baby Store
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link
            to="/"
            className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon + Input */}
          <div className="relative flex items-center">
            <FaSearch
              className="cursor-pointer transition-colors duration-300"
              onClick={() => setSearchVisible(!searchVisible)}
            />

            {searchVisible && (
              <>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="ml-2 border rounded-md px-2 py-1 shadow-md transition-colors duration-300 
                    dark:bg-gray-700"
                />
                <button
                  onClick={handleSearchSubmit}
                  className="ml-2 bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-600 transition"
                >
                  Go
                </button>
              </>
            )}
          </div>

          {/* Cart Icon with Item Count */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="hover:text-pink-500 dark:hover:text-yellow-400 transition-colors duration-300" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full px-2">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Light/Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="text-xl transition-colors duration-300"
          >
            {isDarkMode ? (
              <FaSun className="text-gray-900 hover:text-yellow-500" />
            ) : (
              <FaMoon className="text-white hover:text-yellow-400" />
            )}
          </button>

          {/* Account Menu */}
          <AccountMenu isDarkMode={isDarkMode} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
