import React from "react";

function Checkout() {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT SIDE: Shipping + Payment */}
        <div className=" lg:col-span-2 space-y-6">
          {/* Shipping Info */}
          <div className="bg-white text-black rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-xl w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border p-3 rounded-xl w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-3 rounded-xl w-full"
              />
              <input
                type="text"
                placeholder="City"
                className="border p-3 rounded-xl w-full"
              />
            </div>
            <textarea
              placeholder="Full Address"
              className="border p-3 rounded-xl w-full mt-4 h-70 resize-none"
            />
          </div>

          {/* Payment Method */}
          <div className="bg-white text-black rounded-2xl shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                <span>Credit / Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer">
                <input type="radio" name="payment" />
                <span>JazzCash / EasyPaisa</span>
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Order Summary */}
        <div className="bg-white text-black rounded-2xl shadow p-6 h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {/* Product */}
            <div className="flex items-center gap-4">
              <img
                src="https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/4:3/w_2666,h_2000,c_limit/basically-burger-1.jpg"
                alt="Product"
                className="w-20 h-20 rounded-xl"
              />
              <div>
                <p className="font-semibold">Burger</p>
                <p className="text-gray-500 text-sm">
                  Enjoy the crispy chiken fillet in a soft bun with spicy mayo
                  and our signature sauce
                </p>
                <p className="ml-auto font-semibold">$120</p>
              </div>
            </div>

            <div className="flex justify-between border-t pt-4">
              <p className="text-gray-600">Subtotal</p>
              <p>$120</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Shipping</p>
              <p>$10</p>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-4">
              <p>Total</p>
              <p>$130</p>
            </div>
          </div>

          <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
