import Link from "next/link";
export default function OrderForm() {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Enter your details</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                placeholder="Enter your card number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Link href="/thanku">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Place Your Order
            </button></Link>
          </form>
        </div>
      </div>
    );
  }
  