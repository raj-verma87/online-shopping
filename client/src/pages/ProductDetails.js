import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details from the API
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details.');
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow-md"
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-gray-700">Price: ₹{product.price}</p>
          <p className="mt-4">{product.description}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
