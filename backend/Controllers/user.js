    import User from "../Models/user.js";
    import bcrypt from "bcrypt";
    import jwt from "jsonwebtoken";

    //User Signup

    export const usersignup = async (req, res) => {
      const { email, password } = req.body;
      try {
        if (!email || !password) {
          return res
            .status(400)
            .json({ error: "Email and password field cannot be empty" });
        }
        const hashpwd = await bcrypt.hash(password, 10);

        await User.create({ email, password:hashpwd ,role: "user"});
        return res.status(201).json({ msg: "SignedUp successfully!" });
      } catch (error) {
        if (error.code === 11000) {
          return res.status(400).json({ error: "Credentials already in use!" });
        }
        console.log("Error while signing up!", error);
      }
    };

    // User Login
    export const userlogin = async (req, res) => {
      const { email, password } = req.body;
      try {
        if (!email || !password) {
          return res
            .status(400)
            .json({ error: "Email and password field cannot be empty" });
        }

        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "User doesnot exists" });
        }
          const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

        const token = jwt.sign({ email, id: user._id, role: user.role }, process.env.secretkey);

        return res
          .status(201)
          .json({ msg: "Logged in successfully", token, email});
      } catch (error) {
        return res.status(500).json({ error: "Error while logging in", error });
      }
    };
