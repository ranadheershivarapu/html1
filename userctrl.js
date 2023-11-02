const userModel=require('../models/userModels')
const bcrypt=require('bcryptjs')

//register callback
const registercontroller= async(req,res)=>{
    try{

        const existinguser=await userModel.findOne({email:req.body.email})
        if(existinguser)
        {
            return res.status(200).send({message:'user already exsit',success:false})
        }
        const password=req.body.password
        const salt=await bcrypt.genSalt(10)
        const hashpassword=await bcrypt.hash(password,salt)
        req.body.password=hashpassword
        const newuser=new userModel(req.body)
        await newuser.save();
        res.status(201).send({message:'register sucess',success:true});
    }
        catch(error){
            console.log(error)
            res
            .status(500)
            .send({
                sucess:false,
                message:`registration controller ${error.message}`,
            

            });

        }

}

const logincontroller=()=>{};

module.exports={logincontroller,registercontroller}