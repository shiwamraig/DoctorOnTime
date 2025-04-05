import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    specialization: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Number, required: true },
    slots_booked: { type: Object, default: {} },
  },
  { minimize: false }
    //Normally, Mongoose removes empty objects ({}) from documents.
    //Setting minimize: false ensures that empty objects (e.g., slots_booked: {}) remain in the database.
);

const doctorModel = mongoose.models.doctor || mongoose.model("doctor", doctorSchema);
// mongoose.models - is an object that stores all the models created in Mongoose.
// mongoose.models.doctor - checks if a model named "doctor" already exists.
export default doctorModel;