import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/slices/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 rounded flex justify-between items-center">
              <p>{item.name}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
