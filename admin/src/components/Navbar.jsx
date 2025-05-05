import React, { use } from 'react'
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { assets } from '../assets/assets.js'
import { AdminContext } from '../context/AdminContext.jsx'
import { DoctorContext } from '../context/DoctorContext.jsx'
const Navbar = () => {

  const {aToken,setAToken}=useContext(AdminContext)
  const {dToken,setDToken}=useContext(DoctorContext)
  
    const navigate = useNavigate()
    
    const logout=()=>{
      navigate('/')
      aToken && setAToken('') //👉 "If aToken is true, then run setAToken('')"
      aToken && localStorage.removeItem('aToken')
      dToken && setDToken('')
      dToken && localStorage.removeItem('dToken')
    }

  return (
    <div className='flex justify-between items-center px-4 py-3 border-b border-gray-200 bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin':'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-[#5f6fff] text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
