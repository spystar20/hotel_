
import 'aos/dist/aos.css'
import Aos from 'aos';
import React from 'react';
import { Parallax } from 'react-parallax';

import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlinePhonePaused } from 'react-icons/md';
import { RiCupFill } from "react-icons/ri";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoTvSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
const Menu = () => {

    return (
<div className='bg-[#fffff0]'>
             <Parallax  className='w-[100%] h-[29vh] md:h-[46vh] lg:h-[100vh]' bgImageSizes='cover'  bgImage='https://www.hotelsinleipzig.de/data/Imgs/OriginalPhoto/12768/1276860/1276860733/img-intercityhotel-04105-leipzig-9.JPEG' strength={300} >     
             </Parallax>
             
             <div className='bg-[#fffff0]  px-5 lg:px-20'>
              <div className='capitalize text-center py-10'>
              <h2 className='text-3xl font-antonio font-semibold capitalize'>rooms</h2>
              <p className='font-thin pt-4'>Lorem ipsum dolor Lorem ipsum dolor sit. sit.</p>
              </div>
              {/* <div className='flex flex-col gap-10 justify-center items-center'> */}
              <div className='md:px-10 py-8 flex flex-col gap-10 justify-center items-center'>
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-3 lg:gap-5 border border-black rounded-xl px-3 py-1'> 
              <div className='flex items-center justify-center'> <img src="https://i.pinimg.com/474x/8c/97/8c/8c978c3e0b12f42561122eba19c27662.jpg" alt="" /></div>
              <div className='flex flex-col justify-center items-center lg:pl-5 gap-5 lg:gap-12'>
              <div className='flex  capitalize  flex-col justify-center items-center gap-5'>
                <h2 className='font-outfit font-semibold text-3xl'>single room</h2>
                <p className='font-light text-center'>Lorem quis quibusdam assumenda incidunt veritatis possimus sit quia maxime.</p>
              </div>
              <div className='text-2xl relative  flex gap-5 justify-start items-center cursor-pointer bg-black text-[#fffff0] p-2 rounded-xl'>
                <div className='group'>
              <RiCupFill  className='hover '/>
              <p className='absolute hidden group-hover:block bottom-10 right-6 bg-black text-white text-sm font-light px-3  rounded-xl'>breakfast include</p>
              </div>
              <div className='group'>
              <PiForkKnifeFill  />
              <p className='absolute hidden group-hover:block bottom-10 left-6 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>restraunt</p>
              </div>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center px-12 lg:py-10  gap-5 lg:gap-12'>
              <div className='font-outfit capitalize pt-3 lg:pb-8 text-center '>
                <h2 className='text-3xl font-semibold'> ₹ 8,900</h2>
                <p className='font-light lg:pt-5'>per night</p>
                </div>
                <div><button className='bg-black text-[#fffff0] font-outfit rounded-xl text-lg font-semibold capitalize px-4 py-2'>book now</button></div>
              </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-3 lg:gap-5 border border-black rounded-xl px-3 py-1'> 
              <div className='flex items-center justify-center'> <img src="https://i.pinimg.com/474x/42/b6/8c/42b68cd2490f7a0467234a71b4d4d6fb.jpg" alt="" /></div>
              <div className='flex flex-col justify-center items-center lg:pl-5 gap-5 lg:gap-12'>
              <div className='flex  capitalize  flex-col justify-center items-center gap-5'>
                <h2 className='font-outfit font-semibold text-3xl'>double room</h2>
                <p className='font-light text-center'>Lorem quis quibusdam assumenda incidunt veritatis possimus sit quia maxime.</p>
              </div>
              <div className='text-2xl relative  flex gap-5 justify-start items-center cursor-pointer bg-black text-[#fffff0] p-2 rounded-xl'>
                <div className='group'>
              <RiCupFill  className='hover '/>
              <p className='absolute hidden group-hover:block bottom-10 right-6 bg-black text-white text-sm font-light px-3  rounded-xl'>breakfast include</p>
              </div>
              <div className='group'>
              <PiForkKnifeFill  />
              <p className='absolute hidden group-hover:block bottom-10 left-6 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>restraunt</p>
              </div>
              <div className='group'>
              <IoTvSharp /> 
              <p className='absolute hidden group-hover:block bottom-10 left-10 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>plasma TV</p>
              </div>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center px-12 lg:py-10  gap-5 lg:gap-12'>
              <div className='font-outfit capitalize pt-3 lg:pb-8 text-center '>
                <h2 className='text-3xl font-semibold'> ₹ 18,900</h2>
                <p className='font-light lg:pt-5'>per night</p>
                </div>
                <div><button className='bg-black text-[#fffff0] font-outfit rounded-xl text-lg font-semibold capitalize px-4 py-2'>book now</button></div>
              </div>
              </div>
            
            
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-3 lg:gap-5 border border-black rounded-xl px-3 py-1'> 
              <div className='flex items-center justify-center'> <img src="https://i.pinimg.com/474x/a3/2e/69/a32e6987fd66f09dada5bd617b2d5e1d.jpg" alt="" /></div>
              <div className='flex flex-col justify-center items-center lg:pl-5 gap-5 lg:gap-12'>
              <div className='flex  capitalize  flex-col justify-center items-center gap-5'>
                <h2 className='font-outfit font-semibold text-3xl text-center'>honeymon special room</h2>
                <p className='font-light text-center'>Lorem quis quibusdam assumenda incidunt veritatis possimus sit quia maxime.</p>
              </div>
              <div className='text-2xl relative  flex gap-5 justify-start items-center cursor-pointer bg-black text-[#fffff0] p-2 rounded-xl'>
                <div className='group'>
              <RiCupFill  className='hover '/>
              <p className='absolute hidden group-hover:block bottom-10 right-6 bg-black text-white text-sm font-light px-3  rounded-xl'>breakfast include</p>
              </div>
              <div className='group'>
              <PiForkKnifeFill  />
              <p className='absolute hidden group-hover:block bottom-10 left-6 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>restraunt</p>
              </div>
              <div className='group'>
              <IoTvSharp /> 
              <p className='absolute hidden group-hover:block bottom-10 left-10 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>plasma TV</p>
              </div>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center px-12 lg:py-10  gap-5 lg:gap-12'>
              <div className='font-outfit capitalize pt-3 lg:pb-8 text-center '>
                <h2 className='text-3xl font-semibold'> ₹ 69,900</h2>
                <p className='font-light lg:pt-5'>per night</p>
                </div>
                <div><button className='bg-black text-[#fffff0] font-outfit rounded-xl text-lg font-semibold capitalize px-4 py-2'>book now</button></div>
              </div>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-3 lg:gap-5 border border-black rounded-xl px-3 py-1'> 
              <div className='flex items-center justify-center'> <img src="https://i.pinimg.com/474x/c1/83/70/c18370707df82322caf4fa6d2f5d1629.jpg" alt="" /></div>
              <div className='flex flex-col justify-center items-center lg:pl-5 gap-5 lg:gap-12'>
              <div className='flex  capitalize  flex-col justify-center items-center gap-5'>
                <h2 className='font-outfit font-semibold text-3xl'>deluxe room</h2>
                <p className='font-light text-center'>Lorem quis quibusdam assumenda incidunt veritatis possimus sit quia maxime.</p>
              </div>
              <div className='text-2xl relative  flex gap-5 justify-start items-center cursor-pointer bg-black text-[#fffff0] p-2 rounded-xl'>
                <div className='group'>
              <RiCupFill  className='hover '/>
              <p className='absolute hidden group-hover:block bottom-10 right-6 bg-black text-white text-sm font-light px-3  rounded-xl'>breakfast include</p>
              </div>
              <div className='group'>
              <PiForkKnifeFill  />
              <p className='absolute hidden group-hover:block bottom-10 left-6 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>restraunt</p>
              </div>
              <div className='group'>
              <IoTvSharp /> 
              <p className='absolute hidden group-hover:block bottom-10 left-10 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>plasma TV</p>
              </div>
              <div className='group'>
              <FaWifi />
              <p className='absolute hidden group-hover:block bottom-10 left-32 bg-black text-white text-sm font-light px-3 py-1 rounded-xl'>wifi</p>
              </div>
              </div>
              </div>
              <div className='flex flex-col justify-center items-center px-12 lg:py-10  gap-5 lg:gap-12'>
              <div className='font-outfit capitalize pt-3 lg:pb-8 text-center '>
                <h2 className='text-3xl font-semibold'> ₹ 80,900</h2>
                <p className='font-light lg:pt-5'>per night</p>
                </div>
                <div><button className='bg-black text-[#fffff0] font-outfit rounded-xl text-lg font-semibold capitalize px-4 py-2'>book now</button></div>
              </div>
              </div>
              </div>
           
          
              </div>
              <div>
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
          <div className='h-[.1rem] my-8  w-full'></div>
          {/* <p className='text-sm font-kalam text-center text-[#fffff0c7]'>Copyright ©2025 created by SANTOSHI. All rights reserved.</p> */}
          </div>
        </div>
   
        </div>
    )
}

export default Menu