import { createContext,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AdminContext = createContext()
const AdminContextProvider = (props ) => {
    const[aToken,setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const backendUrl = import.meta.env.VITE_BACKEND_URL +'/'

    const [doctors, setDoctors] = useState([])
    const getAllDoctors = async () => {
        try{
            const {data} = await axios.post(backendUrl + 'api/admin/get-all-doctors',{}, {headers:{aToken}}) //uses Axios, which is a tool that helps your website talk to a server
            if(data.success){
                setDoctors(data.doctors)
                console.log(data.doctors)
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }

    const changeAvailability = async (docId) => {
        try {
            const {data}= await axios.post(backendUrl + 'api/admin/change-availability', {docId}, {headers:{aToken}}) 
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    //This is the stuff that will be available to other parts of your app — any component inside this provider can use these values.
    const value = {
        aToken,
        setAToken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailability
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider
