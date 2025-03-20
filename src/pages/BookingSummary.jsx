import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSummary = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);
  
  const rooms = {
    1: { name: 'Single Room', price: 8900, maxGuests: 2 },
    2: { name: 'Double Room', price: 18900, maxGuests: 4 },
    3: { name: 'Honeymoon Special Room', price: 69900, maxGuests: 2 },
    4: { name: 'Deluxe Room', price: 80900, maxGuests: 6 },
  };

  useEffect(() => {
    const lastBooking = localStorage.getItem('lastBooking');
    const payment = localStorage.getItem('paymentInfo');
    
    if (lastBooking && payment) {
      setBookingData(JSON.parse(lastBooking));
      setPaymentInfo(JSON.parse(payment));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (!bookingData || !paymentInfo) {
    return <div className="text-center py-20">Loading booking details...</div>;
  }

  const room = rooms[bookingData.roomId];

  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gray-900 text-white p-6 text-center">
            <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-lg">Thank you for your reservation</p>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
                <p className="text-gray-600">Booking #{paymentInfo.transactionId}</p>
              </div>
              <div className="bg-green-100 text-green-800 py-1 px-3 rounded-full font-medium">
                Confirmed
              </div>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 mb-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Check-in</h4>
                  <p className="text-lg font-bold">{formatDate(bookingData.checkIn)}</p>
                  <p className="text-gray-600">After 2:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Check-out</h4>
                  <p className="text-lg font-bold">{formatDate(bookingData.checkOut)}</p>
                  <p className="text-gray-600">Before 12:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-700 mb-2">Guest Details</h4>
              <p className="mb-1"><span className="font-medium">Name:</span> {bookingData.name}</p>
              <p className="mb-1"><span className="font-medium">Email:</span> {bookingData.email}</p>
              <p className="mb-1"><span className="font-medium">Phone:</span> {bookingData.phone}</p>
              <p><span className="font-medium">Guests:</span> {bookingData.guests} {bookingData.guests > 1 ? 'persons' : 'person'}</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-gray-700 mb-4">Payment Details</h4>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Room Rate</span>
                <span>₹ {room.price.toLocaleString()} per night</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Duration</span>
                <span>{bookingData.totalNights} night{bookingData.totalNights > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Payment Method</span>
                <span>{paymentInfo.method === 'card' ? 'Credit/Debit Card' : 'UPI'}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Transaction ID</span>
                <span>{paymentInfo.transactionId}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-300 pt-4 mt-4">
                <span>Total Amount Paid</span>
                <span>₹ {bookingData.totalCost.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6">
                A confirmation email has been sent to {bookingData.email}.<br />
                Please contact us if you have any questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.print()} 
                  className="bg-white border border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                >
                  Download Receipt
                </button>
                <button 
                  onClick={() => navigate('/')} 
                  className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-600 text-sm">
          <p>Need help with your booking? Contact our support team at support@hotel.com</p>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;