import React from "react";
import { Link } from "react-router-dom";

import { products } from "../data/products";
console.log(products);

function ProductCard() {
  return (
    <div className="min-h-screen bg-black py-12 text-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <button className="text-red-600 hover:text-red-800 font-semibold">
            Clear Cart
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8 bg-white rounded-lg shadow-md">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-2xl text-black font-semibold">Card Items</h2>
            </div>
          </div>

          <div className="col-span-4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl text-black font-semibold mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>$</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>$</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3"
              >
                Proceed to Checkout
              </Link>
              <Link
                to="/products"
                className="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
