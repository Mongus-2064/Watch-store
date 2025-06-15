import React, { useEffect, useState } from "react";
import { MdDangerous } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import api from "../API/api";

const Admindash = () => {
  const [name, setName] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [warranty, setWarranty] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  // Api calling

  const handlesubmit = async (e) => {
     e.preventDefault();
    try {
      await api.post("/admin/add-watch", {
        name,
        companyname,
        warranty,
        price,
        type,
      });
      toast.success("Watch added successfully!");
    } catch (error) {
            toast.error("Error while adding watch!");
      
    }
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden p-4">
      <Toaster/>
      <h5 className="w-full flex items-center font-bold logo-font mb-5 text-4xl justify-center text-center">
        Admin only!{" "}
        <span>
          <MdDangerous className="text-red-500 ml-2" />
        </span>{" "}
        Don't edit this page
      </h5>

      <form className="space-y-4 max-w-2xl mx-auto" onSubmit={handlesubmit}>
        {/* Watch Name */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="w-full md:w-1/4">Name:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Watch Name"
            className="w-full outline outline-white rounded-md p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="w-full md:w-1/4">Company Name:</label>
          <input
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            placeholder="Enter Company Name"
            className="w-full outline outline-white rounded-md p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Warranty */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="w-full md:w-1/4">Warranty:</label>
          <input
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
            type="text"
            placeholder="Enter Warranty Time Span"
            className="w-full outline outline-white rounded-md p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        
        {/* Price */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="w-full md:w-1/4">Price:</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="Enter Price "
            className="w-full outline outline-white rounded-md p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Type of Watch */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="w-full md:w-1/4">Type:</label>
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            type="text"
            placeholder="Enter Watch Type"
            className="w-full outline outline-white rounded-md p-2 bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full text-white outline outline-white p-2 rounded-md hover:cursor-pointer hover:bg-white hover:text-black "
        >
          Add Watch
        </button>
      </form>
    </div>
  );
};

export default Admindash;
