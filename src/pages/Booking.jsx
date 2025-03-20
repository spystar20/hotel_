
import React from 'react';
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlinePhonePaused } from 'react-icons/md';
import { Parallax } from 'react-parallax';

const Booking = () => {
const [signupinfo, setsignupinfo] = useState({
  name:'',
  email:'',
  password:'',
  phone:''
})
const handleChange = (e) => {
  const {name, value} = e.target
console.log(name, value)
const copysignupinfo = {...signupinfo}
copysignupinfo[name] = value
setsignupinfo(copysignupinfo)
}
const handleSignup = (e) => {
  e.preventDefault()
  const {name, email, password, phone} = signupinfo
  if(!name || !email || !password || !phone){
    return handleError('please fill all the fields')
}
try {
  const url ='https://localhost:8080/auth/signup'
  const response = fetch(url, {
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(signupinfo)
  })
const result = response.json()
console.log(result)
} catch (error) {
  handleError(error.message)}}
  return (
    <div className='bg-[#fffff0] text-black'>

     
      <Parallax className='w-full h-[40vh] md:h-[60vh] lg:h-[90vh]' bgImage='https://flavorofindia.com/wp-content/uploads/2023/03/Reservations.jpeg' strength={300}>
        <div className='flex justify-center items-center h-full text-center'>
          <h2 className='md:text-6xl text-4xl font-medium text-white font-imperial'>Reservations</h2>
        </div>
      </Parallax>

      <div className='py-12 px-6 md:px-16'>
        <div className='text-center flex flex-col gap-4 items-center'>
          <h3 className='text-lg font-outfit uppercase'>Book Your Room</h3>
          <h2 className='text-3xl font-semibold font-outfit capitalize'>Make a Reservation</h2>
          <p className='text-sm font-outfit max-w-lg text-gray-600'>Reserve your perfect stay with us and enjoy an unforgettable experience.</p>
        </div>

      
        <div className='border border-black mx-auto p-8 mt-10 rounded-lg max-w-2xl shadow-lg'>
          <div className='grid gap-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input type='text' className='border px-4 py-2 border-black outline-none rounded-md bg-transparent' placeholder='Your Name' />
              <input type='email' className='border px-4 py-2 border-black outline-none rounded-md bg-transparent' placeholder='Your Email' />
              <input type='password' className='border px-4 py-2 border-black outline-none rounded-md bg-transparent' placeholder='Password' />
              <input type='tel' className='border px-4 py-2 border-black outline-none rounded-md bg-transparent' placeholder='Phone Number' />
            </div>
            <button className='w-full border-black hover:bg-transparent hover:text-black border bg-black text-xl capitalize text-white px-5 py-3 rounded-lg transition-all'>Sign In</button>

          </div>
        </div>
      </div>

      
      <footer className='bg-black text-[#fffff0] py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-16'>
         
          <div className='flex flex-col items-center gap-6 text-center'>
            <p className='text-4xl font-imperial'>Doodle's Stay</p>
            <ul className='flex gap-8 uppercase text-lg'>
              <li>Drink</li>
              <li>Drool</li>
              <li>Dine</li>
            </ul>
            <div className='flex gap-5 text-2xl'>
              <FaInstagram />
              <FaFacebook />
              <FaSquareXTwitter />
            </div>
          </div>

          {/* Subscription & Contact */}
          <div className='flex flex-col items-center gap-6'>
            <div className='flex w-full max-w-md border rounded-full overflow-hidden'>
              <input type='email' className='flex-1 px-4 py-2 bg-transparent text-[#fffff0] placeholder-[#fffff0c7] outline-none' placeholder='Your Email' />
              <button className='bg-[#fffff0] hover:bg-[#fffff0e0] px-6 py-2 font-medium text-black rounded-full'>Subscribe</button>
            </div>
            <div className='flex gap-3 text-lg items-center'>
              <MdOutlinePhonePaused />
              <p>798245050</p>
            </div>
            <div className='flex gap-3 text-lg items-center'>
              <HiLocationMarker />
              <p>Delhi</p>
            </div>
          </div>
        </div>

        <div className='mt-8 h-[1px] bg-[#fffff0c7] w-full'></div>
      </footer>
    </div>
  );
};

export default Booking;