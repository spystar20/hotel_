import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { MdOutlinePhonePaused } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import { GiFlowerPot } from "react-icons/gi";
import { PiSwimmingPool } from "react-icons/pi";
import { CiWifiOn } from "react-icons/ci";
import { PiTowelFill } from "react-icons/pi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { useEffect } from 'react';
import Aos from 'aos'
import { Link } from 'react-router';

const Home = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (

    <div>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">   <div className="embla__slide_1"></div></div>
          <div className="embla__slide">   <div className="embla__slide_2"></div></div>
          <div className="embla__slide">   <div className="embla__slide_3"></div></div>
          <div className="embla__slide">   <div className="embla__slide_4"></div></div>
          <div className="embla__slide">   <div className="embla__slide_5"></div></div>
        </div>
      </div>

      <div className='absolute flex justify-center  items-center top-[7rem] md:top-[10.4rem] lg:top-[7.3rem]  w-[100vw] h-[100vh]'>
        <div data-aos="fade-up" className='text-center '>
          <h2 className='font-imperial  md:text-7xl  text-6xl '>Doodle’s Stay</h2>
          <div className='flex justify-center items-center py-6 gap-5'>
            <Link to='/Booking'><div><button className=' border-black border-2 bg-transparent  uppercase font-antonio text-black px-3 py-2 rounded-xl'>reserve a room</button></div></Link>

          </div>
        </div>
      </div>
      {/* INTRO */}
      <div className='bg-black p-10  md:p-20'>
        <div data-aos="fade-down" className='text-center py-20 '>
          <h2 className='text-[rgb(255,255,240)] text-2xl uppercase font-outfit font-bold'>Spend the Perfect Time with your Loved-Ones</h2>
          <p className='text-[#fffff0eb] font-thin pt-4 lg:px-24 text-base'>Welcome to Doodle’s Garden, where every meal is a family affair! Situated in the heart of our community, Doodle’s Garden is more than just a diner – it’s a gathering place for friends, families along with their pets to come together and create lasting memories over delicious food and warm hospitality.</p></div>
        <ul className='grid grid-cols-2 lg:grid-cols-4 justify-center polaroid  items-center gap-12'>
          <li data-aos="fade-up" data-aos-delay="100" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/474x/07/3a/c5/073ac59fb430a9323a23e6f7ca1b04d5.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="300" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh] lg:w-[18vw] lg:h-[56vh] rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/474x/e9/c3/e9/e9c3e97f220b7904266ad2ec07b7af01.jpg" alt="" /></li>
          <li data-aos="fade-up" data-aos-delay="600" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/474x/42/c5/b8/42c5b82befba71e2cb14991815ceb08a.jpg" alt="" /></li>
          {/* <li data-aos="fade-up" data-aos-delay="600" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/736x/d9/01/e4/d901e4f085ce51739c03c9198ec8b6b8.jpg" alt="" /></li> */}
          <li data-aos="fade-up" data-aos-delay="900" className='bg-[#FFFFF0] flex justify-center items-start pt-6 w-[36vw] h-[36vh]  lg:w-[18vw] lg:h-[56vh]  rounded-sm'><img className='w-[32vw] lg:w-[15vw]' src="https://i.pinimg.com/474x/1e/35/bc/1e35bc86ba196781e928e48cdc85915f.jpg" alt='' /></li></ul>
      </div>

      {/* SERVICE */}
      <div>
        <div className=' bg-[#FFFFF0] px-5 lg:py-10 lg:pt-4 lg:px-20'>
          {/* <div className='flex justify-center items-center gap-3 '> <div className='w-[88vw] bg-black h-2' data-aos="fade-right"></div>  <h2 data-aos="fade-left" className='text-center font-antonio font-bold text-4xl uppercase py-6'>menu</h2> </div>
        <div className='flex justify-between items-center flex-col gap-4 py-7 lg:flex-row lg:px-24'>
          <div><img data-aos="zoom-out"  className='w-[45vw] lg:w-[25vw] rounded-full' src="https://i.pinimg.com/736x/a1/9a/ac/a19aac9048cae3f00e47324f1b691fea.jpg"  alt="" /></div>
          <div data-aos="zoom-out" data-aos-delay="100" className=' bg-black text-[#FFFFF0] px-7 py-6 lg:py-12 w-[85vw] lg:w-[45vw]   rounded-tl-3xl rounded-br-3xl'>
            <ul className='flex flex-col gap-4'><li className='flex justify-between  gap-10 '>
              <div><div className='font-semibold font-outfit text-xl'>Mackossa Mango</div>
              <div className='text-[#fffff0dc]'>Raw mango, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-outfit text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between  gap-10'>
              <div><div className='font-semibold font-outfit text-xl'>Mackossa Mango</div>
              <div className='text-[#fffff0dc]'>Raw mango, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-outfit text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between  gap-10'>
              <div><div className='font-semibold font-outfit text-xl'>Pina Colada
              </div>
              <div className='text-[#fffff0dc]'>Pineapple and coconut with vanilla overtones</div></div>
              <div className='font-semibold font-outfit text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between gap-10 '>
              <div><div className='font-semibold font-outfit text-xl'>Kiwi Slider
              </div>
              <div className='text-[#fffff0dc]'>Fresh Kiwi, Lime with a pinch of spices</div></div>
              <div className='font-semibold font-outfit text-xl'>
              ₹325</div>
              </li>
              <li className='flex justify-between gap-10'>
              <div><div className='font-semibold font-outfit text-xl'>Irish Peach</div>
              <div className='text-[#fffff0dc]'>Peach with notes of creamy, citrus and spice</div></div>
              <div className='font-semibold font-outfit text-xl'>
              ₹325</div>
              </li>
              </ul>
          </div>
        </div> */}
          <h2 className='text-3xl uppercase font-antonio text-center py-10'>our service</h2>


          <ul className='grid grid-cols-1 md:grid-cols-3 justify-center py-12 items-center gap-16'>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <GiCoffeeCup className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>breakfast</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <GiFlowerPot className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>garden</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <PiSwimmingPool  className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>pool</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <CiWifiOn className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>free wifi</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <PiTowelFill  className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>Daily Housekeeping</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className=' flex  justify-center  items-center flex-col capitalize'>
              <div className='flex flex-col gap-2'><div className='flex justify-center items-center'> <MdOutlineDinnerDining  className='text-4xl text-center' /></div>
                <h1 className='text-xl font-antonio'>In-Room Dining Service</h1>
              </div>
              <p className='text-sm pt-4 italic font-outfit text-center px-6 '> labore  nemo? Illum, voluptatibus. ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>

      </div>

      {/* offer-SECTION */}
      <div className='bg-black py-9'>
        <h1 className='text-[#FFFFF0] text-4xl text-center font-antonio uppercase py-8'>our offerings</h1>
        <div className='grid grid-cols-1 px-6 gap-3 md:gap-0 md:px-0 md:grid-cols-3 py-10 justify-center items-center '>
          
  <div className='group '>
    <span className='group-hover:flex hidden text-[#FFFFF0] group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className=' text-center '><h1 className='text-3xl font-outfit'>50+</h1><h1 className='text-xl font-outfit italic capitalize'>Unique properties</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/3a/b4/83/3ab483136d2f1257b72e615d49e3e37b.jpg" alt="" /></div>
       <div className='group'>
       <span className='group-hover:flex hidden  group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className='text-white text-center '><h1 className='text-3xl font-outfit'>95%</h1><h1 className='text-xl font-outfit italic capitalize'>returning guests</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/e2/61/8a/e2618a60187ab3d44aa97f7c4bff1eee.jpg" alt="" /></div>
       <div className='group'>
       <span className='group-hover:flex hidden  group-hover:absolute justify-center items-center h-1/2  w-1/3'><div className='text-white text-center '><h1 className='text-3xl font-outfit'>1000 +</h1><h1 className='text-xl font-outfit italic capitalize'>satisfied guests</h1></div></span>
        <img className='hover:opacity-40 rounded-none hover:rounded-xl opacity-100' src="https://i.pinimg.com/474x/53/a9/37/53a937cdf862da224a40f7c2cab72f75.jpg" alt="" />
       </div>
        </div>
        </div>

      {/* ABOUT-SECTION */}

      <div className='bg-[#FFFFF0]  py-8 px-6 lg:px-20'>
        <div  >
          <h2 className='text-center  font-antonio font-bold text-3xl underline md:text-4xl uppercase py-6'>about us</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-8 lg:gap-14 items-center justify-center'>
            <div data-aos="fade-in" className='text-center flex flex-col gap-6 '>
              <h2 className='text-2xl font-medium font-imperial md:text-4xl'>Truly Relaxing and Authentic Environment</h2>
              <p className='text-sm  font-outfit md:text-xl'>Welcome to Doodle’s Garden, where every meal is a family affair! Situated in the heart of our community, Doodle’s Garden is more than just a diner – it’s a gathering place for friends, families along with their pets to come together and create lasting memories over delicious food and warm hospitality.</p>
              <Link to="/Booking"> <div><button data-aos="zoom-out" className=' border-black border-2 text-xl uppercase hover:bg-black hover:text-[#FFFFF0] font-antonio text-black px-3 py-2 rounded-xl'>reserve a room</button></div></Link>
            </div>
            <div className='flex justify-center items-center'> <img data-aos="fade-in" className='rounded-t-full w-[19rem]   outline-black outline-2 outline  outline-offset-8' src="https://i.pinimg.com/474x/b0/db/97/b0db97aa653821549856f7444b9d8c65.jpg" alt="" /></div>
          </div>
        </div>

      </div>
      {/* FOOTER */}
      <div className='bg-black py-10'>
        <div className='grid grid-cols-1 gap-9 lg:grid-cols-2 lg:gap-0' >
          <div className='flex flex-col gap-5 justify-center items-center'><p className='text-6xl text-center font-imperial text-[#fffff0]'>Doodle's  Stay</p>
            {/* <ul className='flex justify-center items-center  text-[#fffff0] gap-16 list-disc  text-pretty  uppercase md:text-base'>
              <li >drink</li>
              <li >drool</li>
              <li>dine</li>
            </ul> */}
            <ul className='flex text-2xl gap-5 text-[#fffff0]'>
              <li><FaInstagram /></li>
              <li><FaFacebook /></li>
              <li><FaSquareXTwitter /></li>
            </ul>
          </div>
          <div className='flex flex-col justify-center items-center gap-5' >
            <div className='border-l-[#fffff0] border w-[22.7rem] md:w-[25.1rem]  rounded-full'><input type="text" placeholder='your email' className='text-center md:pr-[.4rem] md:pl-[0.5rem] text-[#fffff0fb] placeholder:text-[#fffff0fb] text-lg  outline-none bg-transparent' /><button className='bg-[#fffff0] hover:bg-[#fffff0e0] md:px-8 px-5 text-lg font-medium font-outfit py-1 rounded-full text-black'>subscribe now!</button></div>
            <div className='text-[#fffff0] flex gap-3 justify-center items-center text-xl'><MdOutlinePhonePaused className='text-[#fffff0] ' /><p>798245050</p>  </div>
            <div className='text-[#fffff0] flex gap-3 justify-center items-center text-xl'> <HiLocationMarker /><p>DELHI</p> </div>
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

export default Home