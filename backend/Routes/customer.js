import express from "express";
import { authmiddleware } from "../Middleware/middleware.js";
import {
  addtocart,
  getwatch,
  removefromcart,
  placeorder,
  myorder,
  getallwatches
} from "../Controllers/customer.js";

const router = express.Router();

router.post("/add-to-cart", authmiddleware,addtocart);
router.get("/get-watch", authmiddleware, getwatch);
router.delete("/remove-from-cart/:id", authmiddleware, removefromcart);
router.get("/place-order", authmiddleware, placeorder);
router.get("/my-order", authmiddleware, myorder);
router.get("/get-all-watches", authmiddleware, getallwatches);

export default router;
