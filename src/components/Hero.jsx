import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero py-20 text-center transition-colors duration-300">
      {/* Heading stays yellow in dark mode */}
      <h1
        className="text-5xl font-bold transition-colors duration-300 
        text-gray-900 dark:text-yellow-400"
      >
        Welcome to Baby Store
      </h1>

      {/* Tagline with proper colors */}
      <p
        className="text-lg mt-4 transition-colors duration-300 
        text-gray-800 dark:text-gray-300"
      >
        Explore our wide range of baby products!
      </p>

      <Link
        to="/products"
        className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white dark:bg-yellow-500 dark:text-gray-900 rounded-lg transition-colors duration-300"
      >
        Explore Products
      </Link>
    </div>
  );
};

export default Hero;
