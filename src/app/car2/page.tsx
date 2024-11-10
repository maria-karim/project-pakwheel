import Image from 'next/image'
import Link from 'next/link';

export default function Car() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Suzuki Alto 2024 Model</h1>
      
      <div className="w-72 h-77 relative mb-1">
        <Image 
          src="/alto.png" 
          alt="Suzuki Alto 2024 Model"
          width={300}
          height={300}
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <div>
          <h2 className="bg-blue-500 text-white font-semibold py-4 px-6 rounded-lg mt-0 hover:bg-blue-600 transition duration-300">Book a Test Drive</h2>
        </div>
        <div className="w-40 p-4   h-14 border-2 border-blue-500 rounded-lg text-center">
          <h2 className="text-blue-500 font-semibold">Visit Place</h2>
        </div>
        <div className="w-40 p-4  h-14 border-2 border-blue-500 rounded-lg text-center">
          <h2 className="text-blue-500 font-semibold">Request Bank </h2>
        </div>
        <div className="w-40 p-4   h-14 border-2 border-blue-500 rounded-lg text-center">
          <h2 className="text-blue-500 font-semibold">Car Inspection</h2>
        </div>
      </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-4">Vehicle Discription</h2>
      
      <div className="flex justify-center space-x-4 mt-4">
        <div className="w-40 p-4 mt-4 bg-white rounded-lg shadow-md text-center  hover:bg-blue-100 transition duration-300">
          <h2 className="text-lg font-semibold">Number of doors</h2>
          <p className="text-sm text-gray-600">4</p>
        </div>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="w-40 p-4 bg-white rounded-lg shadow-md text-center  hover:bg-blue-100 transition duration-300">
          <h2 className="text-lg font-semibold">Engine</h2>
          <p className="text-sm text-gray-600">2.0L I4</p>
        </div>
        <div className="w-40 p-4 bg-white rounded-lg shadow-md text-center  hover:bg-blue-100 transition duration-300">
          <h2 className="text-lg font-semibold">Horsepower</h2>
          <p className="text-sm text-gray-600">169 hp</p>
        </div>
        <div className="w-40 p-4 bg-white rounded-lg shadow-md text-center  hover:bg-blue-100 transition duration-300">
          <h2 className="text-lg font-semibold">Fuel Efficiency</h2>
          <p className="text-sm text-gray-600">30 MPG City</p>
        </div>
        <div className="w-40 p-4 bg-white rounded-lg shadow-md text-center  hover:bg-blue-100 transition duration-300">
          <h2 className="text-lg font-semibold">Transmission</h2>
          <p className="text-sm text-gray-600">CVT</p>
        </div>
      </div>
    </div>
    <p className="text-3xl font-medium text-green-400 mt-4">PKR 35,00000</p>
    <Link href="/form">
        <p className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg mt-4 hover:bg-blue-600 transition duration-300">
          Make a Payment
        </p></Link>
      
    
    </div>
  );
}
