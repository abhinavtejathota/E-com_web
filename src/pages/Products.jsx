import React from "react";
import ProductCard from "../components/ProductCard";

const Products = ({ products = [], addToCart }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        ) : (
          <p className="text-center col-span-3">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
