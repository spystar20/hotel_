import React from 'react'
import { Parallax } from 'react-parallax'
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail, MdOutlinePhonePaused } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';


const Contact = () => {
  return (
    <div>
        <Parallax className='w-[100%] h-[29vh] md:h-[46vh] lg:h-[100vh]' bgImageSizes='cover' bgImage='https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg' strength={300}>
        <div className='text-center flex justify-center items-center flex-col text-white h-[29vh] md:h-[46vh] lg:h-[100vh] lg:py-20'>
<h2 className='md:text-7xl text-4xl font-semibold font-imperial'>
Contact Us</h2>
<p className='font-outfit  text-xs md:px-32 md:text-lg text-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil sed, corrupti laudantium nesciunt minus nobis vero voluptatibus. </p>
</div>
        </Parallax>
        {/* contact */}
        <div className='bg-[#fffff0] py-10 px-5 md:py-20 lg:px-10'>
            <div className='grid grid-cols-1  gap-9 md:gap-14 lg:gap-5 lg:grid-cols-2 py-6 '>
            <div className='flex flex-col md:gap-10 lg:pt-24 justify-center items-center gap-6'>    
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-5'>
            <div className='flex flex-col py-8 px-16  bg-black rounded-2xl cursor-pointer  hover:-translate-y-3 transition-all text-[#fffff0] justify-center items-center gap-2 '>
            <FaPhoneAlt className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg font-semibold capitalize'>phone</h1>
            <p className='font-outfit font-thin '>+91xxxxxxx67</p>
            </div>
            <div className='flex flex-col py-8 px-16 justify-centercursor-pointer hover:-translate-y-3 transition-all  bg-black rounded-2xl text-[#fffff0] items-center gap-2 '>
            <IoLogoWhatsapp className='text-4xl  text-center'/>
            <h1 className='font-outfit text-lg capitalize'>whatsapp</h1>
            <p className='font-outfit font-thin '>+91xxxxxxx67</p>
            </div>
        
            <div className='flex flex-col justify-center py-8 cursor-pointer  px-16  hover:-translate-y-3 transition-all  bg-black rounded-2xl text-[#fffff0] items-center gap-2 '>
            <MdEmail className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg capitalize'>E-mail</h1>
            <p className='font-outfit font-thin '>khushisantoshi21@gmail.com</p>
            </div>
            <div className='flex flex-col justify-center py-8 px-16 cursor-pointer hover:-translate-y-3 transition-all  bg-black rounded-2xl text-[#fffff0] items-center gap-2 '>
            <MdTableRestaurant className='text-4xl text-center'/>
            <h1 className='font-outfit text-lg capitalize'>location</h1>
            <p className='font-outfit font-thin '>delhi</p>
        
            </div>
        </div>
        <div>
            <img className='w-[30rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3tiNOO4g8aA0JWZgzNiVFgXXBuoEzQBHdxQ&s" alt="" />
        </div>        
        </div>
        {/* get in touch */}
        <div className='flex flex-col md:px-12 gap-6'>
            <div className='text-black text-left flex flex-col gap-6 '>
            <h2 className='text-6xl font-bold font-antonio capitalize '>Get in touch </h2>
            <p className='font-outfit font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maiores dolorem repellat</p>
            </div>
            <div className='text-lg capitalize   font-outfit text-black flex fl-1 flex-col gap-4'>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <h1>name</h1>
                    <input type="text" className='border px-3 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='your name here...'/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <h1>email</h1>
                    <input type="text" className='border px-3 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='Example@yourmail.com...'/>
                </div>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <h1>message</h1>
                    <textarea name="" className='border px-3 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent ' placeholder='Type..' id="" cols="30" rows="4"></textarea>
            </div>
            <div><button className=' border-black border  bg-transparent hover:bg-black hover:text-white text-xl capitalize text-black px-3 py-2 rounded-xl ' >send now</button></div>
            </div>
        </div>
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

export default Contact