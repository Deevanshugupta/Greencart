import User from "../models/User.js"

// update user cartdata://api/cart/update

// export const updateCart=async(req ,res)=>{
//     try{
//         const{userId,cartItems}=req.body
//         await User.findByIdAndUpdate(userId,{cartItems})
//         res.json({success:true,message:"Cart Updated"})
//     }catch(error){
//         console.log(error.message)
//         res.json({success:false,message:error.message})
//     }
// }
export const updateCart=async(req ,res)=>{
    try{
        const{userId,cartItems}=req.body
        
        if(!userId){
            return res.json({success:false, message:"User ID is required"})
        }
        
        await User.findByIdAndUpdate(userId,{cartItems})
        res.json({success:true,message:"Cart Updated"})
    }catch(error){
        console.log(error.message)
        res.json({success:false,message:error.message})
    }
}