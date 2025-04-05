import dotenv from 'dotenv';
dotenv.config();
import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
// ✅ Log to check if values are loading
console.log("ENV CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
console.log("ENV CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("ENV CLOUDINARY_SECRET_KEY:", process.env.CLOUDINARY_SECRET_KEY);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME.trim(),   
    api_key: process.env.CLOUDINARY_API_KEY.trim(),   
    api_secret: process.env.CLOUDINARY_SECRET_KEY.trim()
});





// API for adding doctor

const addDoctor = async (req, res) =>{

    try{
        const {name , email , password, speciality,degree, experience, about, fees, address} = req.body
        const imageFile = req.file
        
        // checking for all data to add doctor 
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address){
            return res.json(
                {
                    success:false,
                    message:"missing details"
                }
            )
        }

        // validating email format 
        if(!validator.isEmail(email)){ //validator is an npm package used for validating user input like phone numbers,email,URL's etc.
            return res.json(
                {
                    success:false,
                    message:"please enter a valid email"
                }
            )
        }

        // validating strong password 
        if(password.length<8){
            return res.json(
                {
                    success:false ,
                    message:"please enter a strong password"
                }
            )
        }

        // hashing doctor password 
        const salt= await bcrypt.genSalt(10)  // genSalt creates a random string (salt) to make password hashing more secure.
        const hashedPassword = await bcrypt.hash(password,salt)

        //upload image to cloudinary
    
        const imageUpload = await cloudinary.uploader.upload(req.file.path, {
            folder: "doctors", // Optional: Save in a specific folder
            resource_type: "image"
        });
        
        const imageUrl = imageUpload.secure_url

        const doctorData= {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData) // doctorModel(class) , newDoctor = real object
        
        await newDoctor.save()
        res.json(
            {
                success:true,
                message:"doctor added"
            }
        )


    }
    catch(error){
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
    }

}

// API for Admin Login
const loginAdmin = async(req,res)=>{
    try{
        const {email,password}= req.body
        if(email === process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD ){
            const token  = jwt.sign(email + password,process.env.JWT_SECRET) //⚠️Joining email + password like this isn't safe — it's better to send them as an object
            res.json({
                success:true,
                message:"Login success",
                token:token
            })
        }
        else{
            return res.json({
                success:false,
                message:"Invalid credentials"
            })
        }
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}




export {addDoctor,loginAdmin}