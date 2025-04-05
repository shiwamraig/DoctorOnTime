import jwt from 'jsonwebtoken'

// admin authentication middleware
const authAdmin  = async(req,res,next)=>{
try{

       // 🛑 Get the token sent by server
       const { atoken } = req.headers; 
    
       // ⚠️ Check if token is missing
       if (!atoken) {
           return res.json({
               success: false,
               message: "Admin token not found"
           });
       }
   
       // 🔐 Verify the token using the secret key
       const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);
   
       // ❌ Check if the decoded token matches admin credentials (⚠️ Not secure)
       if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {  //⚠️ This is not a secure way to check credentials,will come back later
           return res.json({
               success: false,
               message: "Invalid token"
           });
       }
   
       // ✅ Token is valid → Proceed to next middleware
       next();
}
catch(error){
    console.log(error)
    res.json({
        success:false,
        message:error.message
    })
}
}

export {authAdmin} 