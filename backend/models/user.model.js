import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        index:true,
    },
    Name:{
        type:String,
        required:true,
        trim:true,
    },
    Password:{
        type:String,
        required:true,
    },
    kuid:{
        type:Number,
        required:true,
    },

},{timestamps:true})

export const User = mongoose.model("user",userSchema)
