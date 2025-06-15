import mongoose from 'mongoose';

const cartschema = mongoose.Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required:true,
},
items:[
    {
        watch:{
  type: mongoose.Schema.Types.ObjectId,
    ref: 'Watch',
    required:true,
        },
        quantity:{
            type: Number,
            default: 1,
        }
    }
]
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartschema);

export default Cart;