import ProductCard from "../components/ProductCard";

const Products = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Baby Stroller",
      price: "$199",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Baby Food",
      price: "$29",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Diapers Pack",
      price: "$39",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
