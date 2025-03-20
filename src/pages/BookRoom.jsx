import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const rooms = {
    1: { name: 'Single Room', price: 8900 },
    2: { name: 'Double Room', price: 18900 },
    3: { name: 'Honeymoon Special Room', price: 69900 },
    4: { name: 'Deluxe Room', price: 80900 }
  };

  const room = rooms[roomId];

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', { ...formData, roomId });
    alert('Booking confirmed! We will contact you shortly.');
    navigate('/');
  };

  if (!room) return <div className="text-center py-20">Room not found</div>;

  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Book {room.name}</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Check-in Date</label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              required
            />
          </div>

          <div className="text-center">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Total: ₹ {room.price.toLocaleString()} / night
            </p>
            <button
              type="submit"
              className="bg-gray-900 text-white text-ivory px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookRoom;