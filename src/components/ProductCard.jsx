const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
        <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
