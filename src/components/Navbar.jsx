import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import AccountMenu from "./AccountMenu"; // 🔥 Import the AccountMenu component

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <nav className="bg-pink-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Name */}
        <Link to="/" className="text-2xl font-bold text-pink-600">
          Baby Store
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-pink-500">
            Home
          </Link>
          <Link to="/products" className="hover:text-pink-500">
            Products
          </Link>
          <Link to="/contact" className="hover:text-pink-500">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon with Input Box */}
          <div className="relative">
            <FaSearch
              className="cursor-pointer text-gray-600"
              onClick={() => setSearchVisible(!searchVisible)}
            />
            {searchVisible && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-8 right-0 border rounded-md px-2 py-1 shadow-md"
              />
            )}
          </div>
          {/* Cart Icon */}
          <Link to="/cart">
            <FaShoppingCart className="text-gray-600 hover:text-pink-500" />
          </Link>
          {/* Account Menu */}
          <AccountMenu /> {/* ✅ Integrated AccountMenu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
