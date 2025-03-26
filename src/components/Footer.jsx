const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-300 py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p>
            We provide the best baby products to keep your baby safe and happy.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Your Account</h3>
          <ul>
            <li>
              <a
                href="/cart"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                My Cart
              </a>
            </li>
            <li>
              <a
                href="/wishlist"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Wishlist
              </a>
            </li>
            <li>
              <a
                href="/orders"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Orders
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Help</h3>
          <ul>
            <li>
              <a
                href="/faq"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 dark:hover:text-yellow-400"
              >
                Twitter
              </a>
            </li>
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
