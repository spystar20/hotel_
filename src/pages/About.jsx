import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import Aos from 'aos'
import { useEffect } from 'react'
import  'aos/dist/aos.css'
const About = () => {
  useEffect(()=>{
    Aos.init({duration:1500})
    },[])
  return (
    <div>
        <div  className='grid grid-cols-1  lg:grid-cols-2 justify-center  bg-black gap-10 py-20  p-10 '>
            <div className='text-white text-center flex flex-col gap-4 '>
                <h2 className='text-6xl underline underline-offset-8 capitalize py-6 font-imperial'>our chef</h2>
                <p className='text-sm font-outfit '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sapiente praesentium eius laboriosam totam? Voluptatum quod in dolor praesentium quia optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta. Voluptate nihil aliquid perspiciatis similique accusantium animi iure minus officiis tempore ullam dolor suscipit nobis odit minima, saepe, deleniti hic eveniet mollitia nam assumenda illo, debitis est. Minus ut deleniti ducimus porro dolor. Vel, eius! placeat fugit exercitationem tenetur labore soluta ullam qui, nobis ab. Veniam, dolore ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis error accusamus excepturi culpa beatae suscipit, quis incidunt nesciunt numquam tempora saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, assumenda! Eius, similique! ad..</p>
            </div>
            <div  className='flex justify-center items-center'>
            <div data-aos="fade-in" className='bg-[#fffff0] p-3 rounded-md'>
                <img  className='w-[20rem]' src="https://i.pinimg.com/474x/39/f5/87/39f587dcf9b1cd667039fd1d738452c3.jpg" alt="" />
            </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center  bg-[#fffff0] gap-10  py-20 px-14 '>
        <div className='flex justify-center items-center'>
            <div data-aos="fade-in" className='bg-black p-3 rounded-md'>
                <img className='w-[20rem]' src="https://i.pinimg.com/474x/57/8b/4e/578b4e5f5c49cb7c91de06349721ba82.jpg" alt="" />
            </div>
            </div>
            <div className='text-black text-center flex flex-col gap-4 '>
                <h2 className='text-6xl underline underline-offset-8 capitalize py-6 font-imperial'>our restaurant</h2>
                <p className='text-sm font-outfit '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam sapiente praesentium eius laboriosam totam? Voluptatum quod in dolor praesentium quia optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, dicta. Voluptate nihil aliquid perspiciatis similique accusantium animi iure minus officiis tempore ullam dolor suscipit nobis odit minima, saepe, deleniti hic eveniet mollitia nam assumenda illo, debitis est. Minus ut deleniti ducimus porro dolor. Vel, eius! placeat fugit exercitationem tenetur labore soluta ullam qui, nobis ab. Veniam, dolore ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias facilis error accusamus excepturi culpa beatae suscipit, quis incidunt nesciunt numquam tempora saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, assumenda! Eius, similique! ad..</p>
            </div>
           
        </div>
         {/* footer */}
     <div className='bg-black py-10'>
          <div className='grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-0' >
          <div className='flex flex-col gap-5 justify-center items-center'><p className='text-6xl text-center font-imperial text-[#fffff0]'>doodle's garden</p>
          <ul className='flex justify-center items-center  text-[#fffff0] gap-16 list-disc  text-pretty  uppercase md:text-base'>
            <li >drink</li>
            <li >drool</li>
            <li>dine</li>
          </ul>
          <ul className='flex text-2xl gap-5 text-[#fffff0]'>  
            <li><FaInstagram /></li>
            <li><FaFacebook /></li>
            <li><FaSquareXTwitter/></li>
          </ul>
          </div>
          <div className='flex flex-col justify-center items-center gap-5' >
            <div className='border-l-[#fffff0] border w-[22.7rem] md:w-[25.1rem]  rounded-full'><input type="text" placeholder='your email'  className='text-center md:pr-[.4rem] md:pl-[0.5rem] text-[#fffff0fb] placeholder:text-[#fffff0fb] text-lg  outline-none bg-transparent' /><button className='bg-[#fffff0] hover:bg-[#fffff0e0] md:px-8 px-5 text-lg font-medium font-outfit py-1 rounded-full text-black'>subscribe now!</button></div>
            <div className='text-[#fffff0] flex gap-3 justify-center items-center text-xl'><MdOutlinePhonePaused className='text-[#fffff0] ' /><p>798245050</p>  </div>
            <div className='text-[#fffff0] flex gap-3 justify-center items-center text-xl'> <HiLocationMarker/><p>DELHI</p> </div>
          </div>
          </div>
          <div>
          <div className='h-[.1rem] my-8 bg-[#fffff0c7] w-full'></div>
          <p className='text-sm font-kalam text-center text-[#fffff0c7]'>Copyright ©2025 created by SANTOSHI. All rights reserved.</p>
          </div>
        </div>
    </div>
  )
}

export default About