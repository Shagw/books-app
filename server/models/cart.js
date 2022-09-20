const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const cartListSchema = new mongoose.Schema({
    postedby:{
        type:ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    newArrivals:{
        type:Boolean,
        default:false
    },
})

mongoose.model("CartItems",cartListSchema);