import jwt from "jsonwebtoken";

export const authmiddleware = async (req, res, next) => {
  try {
    const authheader = req.headers.authorization;

    if (!authheader || !authheader.startsWith("Bearer")) {
      return res
        .status(400)
        .json({ error: "Token not found in authorization" });
    }

    const Token = authheader.split(" ")[1];

    const decoded = jwt.verify(Token, process.env.secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error while verifiying token", error });
  }
};

export const adminauth = (req, res, next) => {
  try {
    if (req.user && req.user.role === "admin") {
      next();
    }
    return res.status(400).json({ msg: "Access Denied!" });
  } catch (error) {
    return res.staus(500).json({ err: "Internal Server Error" });
  }
};
