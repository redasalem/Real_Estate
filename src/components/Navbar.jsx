import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu,setshowMobileMenu]=useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow ='hidden'
    }else{
       document.body.style.overflow ='auto'
    }
    return ()=>{
      document.body.style.overflow ='auto'
    };

  },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10">
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-16 lg:px-20
        bg-transparent'>
            <img  
            className='rounded-full cursor-pointer'
            src={assets.stateLogo} 
            alt="logo" 
            height={50}
            width={50}
            />
            <ul className='hidden md:flex gap-7 text-white md:px-10'>
                <a href="#Header" className='cursor-pointer hover:text-red-500 font-semibold text-[18px]'>الصفحة الرئيسة</a>
                <a href="#About" className='cursor-pointer hover:text-red-500 font-semibold text-[18px]'>من نحن </a>
                <a href="#projects" className='cursor-pointer hover:text-red-500 font-semibold text-[18px]'>المشاريع</a>
                <a href="#testimonials" className='cursor-pointer hover:text-red-500 font-semibold text-[18px]'>اراء العملاء</a>
            </ul>
            <button className='hidden md:block bg-white px-8 rounded-full cursor-pointer py-2 font-bold hover:text-blue-500 transition-all text-[18px]'>تسجيل الدخول</button>
            <img className='md:hidden w-7 cursor-pointer'
             src={assets.menu_icon} 
             alt="menu_icon" 
             onClick={()=>setshowMobileMenu(true)}
             />
        </div>
        {/* ----- menu_icon----- */}

       {showMobileMenu && <div className={`md:hidden fixed w-full  right-0 top-0 bottom-0 overflow-hidden bg-white`}>
          <div className='flex justify-end p-6'>
            <img src={assets.cross_icon}
             className='w-6 cursor-pointer'
              alt=""
              onClick={()=>setshowMobileMenu(false)}
               />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium
           transition-all'>
            <a  onClick={()=>setshowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block hover:text-red-500 font-semibold text-1xl'>الصفحة الرئيسية</a>
            <a  onClick={()=>setshowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block hover:text-red-500 font-semibold text-1xl'>من نحن</a>
            <a  onClick={()=>setshowMobileMenu(false)} href="#projects" className='px-4 py-2 rounded-full inline-block hover:text-red-500 font-semibold text-1xl'>المشاريع</a>
            <a  onClick={()=>setshowMobileMenu(false)} href="#testimonials" className='px-4 py-2 rounded-full inline-block hover:text-red-500 font-semibold text-1xl'>اراء العملاء</a>

          </ul>
        </div>}  
        


    </div>
  )
}

export default Navbar