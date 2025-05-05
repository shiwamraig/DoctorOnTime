import mongoose from "mongoose";
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database connected'));
    await mongoose.connect(`${process.env.MONGODB_URI}/docontime`)//backend-only URI (Uniform Resource Identifier) used by your server (Node.js + Mongoose) to connect to a MongoDB database in the cloud — usually MongoDB Atlas.

}




export default connectDB;