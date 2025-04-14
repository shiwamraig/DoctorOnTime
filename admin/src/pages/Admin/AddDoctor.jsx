import React from "react";
import { assets } from "../../assets/assets";
const AddDoctor = () => {
  return (
    <form className="m-5 w-full ">

      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll border-gray-100">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img className="w-16 bg-gray-100 rounded-full cursor-pointer"  src={assets.upload_area} alt="" />
          </label>
          <input type="file" id="doc-img" hidden />
          <p>
            Upload Doctor <br /> Picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex-col gap-4">

            <div className="flex-1 flex flex-col gap-1 ">
              <p>Doctor name</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Name" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor email</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Email" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Doctor password</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="password" placeholder="Password" required />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select className="border rounded px-3 py-2 border-gray-200" name="" id="">
                <option value="1 year">1 Year</option>
                <option value="2 year">2 Year</option>
                <option value="3 year">3 Year</option>
                <option value="4 year">4 Year</option>
                <option value="5 year">5 Year</option>
                <option value="6 year">6 Year</option>
                <option value="7 year">7 Year</option>
                <option value="8 year">8 Year</option>
              </select>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <p>Fee</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="number" placeholder="fees" required />
            </div>
          </div>
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select className="border rounded px-3 py-2 border-gray-200" name="" id="">
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterlogist">Gastroenterlogist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="Education" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="address1" required />
              <input className="border rounded px-3 py-2 border-gray-200" type="text" placeholder="address2" required />
            </div>
          </div>
        </div>
        <div className="mt-4 mb-2">
          <p>About Doctor</p>
          <textarea className="w-full px-4 pt-2 border rounded  border-gray-200" placeholder="write about doctor" rows={5} required />
        </div>
        
        <button className="bg-[#5f6fff] px-10 py-3 mt-4 text-white rounded-full">Add doctor</button>
      </div>
    </form>
  );
};

export default AddDoctor;
