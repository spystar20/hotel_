import React from 'react'
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6'
import { HiLocationMarker } from 'react-icons/hi'
import { MdOutlinePhonePaused } from 'react-icons/md'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { handleError } from '../../notify'

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
              <Parallax className='w-[100%] h-[25vh] md:h-[46vh] lg:h-[100vh]' bgImageSizes='cover' bgImage='https://flavorofindia.com/wp-content/uploads/2023/03/Reservations.jpeg' strength={300}>
            <div className='text-center py-12 px-3 md:py-32 flex items-center'> <h2 className='md:text-6xl text-white  text-4xl font-medium font-imperial'>Reservations</h2></div> 
              </Parallax>
              <div className='py-8 px-10'>
                <div className='text-center flex flex-col gap-2 justify-center items-center py-10'>
                <h3 className='text-lg font-outfit'>book your table</h3>
                <h2 className='text-3xl font-medium font-outfit capitalize'>make a reservation</h2>
<p className='text-sm font-outfit '>Lorem ipsum dolor sit amuam, corporis reprehenderit animi voluptatem ea obcaecati? Provident, ipsum </p></div>
<div className='border border-black  mx-auto  py-10  rounded-t-lg '>
<div className='grid px-4 gap-6 lg:justify-center items-center'>

 {/* sign up */}
  <form action="post" onSubmit={handleSignup}>  
  <div className='grid  grid-flow-row lg:grid-flow-col gap-4 lg:justify-center md:px-4 items-center'>     
<input value={signupinfo.name} onChange={handleChange} type="text" name='name' autoFocus className='border px-5 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='your name here...'/>
<input value={signupinfo.email} onChange={handleChange} type="email" name='email' className='border px-5 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='Example@yourmail.com'/>
<input value={signupinfo.password} onChange={handleChange} type="password" name='password' className='border px-5 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='password here'/>
<input value={signupinfo.phone} onChange={handleChange} type="phone" name='phone' className='border px-5 py-2 placeholder:font-thin border-black outline-none rounded-lg bg-transparent' placeholder='phone number'/>
</div> 
<div className='grid md:px-4 lg:px-0 py-5'><button className=' border-black hover:bg-transparent hover:text-black border bg-black text-xl capitalize text-white px-3 py-3 rounded-xl ' >sign in</button></div>
</form> 
</div>
<span className='font-thin text-center flex justify-center items-center capitalize'>already have an account ? <Link to="login" className=' px-1 font-outfit underline'>login</Link></span>
<ToastContainer />
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
           <div className='h-[.1rem] my-8 bg-[#fffff0c7] w-full'>

                 {/* <p className='text-sm font-kalam text-center text-[#fffff0c7]'>Copyright ©2025 created by SANTOSHI. All rights reserved.</p>  */}
                 </div> 
          </div>
        </div>
    </div>
  )
}

export default Booking