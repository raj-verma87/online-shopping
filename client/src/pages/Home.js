import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to the E-commerce Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Product cards */}
        {[1, 2, 3].map((product) => (
          <div key={product} className="border p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold">Product {product}</h2>
            <p className="text-gray-600">Product description goes here.</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
