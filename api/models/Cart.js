const mongoose= require("mongoose")

const cartSchem=new mongoose.Schema({

    totalPrice:{type:String,required:true,unique:true},
    listId:{type:String,required:true,unique:true},
    userId:{type:String,required:true,unique:true},
    
    isPayd:{type:Boolean,default:false},

},
{timestamps:true}

);
 module.exports= mongoose.model("Cart",cartSchem)
