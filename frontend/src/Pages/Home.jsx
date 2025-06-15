import React from "react";
import watch from "../assets/Herosection.png";
import { FaStore } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row md:py-0 py-4 bg-black h-screen  justify-evenly items-center px-4 w-full">
      {/* Left container */}
      <div className="text-white flex flex-col  md:w-[70%] items-center ">
        <p className="logo-font text-4xl mb-2 text-center">
          Elevate Your Style.{" "}
          <span className="text-blue-400 logo-font">It's MoreTime</span>{" "}
        </p>
        <p className="md:w-[80%] mb-2 text-center">
          "At MoreTime, we blend precision engineering with modern elegance to
          create watches that do more than tell time — they tell your story.
          Whether you're chasing goals or making a statement, it's always your
          time."
        </p>

        <div className="flex gap-6 mt-4 ">
          <button className=" flex items-center justify-center gap-4 border-2 p-2 border-white rounded-[30px]  hover:cursor-pointer hover:bg-white hover:text-black transition-all">
            <span>Visit near store</span> <FaStore />
          </button>
          <button className="  flex items-center justify-center gap-4  px-2 bg-white text-black border-2 border-black rounded-[30px] hover:cursor-pointer  hover:border-white hover:bg-black hover:text-white ">
            <span>Shop Online</span>
            <FaCartShopping />
          </button>
        </div>
      </div>

      {/* Right Container */}

      <div>
        <img src={watch} alt="Picture" />
      </div>
    </div>
  );
};

export default Home;
