import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorProfile = () => {

  const {dToken, profileData, setProfileData, getProfileData} = useContext(DoctorContext)
  const {currency, backendUrl} = useContext(AppContext)

  useEffect(()=>{

          if (dToken) {
            getProfileData()
            
          }

  },[dToken])

  return profileData && (
    <div>
      
        <div>
          <div>
            <img src={profileData.image} alt="" />
          </div>
        </div>

    </div>
  )
}

export default DoctorProfile
