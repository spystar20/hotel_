import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const rooms = {
    1: { name: 'Single Room', price: 8900, maxGuests: 2 },
    2: { name: 'Double Room', price: 18900, maxGuests: 4 },
    3: { name: 'Honeymoon Special Room', price: 69900, maxGuests: 2 },
    4: { name: 'Deluxe Room', price: 80900, maxGuests: 6 },
  };

  const room = rooms[roomId];

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    name: '',
    email: '',
    phone: '', // Added phone field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);
    const timeDiff = checkOutDate - checkInDate;
    return Math.max(1, Math.ceil(timeDiff / (1000 * 60 * 60 * 24))); // Minimum 1 night
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date().toISOString().split('T')[0];

    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    else if (formData.checkIn < today) newErrors.checkIn = 'Check-in date cannot be in the past';

    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    else if (formData.checkOut <= formData.checkIn) newErrors.checkOut = 'Check-out must be after check-in';

    if (!formData.guests || formData.guests < 1) newErrors.guests = 'Number of guests must be at least 1';
    else if (formData.guests > room.maxGuests) newErrors.guests = `Maximum ${room.maxGuests} guests allowed`;

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const totalNights = calculateNights();
    const totalCost = totalNights * room.price;
    const bookingData = { ...formData, roomId, totalNights, totalCost };

    console.log('Booking submitted:', bookingData);
    localStorage.setItem('lastBooking', JSON.stringify(bookingData));
    alert('Booking confirmed! Check your email for confirmation.');
    navigate('/payment');
  };

  if (!room) return <div className="text-center py-20 text-gray-800">Room not found</div>;

  const totalNights = calculateNights();
  const totalCost = totalNights * room.price;

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
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.checkIn ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Check-out Date</label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.checkOut ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max={room.maxGuests}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.guests ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'}`}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              {totalNights} Night{totalNights > 1 ? 's' : ''}: ₹ {totalCost.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 mb-4">₹ {room.price.toLocaleString()} / night</p>
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