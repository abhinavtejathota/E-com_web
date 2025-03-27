import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-lg">{product.description}</p>
        <p className="text-gray-950 font-bold">₹{product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
