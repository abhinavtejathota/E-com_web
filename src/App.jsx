import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import productsData from "./data/products"; // Mock product data

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Search and Navigate
  const handleSearch = (query, navigate) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredProducts(productsData); // Show all products if query is empty
    } else {
      const filtered = productsData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }

    // Navigate to /products after searching
    if (navigate) {
      navigate("/products");
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-pink-50 text-gray-800"
        } transition-colors duration-300`}
      >
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onSearch={handleSearch}
          cart={cart}
          searchQuery={searchQuery}
        />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />

            {/* Pass filtered products and cart to Products */}
            <Route
              path="/products"
              element={
                <Products products={filteredProducts} addToCart={addToCart} />
              }
            />

            <Route
              path="/cart"
              element={<Cart cart={cart} removeFromCart={removeFromCart} />}
            />

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
