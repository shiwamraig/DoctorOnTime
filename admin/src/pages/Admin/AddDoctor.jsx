import React, { useState ,useContext} from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";
const AddDoctor = () => {

const [docImg, setDocImg] = useState(false)
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [experience, setExperience] = useState("1 Year")
const [fees, setFees] = useState("")
const [about, setAbout] = useState("")
const [speciality, setSpeciality] = useState("General Physician")
const [degree, setDegree] = useState("")
const [address1, setAddress1] = useState("")
const [address2, setAddress2] = useState("")

const {backendUrl,aToken} = useContext(AdminContext)

const onSubmitHandler = async (event) => {
  event.preventDefault() // prevent default form submission

  try{
    if(!docImg){
      return toast.error('Image not selected')
    }

    const formData= new FormData() //This creates a special object (formData) that can hold files (like images) and text

    formData.append('image',docImg)
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',password)
    formData.append('experience',experience)
    formData.append('fees',Number(fees))
    formData.append('about',about)
    formData.append('speciality',speciality)
    formData.append('degree',degree)
    formData.append('address',JSON.stringify({line1 : address1, line2:address2}))

    //console log formData : This just prints out everything inside formData to the browser console so the developer can check what's being sent.
    // formData.forEach((value,key)=>{
    //   console.log(`${key}: ${value}`)
    // })

    const {data} = await axios.post(backendUrl+'api/admin/add-doctor',formData,{headers:{aToken}}) //aToken will be converted into atoken bcoz of similar naming in  authAdmin.js

    
    if(data.success){
      toast.success(data.message)
      setDocImg(false)
      setName("")
      setEmail("")
      setPassword("")
      setFees("")
      setAbout("")
      setDegree("")
      setAddress1("")
      setAddress2("")

    }
    else{
      toast.error(data.message)
    }

  }
  catch(error){
    toast.error(error.message)
    console.log(error)
  }
}



  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full ">

      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer"  src={ docImg ? URL.createObjectURL(docImg) :assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex-col gap-4">

            <div className="flex-1 flex flex-col gap-1 ">
              <p>Doctor name</p>
              <input onChange={(e)=> setName(e.target.value )} value={name} className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Name" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor email</p>
              <input onChange={(e)=> setEmail(e.target.value )} value={email} className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Email" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor password</p>
              <input onChange={(e)=> setPassword(e.target.value )} value={password} className="border rounded px-3 py-2 border-gray-200" type="password" placeholder="Password" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select onChange={(e)=> setExperience(e.target.value )} value={experience} className="border rounded px-3 py-2 border-gray-200" name="" id="">
                <option value="1 year">1 Year</option>
                <option value="2 years">2 Years</option>
                <option value="3 years">3 Years</option>
                <option value="4 years">4 Years</option>
                <option value="5 years">5 Years</option>
                <option value="6 years">6 Years</option>
                <option value="7 years">7 Years</option>
                <option value="8 years">8 Years</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fee</p>
              <input onChange={(e)=> setFees(e.target.value )} value={fees} className="border rounded px-3 py-2 border-gray-200" type="number" placeholder="fees" required />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select onChange={(e)=> setSpeciality(e.target.value )} value={speciality} className="border rounded px-3 py-2 border-gray-200" name="" id="">
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterlogist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input onChange={(e)=> setDegree(e.target.value )} value={degree} className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Education" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input onChange={(e)=> setAddress1(e.target.value )} value={address1} className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="address1" required />
              <input onChange={(e)=> setAddress2(e.target.value )} value={address2} className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="address2" required />
            </div>
          </div>
        </div>
        <div className="mt-4 mb-2">
          <p>About Doctor</p>
          <textarea onChange={(e)=> setAbout(e.target.value )} value={about} className="w-full px-4 pt-2 border rounded  border-gray-200" placeholder="write about doctor" rows={5} required />
        </div>
        
        <button className="bg-[#5f6fff] px-10 py-3 mt-4 text-white rounded-full cursor-pointer">Add doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
