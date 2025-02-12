import { useEffect } from 'react';
import 'aos/dist/aos.css'
import Aos from 'aos';
import React from 'react';
import { Parallax } from 'react-parallax';
import { useState } from "react";
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlinePhonePaused } from 'react-icons/md';

const menuData = {
  salads: [
    { name: "Bistro Salad", price: "$12", description: "Candied walnuts mixed greens, goat cheese, craisins, white balsamic dressing" },
    { name: "Bookers Salad", price: "$14", description: "roasted corn, and jumbo shrimp tossed with white balsamic vinaigrette on the side" },
    { name: "Strawberry Fields Salad", price: "$12", description: "candied walnuts, and fresh strawberries with a white balsamic vinaigrette" },
    { name: "Arugula Salad", price: "$12", description: "Fresh arugula, tangy goat cheese, mandarin oranges, red onions, and cherry tomatoes" },

  ],
  burger:[
    { name: "Black Bean Veggie Burger", price: "$12", description: "Candied walnuts mixed greens, goat cheese, craisins, white balsamic dressing" },
    { name: "Turkey Burger", price: "$14", description: "roasted corn, and jumbo shrimp tossed with white balsamic vinaigrette on the side" },
    { name: "Booker’s Burger", price: "$12", description: "candied walnuts, and fresh strawberries with a white balsamic vinaigrette" },
    { name: "Salmon Burger", price: "$12", description: "Fresh arugula, tangy goat cheese, mandarin oranges, red onions, and cherry tomatoes" },
  ],
  dinner: [
    { name: "Creole Vegan Jambalaya", price: "$28", description: "Creole spiced yellow rice, black beans, sweet peppers and onions, spicy mushroom tarragon red sauce (v, gfo)" },
    { name: "Basket of Fried Shrimp", price: "$25", description: "6 pieces of breaded shrimp served with sweet and spicy Thai sauce with hand-cut fries" },
    { name: "Southern Fried Chicken Filet", price: "$28", description: "skinless, crispy hand breaded breast strips with garlic butter mashed potatoes, collard greens with smoked turkey" },
    { name: "Fish & Chips", price: "$25", description: "Golden crisp white fish and hand-cut fries with house-made tartar sauce" },
    { name: "Blackened Catfish", price: "$28", description: "Topped with sriracha aioli, collard greens with smoked turkey, garlic butter mashed potatoes" },
    { name: "Short Ribs", price: "$25", description: "8 oz of tender, boneless, braised short ribs served with a  jus on a bed of mashed potatoes and a side of sautéed haricot vert" },
  ],
  drinks: [
    { name: "Mimosa", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "Cold Brew", price: "$6", description: "Smooth, slow-steeped iced coffee" },
    { name: "Mango Cart", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "Pony Boi Lager", price: "$6", description: "Smooth, slow-steeped iced coffee" },
    { name: "Sycamore Lane", price: "$10", description: "Sparkling wine, fresh orange juice" },
    { name: "sprite", price: "$6", description: "Smooth, slow-steeped iced coffee" },
  ],
  sweets:[
    { name: "Chocolate Cake", price: "$10", description: "Layered fudge chocolate cake" },
    { name: "Carrot Cake", price: "$6", description: "Triple layered with cream cheese, sliced walnuts, and golden raisins" },
    { name: "Limoncello Cake", price: "$10", description: "Lemon mascarpone, layered sponge cake topped with vanilla shavings" },
    { name: "Bread Pudding", price: "$6", description: "Smooth, slow-steeped iced coffee" },
  ]
};
const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("salads");
    useEffect(()=>{
        Aos.init({duration:1500})
        },[])
    return (
<div className='bg-[#fffff0]'>
             <Parallax  className='w-[100%] h-[29vh] md:h-[46vh] lg:h-[100vh]' bgImageSizes='cover'  bgImage='https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg' strength={300} >     
             </Parallax>
             
            <div className='py-14 px-6 md:px-20'>
                <div className='flex justify-center items-center gap-5'>
                    <p className='w-2 h-2 bg-black rounded-full'></p>
                    <h1 className='text-4xl md:text-6xl font-imperial text-center'>The Menu</h1>
                    <p className=' w-2 h-2 bg-black rounded-full'></p>
                </div>
                <div>
                    <div className='py-8'>
                        <h1 className='md:text-3xl text-2xl font-imperial underline text-center capitalize underline-offset-3 px-8 pb-6 md:py-3'>shisha menu</h1>
                        <div data-aos="fade-down" data-aos-delay="100" className='border border-black rounded-xl md:p-10 grid-cols-1 grid md:grid-cols-2'>
                            <ul>
                            <li  className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col  '>
                                    <div>Irish Peach</div>
                                    <div className='text-base text-[#000000e4]'>Peach with notes of creamy, citrus and spice</div>
                                    </div>
                                <div>$22.00</div>
                            </li>
                            <li  className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Pina Colada
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Pineapple and coconut with vanilla overtones</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Geisha
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Smooth notes of peach with a hint of minty “mist”</div>
                                    </div>
                                <div>$24.00</div>
                            </li>
                            </ul>
                            <ul>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Irish Peach</div>
                                    <div className='text-base text-[#000000e4]'>Peach with notes of creamy, citrus and spice</div>
                                    </div>
                                <div>$22.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Pina Colada
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Pineapple and coconut with vanilla overtones</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Tropicool
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A Pineapple & Mixed Fruit Blend
                                    </div>
                                    </div>
                                <div>$23.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Blue Dew
                                    </div>
                                    <div className='text-base text-[#000000e4]'>A blend of blueberry and honeydew melon</div>
                                    </div>
                                <div>$25.00</div>
                            </li>
                            <li className='flex justify-between items-center text-lg font-outfit bg-transparent border-b-2 rounded-2xl px-7 hover:bg-[#fff8c944] border-[#fffff0ac] py-3'>
                                <div className='flex flex-col '>
                                    <div>Geisha
                                    </div>
                                    <div className='text-base text-[#000000e4]'>Smooth notes of peach with a hint of minty “mist”</div>
                                    </div>
                                <div>$24.00</div>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto p-6">
      {/* Navigation Buttons */}
      <div className="md:flex grid grid-cols-2 items-center gap-5 justify-center md:space-x-4 mb-6">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl transition  ${
              selectedCategory === category ? "bg-black text-[#FFFFF0]" : "bg-transparent border border-black text-black"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Display Selected Menu */}
      <div className="space-y-6 border border-black md:px-10 py-14 rounded-xl">
        {menuData[selectedCategory].map((item, index) => (
          <div key={index} className="flex justify-between rounded-xl hover:bg-[#fff8c944] px-5  pb-2">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <span className="font-bold">{item.price}</span>
          </div>
        ))}
      </div>
      </div>
      <div className='flex justify-center items-center gap-5'>
          <div><button data-aos="zoom-in" data-aos-delay="100" className=' border-black border bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>reserve a table</button></div>
          <div><button data-aos="zoom-in" data-aos-delay="100" className=' border-black border  bg-transparent hover:bg-black hover:text-white text-xl uppercase font-antonio text-black px-3 py-2 rounded-xl'>order online</button></div>
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

export default Menu