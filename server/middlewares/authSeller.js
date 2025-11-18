import jwt from 'jsonwebtoken';

const authSeller= async(req, res, next)=>{
    const{sellerToken}=req.cookies;

    if(!sellerToken){
        return res.json({success:false, message:'not authorized'});
    }
    try{
            const tokenDecode=jwt.verify(sellerToken,process.env.JWT_SECRET)
            if(tokenDecode.email===process.env.SELLER_EMAIL){
                next();
            }else{
                return res.json({success: false,message:'Not Authorized'});
            }
            
        }
        catch (error){
            res.json({success: false,message:error.message});
        }
}

// const authSeller= async(req, res, next)=>{
//     const authHeader=req.headers.authorization;
//     let token;

//     if(!authHeader || !authHeader.startsWith('Bearer')){
//         return res.status(401).json({success:false, message:'authentication failed.no token provided',});
//     }
//     token=authHeader.split(' ')[1];
//     try{
//             const tokenDecode=jwt.verify(token,process.env.JWT_SECRET)
//             req.sellerId=tokenDecode.id;
//             if(tokenDecode.email===process.env.SELLER_EMAIL){
//                 next();
//             }else{
//                 return res.status(401).json({success: false,message:'Not Authorized:user ID mismatch'});
//             }
            
//         }
//         catch (error){
//             res.status(401).json({success: false,message:`inavalid or expired token: ${error.message}`,});
//         }
// }

export default authSeller;