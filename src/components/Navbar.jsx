import React from 'react'
import logo from '../assets/logo.jpg'
import { Link } from 'react-router'
import { CiMenuKebab } from "react-icons/ci";
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
const Navbar = () => {
 useEffect(()=>{
    Aos.init({duration:1500})
    },[])
  return (
    <div data-aos="fade-in" className='w-full capitalize nav'>
         {/* <div className='bg-[#fffff0]  h-[7rem] absolute w-full rounded-full p-2 cursor-pointer '>
<ul className=' lg:hidden justify-between  capitalize text-lg font-outfit '>
        <Link to="/"><li className=' cursor-pointer hover-underline-animation   left'>home</li></Link>
         <Link to="/Menu"><li className=' cursor-pointer hover-underline-animation left'>menu</li></Link> 
          <Link to="/Venue"><li className='cursor-pointer hover-underline-animation left'>venue</li></Link> 
          <Link to="/Contact"><li className='cursor-pointer hover-underline-animation left '>contact us</li></Link>
        <Link to="/About"><li className='cursor-pointer hover-underline-animation left'>about us</li></Link>
        </ul>
</div> */}
        <div  className='flex items-start justify-between lg:items-center py-6 px-4 lg:py-0 md:px-20 '>
        <ul className='lg:flex grid grid-cols-2 justify-between gap-5 lg:gap-14 capitalize text-lg font-outfit md:hidden'>
        <Link to="/"><li className='text-black cursor-pointer hover-underline-animation   left'>home</li></Link>
         <Link to="/Menu"><li className='text-black cursor-pointer hover-underline-animation left'>menu</li></Link> 
          <Link to="/Venue"><li className='cursor-pointer hover-underline-animation left'>venue</li></Link> 
          <Link to="/Contact"><li className='cursor-pointer hover-underline-animation left '>contact us</li></Link>
        <Link to="/About"><li className='cursor-pointer hover-underline-animation left'>about us</li></Link>
        </ul>
        <div><img className='hidden md:w-[15vw] lg:w-[7vw] rounded-br-3xl rounded-tl-3xl' src={logo} alt="" /></div>
        <div> <Link to="/Booking"><button className='button-1 rounded-2xl font-outfit text-base'>book a table</button></Link></div>

        
        </div>

     
    </div>
  )
}

export default Navbar