import mongoose, {Schema} from "mongoose";




const bookSchema = new Schema({
    Title:{
        type:String,
        required:true,
    },
    Author:{
        type:String,
        required:true,
    },
    PubishedDate:{
        type:Number,
        required:true,
    },
    Publication:{
        type:String,
        required:true,
    },
    Image:{
        type:String, //cloudnary
        required:true,
    },
    

},{timestamps:true})


export const book = mongoose.model("book",bookSchema);