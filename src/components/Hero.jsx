import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-blue-100 py-20 text-center">
      <h1 className="text-5xl font-bold text-pink-500">
        Welcome to Baby Store
      </h1>
      <p className="text-lg mt-4">Explore our wide range of baby products!</p>
      <Link
        to="/products"
        className="mt-6 inline-block px-6 py-3 bg-pink-500 text-white rounded-lg"
      >
        Explore Products
      </Link>
    </div>
  );
};

export default Hero;
