import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";
import userModel from "../models/userModel.js";


// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // checking for all data to add doctor
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address
    ) {
      return res.json({
        success: false,
        message: "missing details",
      });
    }

    // validating email format
    if (!validator.isEmail(email)) {
      //validator is an npm package used for validating user input like phone numbers,email,URL's etc.
      return res.json({
        success: false,
        message: "please enter a valid email",
      });
    }

    // validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "please enter a strong password",
      });
    }

    // hashing doctor password
    const salt = await bcrypt.genSalt(10); // genSalt creates a random string (salt) to make password hashing more secure.
    const hashedPassword = await bcrypt.hash(password, salt);

    
    const filePath = req.file?.path;
    if (!filePath) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    //upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    const newDoctor = new doctorModel(doctorData); // doctorModel(class) , newDoctor = real object

    await newDoctor.save();
    res.json({
      success: true,
      message: "doctor added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// API for Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET); 
      res.json({
        success: true,
        message: "Login success",
        token: token,
      });
    } else {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};


// API to get all doctors list for admin panel
const allDoctors = async(req,res)=>{
  try{

    const doctors = await doctorModel.find({}).select('-password') //doctorModel.find({}): This queries the MongoDB database to find all doctors.The empty {} means: no filters — get every doctor.
    res.json({success:true,doctors})

  }
  catch(error){
    console.log(error)
    res.json({success:false,message:error.message})
  } 
}

// API to all appointments list 
const appointmentsAdmin = async(req,res)=>{
  try {
    const appointments = await appointmentModel.find()
    console.log("Appointments sent to frontend:", appointments);

    res.json({success:true,appointments})
    
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
    
  }
}

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);


    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    // release the booked slot in doctor data
    const { docId, slotDate, slotTime } = appointmentData;

    const docData = await doctorModel.findById(docId);
    const slots_booked = docData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment cancelled successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// API to get dashboard fata for admin panel
const adminDashboard = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    const users = await userModel.find({});
    const appointments = await appointmentModel.find({});


    const dashData = {
      doctors: doctors.length,
      appointments: appointments.length,
      patients: users.length,
      latestAppointments: appointments.slice(0,5).reverse()
    }

    res.json({ success: true, dashData })

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}


export { addDoctor, loginAdmin,allDoctors,appointmentsAdmin, appointmentCancel, adminDashboard };
