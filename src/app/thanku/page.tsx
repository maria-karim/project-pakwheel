
import React from 'react';

const ThankYouMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-blue-600 font-bold text-5xl">
        Thank you for shopping !!!
      </h1>
      <p className="text-black text-xl mt-2">
        Your order will be delivered in 3 working days
      </p>
    </div>
  );
};

export default ThankYouMessage;
