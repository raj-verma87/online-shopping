import React from 'react';

const Admin = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 text-center">
        Manage products, orders, and users here.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="border p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Products</h2>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
            Manage Products
          </button>
        </div>
        <div className="border p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Orders</h2>
          <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded">
            Manage Orders
          </button>
        </div>
        <div className="border p-4 rounded shadow-md text-center">
          <h2 className="text-xl font-semibold">Users</h2>
          <button className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
            Manage Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
