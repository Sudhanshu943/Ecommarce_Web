import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "T-Shirt", price: 25, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Jeans", price: 40, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Sneakers", price: 60, image: "https://via.placeholder.com/150" },
];

const Home = () => {
  return (
    <main className="container mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Essentials Hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Home;
