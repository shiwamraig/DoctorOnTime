import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';

// app config
const app = express(); // creates a new express server
const port = process.env.PORT || 4000;
dotenv.config();
connectDB()
connectCloudinary()


// middlewares
app.use(express.json()); // Automatically converts incoming JSON data into JavaScript objects.
app.use(cors()); // Allows cross-origin requests from the frontend to the backend server.   


// api endpoints
app.use('/api/admin',adminRouter)
//localhost:4000/api/admin




////When someone visits http://localhost:4000/, this function runs.
app.get('/', (req, res) => {
    res.send('api working properly '); 


});

//Starts the server and listens on the given port.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); 
});