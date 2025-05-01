import express from 'express'
import { addDoctor,allDoctors,appointmentsAdmin,loginAdmin, appointmentCancel, adminDashboard } from '../controllers/adminController.js'
import { changeAvailability } from '../controllers/doctorController.js'
import { authAdmin } from '../middlewares/authAdmin.js' 
import upload from '../middlewares/multer.js'

const adminRouter = express.Router() // router creation

adminRouter.post('/add-doctor',authAdmin,upload.single('image'),addDoctor)
adminRouter.post('/login',loginAdmin)
adminRouter.post('/get-all-doctors',authAdmin,allDoctors)
adminRouter.post('/change-availability',authAdmin,changeAvailability)
adminRouter.get('/appointments',authAdmin,appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter