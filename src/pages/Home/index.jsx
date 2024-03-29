import { useState } from 'react'
import Navbar from '../../components/Navbar'
import ResumeImage from '../../assets/jakesresume.jpg'
import { Route, Routes, Link } from "react-router-dom"

const Home = () =>{

  return(
  <>
    <div className='bg-gray-900 h-screen'>
      {/* navBar */}
      <Navbar/>
      <div className='  flex flex-col md:flex-row   h-[90%] space-x-20'>

        <div className=' flex flex-col justify-center'>
          <div className='mb-[20%] ml-[10%]'>
            <h2 className='md:text-5xl text-lg text-center md:text-start font-bold text-white'>Resume builder</h2>
            <h2 className='md:text-5xl text-lg text-center md:text-start font-bold text-white'>EASY ONLINE BUILDER</h2>    
            <h2 className='md:text-5xl text-lg text-center md:text-start font-bold text-white'>Jake's resume as the templete</h2>    
            <ul className='text-lg space-y-2 font-light text-gray-200'>
              {/* <li className='ml-[10%] font-bold text-white'>Jake's resume as the templete</li> */}
              <li className='text-white text-xs text-center md:text-left md:text-xl'>The only resume builder you will ever need</li>
              <li className=' font-serif text-sm text-center pr-3 sm:text-left sm:text-lg sm:pl-0'>Professional out-of-the-box resumes, instantly generated by the most advanced resume builder technology available.</li>
              <li className=' font-serif text-sm text-center pr-3 sm:text-left sm:text-lg sm:pl-0'>Effortless crafting. Real-time preview & pre-written resume examples.</li>
              <li className=' font-serif text-sm text-center pr-3 sm:text-left sm:text-lg sm:pl-0'>Land your dream job with the perfect resume employers are looking for!</li>
            </ul> 

             <div className='flex  justify-center py-[2%] mt-10'>
                <Link to={'/app/personal-detail'}>
                  <button className="relative inline-flex  items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Make Resume
                    </span>
                  </button>
                </Link>
              </div>  
          </div> 

         
        </div>

        <div className='hidden  lg:flex overflow-hidden p-[2%]'>
          <img src={ResumeImage} className='' alt="" />
        </div>
        

      </div>

    </div>
  </>
  )
}

export default Home