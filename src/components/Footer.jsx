const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p>
            We provide the best baby products to keep your baby safe and happy.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Your Account</h3>
          <ul>
            <li>My Cart</li>
            <li>Wishlist</li>
            <li>Orders</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul>
            <li>FAQ</li>
            <li>Contact Us</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6">
        &copy; {new Date().getFullYear()} Baby Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
