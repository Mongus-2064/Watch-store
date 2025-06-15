import mongoose from "mongoose";

const user = mongoose.Schema({
    email :{
        type:String,
        required:true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default:'user',
    }
    

}, {timestamps:true,});

const User= mongoose.model("User",user);

export default User;