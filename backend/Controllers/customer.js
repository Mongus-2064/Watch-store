import Cart from "../Models/cart.js";
import Order from "../Models/order.js";
import Watch from "../Models/watch.js";

//Add to cart Feature !

export const addtocart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { watchId, quantity = 1 } = req.body;

    let cart = await Cart.findOne({ user: userId });
    if (cart) {
      const itemindex =  cart.items.findIndex(
        (item) => item.watch.toString() === watchId
      );

      if (itemindex > -1) {
        cart.items[itemindex].quantity += quantity;
      } else {
        cart.items.push({ watch: watchId, quantity });
      }
    } else {
      cart = new Cart({
        user: userId,
        items: [{ watch: watchId, quantity }],
      });
    }
    await cart.save();
    return res.status(201).json({msg:"Successfully added to cart!"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error while adding cart" });

  }
};

//Get all watches list of that particular user !

export const getwatch = async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId }).populate("items.watch");

    if (cart) {
      return res.status(200).json({ watches: cart });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error while getting watches!" });
  }
};

// Remove watch from cart

export const removefromcart = async (req, res) => {
  const userId = req.user.id;
  const watchId = req.params.id;

  const cart = await Cart.findOne({ user: userId });
  try {
    if (cart) {
      cart.items = cart.items.filter(
        (item) => item.watch.toString() !== watchId
      );
      await cart.save();
      return res
        .status(200)
        .json({ msg: "Successfully deleted the watch from cart" });
    } else {
      return res.status(400).json("Cart not Found");
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error finding the watch in ur cart" });
  }
};

// place order

export const placeorder = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId }).populate("items.watch");

    if (!cart) {
      return res.status(400).json({ error: "No items!" });
    }
    let totalprice = 0;
    cart.items.forEach((item) => {
      totalprice += item.watch.price * item.quantity;
    });
    const order = new Order({
      user: userId,
      items: cart.items.map((item) => ({
        watch: item.watch._id,
        quantity: item.quantity,
      })),
      totalprice: totalprice,
      status: "pending",
    });
    await order.save();
    cart.items = [];
    await cart.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("Place order error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Myorders of the user

export const myorder = async (req, res) => {
  try {
    const userId = req.user.id;
    const order = await Order.find({ user: userId }).populate("items.watch");
    if (order) {
      return res.status(200).json({ order });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



// Get all watches lists on the website : 

export const getallwatches = async (req,res) =>{
  try {
    const watches =  await Watch.find();
    return res.status(200).json(watches);
  } catch (error) {
    return res.status(500).json({error:"Error while getting watches"})
  }
}