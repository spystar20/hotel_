import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const lastBooking = localStorage.getItem('lastBooking');
    if (lastBooking) {
      setBookingData(JSON.parse(lastBooking));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (paymentMethod === 'card') {
      if (!cardDetails.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(cardDetails.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Card number must be 16 digits';
      }
      
      if (!cardDetails.cardName.trim()) {
        newErrors.cardName = 'Name on card is required';
      }
      
      if (!cardDetails.expiryDate.trim()) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiryDate)) {
        newErrors.expiryDate = 'Expiry date must be in MM/YY format';
      }
      
      if (!cardDetails.cvv.trim()) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3}$/.test(cardDetails.cvv)) {
        newErrors.cvv = 'CVV must be 3 digits';
      }
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim()) {
        newErrors.upiId = 'UPI ID is required';
      } else if (!/^[a-zA-Z0-9.-]{2,256}@[a-zA-Z][a-zA-Z]{2,64}$/.test(upiId)) {
        newErrors.upiId = 'Invalid UPI ID format';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Save payment info to local storage
      const paymentInfo = {
        method: paymentMethod,
        amount: bookingData.totalCost,
        date: new Date().toISOString(),
        status: 'success',
        transactionId: 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      };
      
      localStorage.setItem('paymentInfo', JSON.stringify(paymentInfo));
      
      // Navigate to booking summary after showing success animation
      setTimeout(() => {
        navigate('/booking-summary');
      }, 3000);
    }, 2000);
  };

  if (!bookingData) return <div className="text-center py-20">Loading booking details...</div>;

  return (
    <div className="min-h-screen bg-ivory py-12 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-6">
              <svg className="w-full h-full text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
            <p className="text-gray-600 mb-4">Your booking has been confirmed. Redirecting to your booking summary...</p>
          </div>
        ) : (
          <>
            <div className="bg-gray-900 text-white p-6">
              <h2 className="text-2xl font-bold">Payment Details</h2>
              <div className="mt-4">
                <p className="text-xl">Amount to Pay: ₹ {bookingData.totalCost.toLocaleString()}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {bookingData.roomId && bookingData.roomId == 1 && 'Single Room'} 
                  {bookingData.roomId && bookingData.roomId == 2 && 'Double Room'} 
                  {bookingData.roomId && bookingData.roomId == 3 && 'Honeymoon Special Room'} 
                  {bookingData.roomId && bookingData.roomId == 4 && 'Deluxe Room'} 
                  {' '}for {bookingData.totalNights} night{bookingData.totalNights > 1 ? 's' : ''}
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8">
              <div className="mb-6">
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    className={`flex-1 py-3 rounded-lg border ${
                      paymentMethod === 'card' ? 'border-gray-900 bg-gray-100' : 'border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('card')}
                  >
                    <span className="font-medium">Credit/Debit Card</span>
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-3 rounded-lg border ${
                      paymentMethod === 'upi' ? 'border-gray-900 bg-gray-100' : 'border-gray-300'
                    }`}
                    onClick={() => setPaymentMethod('upi')}
                  >
                    <span className="font-medium">UPI Payment</span>
                  </button>
                </div>
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={(e) => {
                        const formattedValue = formatCardNumber(e.target.value);
                        if (formattedValue.length <= 19) {
                          handleCardInputChange({
                            target: {
                              name: 'cardNumber',
                              value: formattedValue,
                            },
                          });
                        }
                      }}
                      placeholder="1234 5678 9012 3456"
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.cardNumber ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'
                      }`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name on Card</label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleCardInputChange}
                      placeholder="John Doe"
                      className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                        errors.cardName ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'
                      }`}
                    />
                    {errors.cardName && <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>}
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value;
                          // Handle automatic slash insertion
                          if (value.length === 2 && !value.includes('/') && cardDetails.expiryDate.length < 2) {
                            value += '/';
                          }
                          // Limit to 5 chars (MM/YY)
                          if (value.length <= 5) {
                            handleCardInputChange({
                              target: {
                                name: 'expiryDate',
                                value,
                              },
                            });
                          }
                        }}
                        placeholder="MM/YY"
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.expiryDate ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'
                        }`}
                      />
                      {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                    </div>

                    <div className="flex-1">
                      <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '');
                          if (value.length <= 3) {
                            handleCardInputChange({
                              target: {
                                name: 'cvv',
                                value,
                              },
                            });
                          }
                        }}
                        placeholder="123"
                        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.cvv ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'
                        }`}
                      />
                      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">UPI ID</label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => {
                      setUpiId(e.target.value);
                      if (errors.upiId) {
                        setErrors({
                          ...errors,
                          upiId: '',
                        });
                      }
                    }}
                    placeholder="yourname@upi"
                    className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.upiId ? 'border-red-500 focus:ring-red-500' : 'focus:ring-gray-900'
                    }`}
                  />
                  {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
                </div>
              )}

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing Payment...
                    </span>
                  ) : (
                    `Pay ₹ ${bookingData.totalCost.toLocaleString()}`
                  )}
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  By clicking Pay, you agree to our <a href="#" className="text-gray-900 underline">Terms & Conditions</a>
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <img src="https://imgs.search.brave.com/pEMLbN1bS-eAKw0A9Ni0ifeHa3FqJUpFjk2uDZBECsc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZmxhdC1icmFu/ZC1sb2dvLTIvNTEy/L3Zpc2EtNTEyLnBu/Zw" alt="Visa" className="h-6" />
                  <img src="https://imgs.search.brave.com/MtiYzG89QgCtw_mUd1BBClyjPjwu353hnZlVFG31oOs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTWFz/dGVyY2FyZC1Mb2dv/LVBORy1QaG90by5w/bmc" alt="Mastercard" className="h-6" />
                  <img src="https://imgs.search.brave.com/mJqiK8QRJv00nBhYizs_AkV87g9GK_WFBWR6lX5C0b8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9BbWVyaWNh/bl9FeHByZXNzL0Ft/ZXJpY2FuX0V4cHJl/c3MtTG9nby53aW5l/LnN2Zw" alt="American Express" className="h-6" />
                  <img src="https://imgs.search.brave.com/gaLxTP-qsU3_WnijOGOcK_xuEh0J7Ebiwbi-JZaljzk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZmL1VQSV9sb2dv/LnN2Zw" alt="UPI" className="h-6" />
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Payment;