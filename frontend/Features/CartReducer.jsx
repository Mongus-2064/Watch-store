const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      // Check if product already exists in cart
      const existingProduct = state.find(item => item._id === action.payload._id);
      if (existingProduct) {
        // If exists, increment quantity by 1
        return state.map(item =>
          item._id === action.payload._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If not, add new product with quantity 1
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "Increment":
      return state.map(item =>
        item._id === action.payload._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "Decrement":
      return state.map(item =>
        item._id === action.payload._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case "Remove":
      return state.filter(item => item._id !== action.payload._id);

    default:
      return state;
  }
};

export default CartReducer;
