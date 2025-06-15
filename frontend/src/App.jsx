import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Admindash from "./Pages/Admindash.jsx";
import Addwatch from "./Pages/Addwatch.jsx";
import Watchstore from "./Pages/Watchstore.jsx";
import About from "./Pages/About.jsx";
import Authlayout from "./Layouts/Authlayout.jsx";
import Mainlayout from "./Layouts/Mainlayout.jsx";
import Cart from "./Pages/Cart.jsx";
import ProtectedRoute from "../Protectedroute/ProtectedRoute.jsx";  // Import karna bhoolna mat

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Authlayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <Mainlayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/admindashboard" element={<Admindash />} />
          <Route path="/admin-add-watch" element={<Addwatch />} />
          <Route path="/store" element={<Watchstore />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
