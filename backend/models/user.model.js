import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    Username:{
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
    Kuid:{
        type:Number,
        required:true,
    },

},{timestamps:true})

// password incryption in data base
userSchema.pre("save",
   async function (next) {
    if(!this.isModified('Password')) return next();
    this.Password= await bcrypt.hash(this.Password,10)
    
   
   }
)
// check password
userSchema.methods.isPasswordCorrect = async function (password) {
    return  await bcrypt.compare(password,this.Password)  
}

// refresh token
// access token

export const User = mongoose.model("user",userSchema)
