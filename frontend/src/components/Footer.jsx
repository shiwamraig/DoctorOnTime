import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ----- Left Section ----- */}
            <div>
                  <img className='mb-5 w-60 ' src={assets.logo} alt="" />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Dr.On Time, we value your health and your time. Book doctor appointments effortlessly, connect with trusted healthcare professionals, and manage your visits—all from the comfort of your home. Reliable, fast, and hassle-free healthcare at your fingertips!</p>
            </div>
            
            {/* ----- Center Section ----- */}
            <div>
                <p className='text-xl font-medium mb-5 mt-8'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* ----- Right Section ----- */}
            <div>
                <p className='text-xl font-medium mb-5 mt-8'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91 0000000000</li>
                    <li>xyz@gmail.com</li>
                </ul>
            </div>
        </div>

        {/* -----Copyright text ----- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Dr.OnTime -All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer