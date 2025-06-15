import React, { useContext, useEffect, useState } from "react";
import watch from "../assets/Herosection.png";
import api from "../API/api";

import { CartContext } from "../../Features/ContextProvider";

const Watchcard = () => {
  const [watches, setWatches] = useState([]);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/customer/get-all-watches");
        console.log(res.data);
        setWatches(res.data);
      } catch (error) {
        console.log("Error Getting watches", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {watches.map((w, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-4"
        >
          <img
            src={watch}
            alt={w.name}
            className="rounded-lg w-full h-48 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {w.name}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
            Warranty: {w.warranty}
          </p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Rs. {w.price}
          </p>
          <button
            onClick={() => {
              dispatch({ type: "Add", payload: w });
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition hover:cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watchcard;
