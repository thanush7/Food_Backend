import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'

const userAddress=async (req,res)=>{
    const newOrder=new orderModel({
        userId:req.body.userId,
        items:req.body.items,
        address:req.body.address 
      })
     const newuserAddress= await newOrder.save();
     res.json({success:true,message:"address saved"})
}
export{userAddress}