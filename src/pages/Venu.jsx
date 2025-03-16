import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import { Parallax } from 'react-parallax'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
const Venu = () => {
      useEffect(()=>{
        Aos.init({duration:2000})
        },[])
  return (
    <div className='w-full bg-[#fffff0]  h-screen '>
        <Parallax bgImage='https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' bgImageSizes='cover' className='w-[100%] h-[29vh] md:h-[46vh] lg:h-[100vh]' strength={200}></Parallax>
        
<div className='lg:py-20 lg:px-10 px-5 py-10 grid-cols-1 grid gap-6 lg:gap-12  bg-[#fffff0] '>
<h1 data-aos="zoom-in" className='text-6xl lg:text-8xl text-black font-imperial text-center   '>gallery</h1>
    <div className='grid grid-cols-5 justify-center  gap-4 items-center md:flex lg:gap-8 '>
        <div data-aos="flip-up"   className='img-hover-zoom items-center'>
    <img className='w-[15vw] ' src="https://i.pinimg.com/474x/25/85/f1/2585f1c723e71f25c64a459a97a2ed2c.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/474x/81/fb/f8/81fbf81c7e00e87af5da1506c074fc20.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[17vw]' src="https://i.pinimg.com/736x/51/52/2c/51522c72a5a8e2d28f81d9c3dd600822.jpg" alt="" />
    </div>
    <div data-aos="flip-up"  className='img-hover-zoom'>
    <img className='w-[19vw]' src="https://i.pinimg.com/474x/d7/1d/b2/d71db2b0c1ed9141d71075b49b88a771.jpg" alt="" />
    </div>
    <div data-aos="flip-up"   className='img-hover-zoom'>
    <img className='w-[15.5vw]' src="https://i.pinimg.com/474x/7d/b0/6c/7db06c72f8c7932681147568826c19fd.jpg" alt="" />
    </div>
    </div>
   
<div className='grid grid-cols-3 md:flex justify-center items-center md:gap-8'>
<div data-aos="flip-down"  className='img-hover-zoom'  >
<img className='w-[25vw] rounded-xl' src="https://i.pinimg.com/736x/4a/d5/ac/4ad5acc7391af48b62e4670826ce13ca.jpg" alt="" /></div>
<div data-aos="flip-down" className='img-hover-zoom'>
    <img   className='w-[25vw] rounded-xl' src="https://i.pinimg.com/474x/44/1c/9c/441c9c36ea31cc8ec60346bc07ed8bb1.jpg" alt="" />
</div>
<div data-aos="flip-down"  className='img-hover-zoom'>
    <img className='w-[25vw] rounded-xl' src="https://i.pinimg.com/474x/4e/01/80/4e01805e70f4ce206e4644c98abfc3d6.jpg" alt="" />
</div>
    </div>
    </div>
    <div className=' bg-[#fffff0]'>
      
    <div className='grid gap-12 md:px-20 py-16 justify-center items-center '>
    <div className='grid grid-cols-3 md:grid-cols-3'>
    <div data-aos="fade-in"  className='img-hover-zoom'>       
    <img  src="https://i.pinimg.com/474x/d7/d9/a3/d7d9a38b7fd3748d21ed2a245d849cfe.jpg"></img>
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/474x/c7/9d/33/c79d3340e47b22fb3258612f16f64e67.jpg" alt="" />
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img  src="https://i.pinimg.com/474x/e2/f5/a8/e2f5a88e84045815be7437555244c0b9.jpg" alt="" />
    </div>
    </div>
    <div className='grid grid-cols-3'>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/474x/f1/f6/1e/f1f61e8dc7a7e79a9f33dcdee0567574.jpg" alt="" />
    </div>
    <div data-aos="fade-in" className='img-hover-zoom'>
        <img src="https://i.pinimg.com/474x/d1/ef/70/d1ef7014913e62522a9827005e38a6dd.jpg" alt="" />
    </div>
    <div data-aos="fade-in"  className='img-hover-zoom'>
        <img    src="https://i.pinimg.com/474x/4f/87/a8/4f87a8812672d6d4980f68e38a418c36.jpg" alt="" />
    </div>
    </div>
    
    </div>
    <div className='bg-[#fffff0da] relative bottom-[19rem] md:bottom-[26rem] lg:bottom-[41.5rem] text-5xl font-imperial w-[100%] text-center'><h2>doodle's Stay</h2></div>
    

    </div>
    {/* footer */}
         <div className='bg-black py-10'>
          <div className='grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-0' >
          <div className='flex flex-col gap-5 justify-center items-center'><p className='text-6xl text-center font-imperial text-[#fffff0]'>doodle's stay</p>
          {/* <ul className='flex justify-center items-center  text-[#fffff0] gap-16 list-disc  text-pretty  uppercase md:text-base'>
            <li >drink</li>
            <li >drool</li>
            <li>dine</li>
          </ul> */}
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
          {/* <p className='text-sm font-kalam text-center text-[#fffff0c7]'>Copyright ©2025 created by SANTOSHI. All rights reserved.</p> */}
          </div>
        </div>
    </div>
  )
}

export default Venu