
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    
  return  (

  <div>
    <nav className="bg-black text-center text-white 700-xl p-5">
      <ul className="flex gap-20 m-5">
     

<div className="nav bg-gray-800 text-white py-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Image
        src="/logo1.JPG"
        width={150}
        height={150}
        alt="Logo"
        className="mr-4"
      />
    </div>
  </div>
</div>
        <li>Used cars</li>
        <li>New cars</li>
        <li>Bikes</li>
        <li>Autostores</li>
        <li>Videos</li>
        <li>Forum</li>
        <li>Blogs</li>
        <li>More</li>
        <li  className="bg-red-700 p-4 rounded-xl w-13 h-16 text-sm" >Post An Add</li>
      </ul>
    </nav>
    <div className="bg-gray-100 py-20">
         <div className="container mx-auto p-4 pt-6">
           <h1 className="text-4xl font-bold mb-4 text-center" >Sell Your Car On PakWheel and get the best price</h1>
           <div className="flex flex-wrap justify-center mb-4">
             <div className="w-full md:w-1/2 xl:w-1/3 p-6">
               <h3 className="text-2xl font-bold mb-4">Post Your Add On PakWheel</h3>
               <ul className="flex flex-col">
                <li className="flex items-center mb-2">
                    Post Your Add for free in 3 easy steps  </li>
               <li className="flex items-center mb-2">
                 
                    Get Genuine offers from verified buyers
                 </li>                   
             <li className="flex items-center mb-2">
                 
                    Quick sale Process at best price
            </li>

            <div className="bg-orange-500 hover:bg-green-700
             text-white font-bold py-2 px-4 rounded text-center">
               Post Your Car Now
             </div>
    </ul> 
             </div>
             <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <h2 className="text-2xl font-bold mb-4">Try PakWheel Sell It For Me</h2>
               <ul className="flex flex-col">
               <li className="flex items-center mb-2">
              
                   Dedicated sell experts to sell your car
              </li>
              <li className="flex items-center mb-2">
               
                 We bargin for you and share the best offer
               </li>
                 <li className="flex items-center mb-2">
                  
                 We ensure safe and secure transaction
                 </li>
                 <div className="bg-blue-500 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded text-center">
                Register Your Car Now</div>
               </ul>
             </div>
           </div>
            </div>

      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex flex-wrap justify-center "> Featured New Cars</h1>
      <div className="flex flex-wrap justify-center ">
        <Link href="/cars">
        
            <Image
              src="/toyota corolla.png"
              width={230}
              height={180}
              alt="Toyota"
              className="cursor-pointer rounded transition duration-700 hover:-scale-x-90"
            />
            <h2 className="text-xl font-bold mt-2 text-center  text-blue-800">Toyota Corolla</h2>
            <p className="text-lg font-medium text-green-400 mt-4 ml-8 text-center">PKR 59-75,00000</p>
            
         </Link>
        <Link href="/car2">
        
            <Image
              src="/alto.png"
              width={190}
              height={170}
              alt="Alto"
              className=" ml-4 rounded transition duration-700 hover:-scale-x-90"
            />
            <h2 className="text-xl font-bold mt-2 text-center  text-blue-800">Suzuki Alto</h2>
            <p className="text-lg font-medium text-green-400 mt-4 ml-8 text-center">PKR 23-30,00000</p>
          
        </Link>
        <Link href="/car3">
          
            <Image
              src="/civic.png"
              width={240}
              height={180}
              alt="Honda Civic"
              className=" ml-4 cursor-pointer rounded transition duration-700 hover:-scale-x-90"
            />
            <h2 className="text-xl font-bold mt-2 text-center text-blue-800">Honda Civic</h2>
            <p className="text-lg font-medium text-green-400 mt-4 ml-8 text-center">PKR 46-58,00000</p>
          
        </Link> 
        <Link href="/car4"> 
          
            <Image
              src="/honda.jpg"
              width={190}
              height={150}
              alt="Honda City"
              className=" ml-4 cursor-pointer rounded transition duration-700 hover:-scale-x-90"
            />
            <h2 className="text-xl font-bold mt-2 text-center text-blue-800">Honda City</h2>
            <p className="text-lg font-medium text-green-400 mt-4 ml-8 text-center">PKR 85-95,00000</p>
          
        </Link>
      </div>
    </div>
    </div>
    




    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-sm mb-2">Follow me on</p>
        
        <div className="flex space-x-4">
          <Link href="https://github.com/maria-karim">
            Github
          </Link>
          <Link href="https://www.linkedin.com/in/maria-karim-67511918b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZS6jVS6sT1q5EB%2BRnMKWxQ%3D%3D">
            linkedin
          </Link>
        </div>

        <p className="text-sm mt-2 text-gray-500">&copy; {new Date().getFullYear()} PakWheels. All rights reserved.</p>
      </div>
    </footer></div>
  );}