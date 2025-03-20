import React from 'react';
import { Parallax } from 'react-parallax';
import { FaInstagram, FaFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import { HiLocationMarker } from 'react-icons/hi';
import { MdOutlinePhonePaused } from 'react-icons/md';
import { RiCupFill } from "react-icons/ri";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoTvSharp } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdRoomService } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { MdBalcony } from "react-icons/md";
import { MdSpa } from "react-icons/md";
import { MdOutlineLocalBar } from "react-icons/md";
import { Link } from 'react-router-dom'; 

const Menu = () => {
  const rooms = [
    {
      id: 1,
      name: 'Single Room',
      price: 8900,
      image: 'https://i.pinimg.com/474x/8c/97/8c/8c978c3e0b12f42561122eba19c27662.jpg',
      amenities: [<RiCupFill />, <PiForkKnifeFill />]
    },
    {
      id: 2,
      name: 'Double Room',
      price: 18900,
      image: 'https://i.pinimg.com/474x/42/b6/8c/42b68cd2490f7a0467234a71b4d4d6fb.jpg',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />]
    },
    {
      id: 3,
      name: 'Honeymoon Special Room',
      price: 45900,
      image: 'https://i.pinimg.com/474x/a3/2e/69/a32e6987fd66f09dada5bd617b2d5e1d.jpg',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />]
    },
    {
      id: 4,
      name: 'Deluxe Room',
      price: 80900,
      image: 'https://i.pinimg.com/474x/c1/83/70/c18370707df82322caf4fa6d2f5d1629.jpg',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />]
    },
    {
      id: 5,
      name: 'Executive Suite',
      price: 95000,
      image: 'https://plus.unsplash.com/premium_photo-1661903136240-a97367001a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eHVyeSUyMHJvb218ZW58MHx8MHx8fDA%3D',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />, <MdRoomService />]
    },
    {
      id: 6,
      name: 'Family Room',
      price: 110000,
      image: 'https://imgs.search.brave.com/IVHJRXIZ50KNPTFP5dThQf3Hfvl1sPsYgb-OxY1gqQ0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFlLzc4/Lzg0LzFlNzg4NDc4/MTVlMGQ1MDI0NjIw/MzlkYmFkOGE4ZmRj/LmpwZw',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />, <MdRoomService />]
    },
    {
      id: 7,
      name: 'Pool Villa',
      price: 150000,
      image: 'https://media.istockphoto.com/id/1148629418/photo/home-or-house-building-exterior-and-interior-design-showing-tropical-pool-villa-with-green.webp?a=1&b=1&s=612x612&w=0&k=20&c=KcBNBzstoWYqrbDEefJTO0X11OhIus6vttdGpU4FLFU=',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />, <MdRoomService />, <FaSwimmingPool />]
    },
    {
      id: 8,
      name: 'Ocean View Suite',
      price: 130000,
      image: 'https://imgs.search.brave.com/OSz5e-VvEFiLnd1E577hkleytRGZB4mK1GNM4BEqBeI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTA3/NjE0NDUwL3Bob3Rv/L2x1eHVyeS1yZXNv/cnQtaG90ZWwtd2l0/aC1zd2ltbWluZy1w/b29sLWF0LXN1bnNl/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ZVVpanp3LU1r/UHcwMEhBdzQ2NEkz/bXdhNGIxN3locmZ2/aDVIaUdaaUVxbz0',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />, <MdBalcony />]
    },
    {
      id: 9,
      name: 'Luxury Penthouse',
      price: 200000,
      image: 'https://i.pinimg.com/236x/2a/87/29/2a87297fa657adebe0b8f38e1fb87826.jpg',
      amenities: [<RiCupFill />, <PiForkKnifeFill />, <IoTvSharp />, <FaWifi />, <MdRoomService />, <MdSpa />, <MdOutlineLocalBar />]
    }
  ];

  return (
    <div className="bg-ivory min-h-screen">
      <Parallax
        className="w-full h-[30vh] md:h-[50vh] lg:h-screen"
        bgImage="https://www.hotelsinleipzig.de/data/Imgs/OriginalPhoto/12768/1276860/1276860733/img-intercityhotel-04105-leipzig-9.JPEG"
        strength={300}
      />

      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif capitalize text-gray-800">Rooms</h2>
          <p className="mt-4 text-gray-600 text-lg">Discover our luxurious accommodations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2">
                <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{room.name}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex gap-4 text-2xl text-gray-700 bg-gray-100 p-3 rounded-lg">
                      {room.amenities.map((icon, index) => (
                        <div key={index} className="relative group">
                          {icon}
                          <span className="absolute hidden group-hover:block -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs p-2 rounded whitespace-nowrap">
                            {index === 0 ? 'Breakfast' : 
                             index === 1 ? 'Restaurant' : 
                             index === 2 ? 'TV' : 
                             index === 3 ? 'WiFi' : 
                             index === 4 ? 'Room Service' : 
                             index === 5 ? 'Swimming Pool' : 
                             index === 6 ? 'Balcony' : 
                             index === 7 ? 'Spa Access' : 'Mini Bar'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold text-gray-800">₹ {room.price.toLocaleString()}</p>
                    <p className="text-gray-600">per night</p>
                    <Link
                      to={`/book-room/${room.id}`}
                      className="mt-4 inline-block text-white bg-gray-900 text-ivory px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 text-ivory py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-5xl font-serif">Doodle's Stay</h2>
            <ul className="flex justify-center gap-8 uppercase text-sm">
              <li>Drink</li>
              <li>Drool</li>
              <li>Dine</li>
            </ul>
            <ul className="flex justify-center gap-6 text-2xl">
              <li><FaInstagram className="hover:text-gray-300 cursor-pointer" /></li>
              <li><FaFacebook className="hover:text-gray-300 cursor-pointer" /></li>
              <li><FaSquareXTwitter className="hover:text-gray-300 cursor-pointer" /></li>
            </ul>
          </div>
          <div className="space-y-6 bg text-center">
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border bg-slate-300 border-ivory rounded-l-full py-2 px-4 text-ivory placeholder-ivory focus:outline-none"
              />
              <button className="bg-ivory text-gray-900 px-6 py-2 rounded-r-full font-semibold hover:bg-gray-500">
                Subscribe Now
              </button>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MdOutlinePhonePaused /> <span>798245050</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <HiLocationMarker /> <span>Delhi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;