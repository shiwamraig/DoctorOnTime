import express from 'express';
import  {doctorList, logindoctor, appointmentsDoctor, appointmentComplete, appointmentCancel, doctorDashboard,doctorProfile, updateDoctorProfile}  from '../controllers/doctorController.js'
import { authDoctor } from '../middlewares/authDoctor.js';
const doctorRouter = express.Router();
doctorRouter.get('/list', doctorList);
doctorRouter.post('/login', logindoctor);
doctorRouter.get('/appointments', authDoctor, appointmentsDoctor);
doctorRouter.post('/complete-appointment', authDoctor, appointmentComplete)
doctorRouter.post('/cancel-appointment', authDoctor, appointmentCancel)
doctorRouter.get('/dashboard', authDoctor, doctorDashboard)
doctorRouter.get('/Profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile', authDoctor, updateDoctorProfile)

export default doctorRouter;