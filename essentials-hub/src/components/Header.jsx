import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
    // Replace this alert with actual search logic or navigation
  };

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Essentials Hub</h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
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
            placeholder="Search..."
            className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text">
            Search
          </button>
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
