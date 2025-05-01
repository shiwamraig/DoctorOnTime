import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-white border-r">
      {aToken && (
        <ul>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/admin-dashboard'}
          >
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/all-appointments'}
          >
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/add-doctor'}
          >
            <img src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Doctor</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/doctors-list'}
          >
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Doctors List</p>
          </NavLink>
        </ul>
      )}

      {dToken && (
        <ul>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/doctors-dashboard'}
          >
            <img src={assets.home_icon} alt="" />
            <p className='hidden md:block'>Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/doctors-appointments'}
          >
            <img src={assets.appointment_icon} alt="" />
            <p className='hidden md:block'>Appointments</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer hover:bg-gray-100 ${ // Added hover:bg-gray-100
                isActive ? 'bg-[#f2f3ff] border-r-4 border-[#5f6fff]' : ''
              }`
            }
            to={'/doctors-profile'} // Assuming this should be '/doctors-profile' as in previous examples
          >
            <img src={assets.people_icon} alt="" />
            <p className='hidden md:block'>Profile</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

// what is navling and it's isActive feature

// Imagine you’re on the admin dashboard, and there’s a sidebar with multiple options like “Dashboard”, “Appointments”, etc.
// We want users to see clearly which page they’re on.
// So we add background color and border styles to the active tab using isActive.
