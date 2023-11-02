const mongoose=require('mongoose')
const dotenv=require('dotenv');
dotenv.config({path:'./config/config.env'})
const colors=require('colors')
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mangodb connected ${mongoose.Connection.host}`.bgGreen.white);

    }
    catch (error){
        console.log(`mangoDB issue ${error}`.bgRed.white)

    }
}
module.exports={connectDB};