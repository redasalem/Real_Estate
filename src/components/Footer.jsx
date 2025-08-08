import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-6 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo_dark} alt="" />
                <p className='text-gray-400 mt-4 text-[16px] font-semibold'>نقدم لكم خدمات عقارية متميزة تجمع بين الجودة والسرعة، 
                    مع التزامنا بتوفير أفضل الحلول التي تلبي احتياجاتكم وتطلعاتكم.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-[18px] font-semibold mb-4'>الشركة</h3>
                <ul className='flex flex-col gap-2 text-gray-400 mb-3 text-[16px] font-semibold'>
                    <a href="#Header" className='hover:text-white'>الرئيسية</a>
                    <a href="#About" className='hover:text-white'>من نحن</a>
                    <a href="#contact" className='hover:text-white'>تواصل معنا</a>
                    <a href="#" className='hover:text-white'>سياسة الخصوصية</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 '>
                <h3 className='text-white text-[18px] font-semibold mb-4'>اشترك في نشرتنا البريدية</h3>
                <p className='text-gray-400 mt-4 max-w-80 text-[16px] font-semibold'>نوفر لكم أحدث الأخبار والعروض العقارية المميزة، 
                    اشترك الآن ليصلك كل جديد مباشرة إلى بريدك الإلكتروني.</p>
                <div className='flex justify-center gap-2 items-center'>
                    <input type="email" placeholder='أدخل بريدك الإلكتروني' 
                        className='border text-white px-4 py-2 text-sm rounded bg-gray-800 focus:outline-none w-full md:w-auto my-5'
                    />
                    <button className='bg-blue-600 py-2 px-4 mr-28 h-fit rounded text-white hover:bg-blue-700 text-[16px] font-semibold'>اشترك</button>
                </div>
            </div>
        </div>
        <hr className='text-white'/>
        <div className='text-gray-400 flex justify-center my-5 text-[16px] font-semibold hover:text-gray-100 cursor-pointer'>
           &copy; {new Date().getFullYear()} Reda Salem. All rights reserved.
        </div>
    </div>
  )
}

export default Footer
