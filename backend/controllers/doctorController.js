import doctorModel from "../models/doctorModel.js"
export const changeAvailability = async (req, res) => {
    try {
        const {docId}= req.body //req.body contains the data sent by the client (usually from a form or API call) in the body of the request.
        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({success:true,message:"Availability changed successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export const doctorList = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select('-password , -email')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}



