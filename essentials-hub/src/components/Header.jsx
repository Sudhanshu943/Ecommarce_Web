import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart(); // This will now work since useCart is provided by CartProvider
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search
  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`Searching for: ${searchTerm}`);
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          <Link to="/">Essentials Hub</Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4 mx-auto">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Cart Button */}
        <div className="ml-4 relative">
          <Link
            to="/cart"
            className="text-white text-lg hover:bg-blue-500 p-2 rounded-full"
          >
            <span className="material-icons">shopping_cart</span>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
          </Link>
        </div>

        {/* Login and Signup Buttons */}
        <div className="space-x-2">
          <Link
            to="/login"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
