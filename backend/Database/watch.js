import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Successfully!");
  } catch (error) {
    console.log("Error connecting to Database!", error);
  }
};

export default dbconnection
