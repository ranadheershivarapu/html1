const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type : String ,  unique : true , match:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        

    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    }

})
const userModel=mongoose.model('users',userSchema)
module.exports=userModel