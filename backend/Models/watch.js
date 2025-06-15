import mongoose from "mongoose";

const watchschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    companyname: {
      type: String,
      required: true,
    },
    warranty: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required : true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Watch = mongoose.model("Watch", watchschema);

export default Watch;
