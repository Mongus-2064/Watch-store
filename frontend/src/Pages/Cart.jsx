import React, { useContext, useState } from "react";
import { CartContext } from "../../Features/ContextProvider";
import {
  FaIndustry,
  FaTags,
  FaTools,
  FaRegClock,
  FaRupeeSign,
} from "react-icons/fa";

const Cart = () => {
  const { cart , dispatch } = useContext(CartContext);
  const totalprice = cart.reduce((acc,item)=> acc + item.price *item.quantity,0)
  console.log(cart)

  return (
   <div className="min-h-screen bg-black p-6 text-white">
  <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
    🛒 Your Cart
  </h2>

  <div className="flex flex-col lg:flex-row gap-6">
    {/* Left: Cart Items */}
    <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
      {cart.map((p, i) => (
        <div
          key={i}
          className="bg-[#F5F5F5] text-black p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-bold mb-2">{p.name}</h3>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaIndustry className="text-blue-500" />
            <span className="font-medium">Company:</span> {p.companyname}
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaTags className="text-green-600" />
            <span className="font-medium">Type:</span> {p.type}
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaRupeeSign className="text-yellow-500" />
            <span className="font-medium">Price:</span> {p.price}
          </p>
          <p className="text-sm mb-1 flex items-center gap-2">
            <FaRegClock className="text-purple-500" />
            <span className="font-medium">Warranty:</span>{" "}
            {p.warranty || "N/A"}
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() =>
                dispatch({ type: "Remove", payload: { _id: p._id } })
              }
              className="bg-red-500 text-white p-2 rounded-md"
            >
              Remove
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  dispatch({ type: "Decrement", payload: { _id: p._id } })
                }
                className="rounded-full bg-red-500 text-white px-3 py-1"
              >
                -
              </button>
              <span>{p.quantity}</span>
              <button
                onClick={() =>
                  dispatch({ type: "Increment", payload: { _id: p._id } })
                }
                className="rounded-full bg-green-500 text-white px-3 py-1"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Right: Total Price Box */}
    <div className="w-full lg:w-1/4 bg-[#1f1f1f] text-white p-6 rounded-2xl shadow-lg h-fit">
      <h3 className="text-xl font-bold mb-4 text-center text-yellow-400">Total Summary</h3>
      <p className="text-lg mb-2">
        <span className="font-semibold">Total Items:</span> {cart.length}
      </p>
      <p className="text-lg mb-4">
        <span className="font-semibold">Total Price:</span> {totalprice}
      </p>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

  );
};

export default Cart;
