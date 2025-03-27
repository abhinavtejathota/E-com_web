import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-2xl font-bold">{item.name}</h2>
              <p className="text-lg">Price: ₹{item.price}</p>
              <p className="text-lg">Quantity: {item.quantity}</p>
              <p className="text-lg font-bold">
                Total: ₹{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl">Your cart is empty.</p>
      )}

      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">
          Total: ₹{getTotalPrice().toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
