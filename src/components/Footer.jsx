import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Facere, molestias quaerat laboriosam natus fugit error rerum 
                     suscipit sit dolore doloribus.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400 mb-3'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                     <a href="#About" className='hover:text-white'>About us</a>
                      <a href="#contact" className='hover:text-white'>Contact Us</a>
                      <a href="#" className='hover:text-white'>Privacy policy</a>
                </ul>

            </div>
            <div className='w-full md:w-1/3 '>
            <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
            <p className='text-gray-400 mt-4 max-w-80'>Spanning 3,000 acres, Badya is the prime gateway connecting East & West Cairo, positioned as the focal point for all future extensions. Offering a smart & sustainable living experiences to its residents.</p>
            <div className='flex justify-center gap-2 items-center'>
                <input type="email" placeholder='Enter your Email' 
            className='border text-white px-4 py-2 text-sm rounded bg-gray-800 focus:outline-none w-full md:w-auto my-5'
            />
            <button className='bg-blue-600 py-2 px-4 h-fit rounded text-white hover:bg-blue-700 '>Subscribe</button>

            </div>
            </div>
           
        </div>
        <hr className='text-white'/>
        <div className='text-gray-400 flex justify-center my-5 text-lg hover:text-gray-100 cursor-pointer'>
           &copy; {new Date().getFullYear()} Reda Salem. All rights reserved.
               
        </div>

    </div>
  )
}

export default Footer