import React, { useContext, useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaBagShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Features/ContextProvider";
import {jwtDecode} from "jwt-decode"; // 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activetab, setActiveTab] = useState("");
  const { cart } = useContext(CartContext);
  const [email, setEmail] = useState(null);
  const [role, setRole] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setEmail(decoded.email);
        setRole(decoded.role); 
      } catch (error) {
        console.log("Invalid token");
        setEmail(null);
        setRole(null);
      }
    } else {
      setEmail(null);
      setRole(null);
    }
  }, []);

  const handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setEmail(null);
    setRole(null);
    navigate("/login");
  };

  return (
    <>
      <div className="p-6 text-white flex justify-between items-center relative bg-black drop-shadow-[0_4px_8px_rgba(255,255,255,0.15)]">
        <div>
          <p className="logo-font text-3xl">MoreTime</p>
        </div>

        <div className="md:hidden">
          <button onClick={handletoggle}>
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <Link
              to={"/"}
              onClick={() => setActiveTab("Home")}
              className={`flex items-center gap-2 hover:cursor-pointer ${
                activetab === "Home" ? "bg-gray-800 px-2 rounded-md" : ""
              }`}
            >
              <FaHome />
              Home
            </Link>

            <Link
              to={"/store"}
              onClick={() => setActiveTab("Store")}
              className={`flex items-center gap-2 hover:cursor-pointer ${
                activetab === "Store" ? "bg-gray-800 px-2 rounded-md" : ""
              }`}
            >
              <FaBagShopping />
              Store
            </Link>

            <Link
              to={"/about"}
              onClick={() => setActiveTab("About")}
              className={`flex items-center gap-2 hover:cursor-pointer ${
                activetab === "About" ? "bg-gray-800 px-2 rounded-md" : ""
              }`}
            >
              <IoIosInformationCircle />
              About
            </Link>

            {/* ✅ Admin-Only Link */}
            {role === "admin" && (
              <Link
                to="/admin-add-watch"
                onClick={() => setActiveTab("AddWatch")}
                className={`flex items-center gap-2 hover:cursor-pointer ${
                  activetab === "AddWatch" ? "bg-gray-800 px-2 rounded-md" : ""
                }`}
              >
                <MdPerson />
                Add Watch
              </Link>
            )}
          </ul>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <Link to={"/cart"} className="relative flex items-center gap-1">
            <IoMdCart size={24} />
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {email ? (
            <>
              <span className="text-white font-semibold">{email}</span>
              <button
                onClick={handleLogout}
                className="text-black bg-white p-2 rounded-md hover:bg-black border border-black hover:text-white hover:border-white"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full px-6 py-4 flex flex-col items-center text-white space-y-4 bg-black">
          <ul className="flex flex-col gap-4 items-center">
            <Link to={"/"} className="flex gap-2 items-center">
              <FaHome /> Home
            </Link>
            <Link to={"/store"} className="flex gap-2 items-center">
              <FaBagShopping /> Store
            </Link>
            <Link to={"/about"} className="flex gap-2 items-center">
              <IoIosInformationCircle /> About
            </Link>

            {role === "admin" && (
              <Link to="/admin-add-watch" className="flex gap-2 items-center">
                <MdPerson /> Add Watch
              </Link>
            )}

            <Link to={"/cart"} className="flex items-center gap-1">
              <IoMdCart />
              Cart ({cart.length})
            </Link>

            {email ? (
              <>
                <span>{email}</span>
                <button
                  onClick={handleLogout}
                  className="text-black bg-white p-2 rounded-md hover:bg-black hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </>
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
