import { useState,useContext } from 'react'
import { Route, Routes,useNavigate } from "react-router-dom"
import Navbar from '../../components/Navbar'
import { DataContext } from '../../context/DataContext'
import CurrentPosition from '../../components/CurrentPosition'


function PersonalDetail() {

    const navigate = useNavigate()
    const { data, updateData } = useContext(DataContext);


  const [formData, setFormData] = useState(data['personalDetail'] == null ? {firstName:'',lastName:'',email:'',phoneNo:'',github:'',linkedin:''}  : data['personalDetail'] );

 const nextPage =()=>{
  // console.log("sjsj")
    updateData('personalDetail',formData)
    navigate('/app/education'); 
 }
    
  return (
    <>
    <Navbar/>
    <CurrentPosition value={"personal details"}/>
      <h1 className='text-lg lg:text-5xl text-center text-white'>Personal Details</h1>
      <PersonalDetailInput formData={formData} setFormData={setFormData}/>
      <div className='flex justify-end mx-[10%] mb-[10%]'>    
            <button onClick={nextPage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
      </div>
    </>
  )
}

const PersonalDetailInput = ({formData,setFormData}) =>{

   const handleFormChange = (event) => {
      const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    }


  return(
       <div className='bg-gray-900 py-[2%]'>
        <div className='xl:mx-[20%] mx-[10%]'>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label  className="block mb-2 text-sm font-medium text-white">First name</label>
                    <input type="text" id="first_name" value={formData.firstName} onChange={(e)=>{handleFormChange(e)}} name='firstName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-white">Last name</label>
                    <input type="text" id="last_name" value={formData.lastName} onChange={(e)=>{handleFormChange(e)}} name='lastName' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-white">Email address</label>
                    <input type="email" id="email"  value={formData.email}  onChange={(e)=>{handleFormChange(e)}} name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
                </div> 
                
                <div>
                    <label  className="block mb-2 text-sm font-medium text-white">Phone number</label>
                    <input type="tel" id="phone"  value={formData.phoneNo}  onChange={(e)=>{handleFormChange(e)}} name='phoneNo' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 012-345-6789" required/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-white">Github URL</label>
                    <input type="url" id="github" value={formData.github}  onChange={(e)=>{handleFormChange(e)}}  name='github' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="github.com/id" required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-white">Linkedin URL</label>
                    <input type="url" id="linkedin" value={formData.linkedin}  onChange={(e)=>{handleFormChange(e)}} name='linkedin' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="linkedin.com/id" required/>
                </div>
            </div>
        </div>

    </div>
  )

}


export default PersonalDetail
