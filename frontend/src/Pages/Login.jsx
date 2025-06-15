import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import api from "../API/api.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/home");
      toast.success("Logged in successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Invalid Credentials");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <Toaster />
      <div className="flex flex-col gap-6 border border-white p-6 rounded-md">
        <h1 className="text-white logo-font text-center text-3xl mb-4">
          Enter Credentials
        </h1>
        <div>
          <label className="text-white">Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter-Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-white placeholder:text-white p-3 rounded-md text-white"
          />
        </div>
        <div>
          <label className="text-white">Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter-Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-white  placeholder:text-white p-3 rounded-md text-white"
          />
        </div>
        <button
          onClick={handlesubmit}
          className="text-black bg-white p-2 rounded-md hover:bg-black border border-black hover:text-white hover:border hover:border-white hover:cursor-pointer "
        >
          Login
        </button>
        <p
          className="text-white text-center border-b border-black hover:cursor-pointer hover:border-b hover:border-white duration-300 transition-all p-2"
          onClick={() => navigate("/signup")}
        >
          Create an account ?
        </p>
      </div>
    </div>
  );
};

export default Login;
