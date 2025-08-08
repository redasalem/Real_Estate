import React from 'react';
import Navbar from "./Navbar";
import { motion } from 'framer-motion'


const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-center flex items-center bg-cover
     w-full overflow-hidden'id='Header'>
      {/* bg-header vedio */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="/src/assets/bg_header.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-5"></div>
      {/* bg-header vedio */}
      <Navbar/>
      <motion.div
      initial={{ opacity: 0 ,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity: 1 ,y:0}}
      viewport={{once:true}}
       className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h1 className='text-5xl sm:text-6xl md:text-[82px]
               inline-block max-w-4xl font-semibold pt-20'>استكشف المنازل التي تناسب أحلامك</h1>
        <div className='space-x-6 mt-16'>
          <a className='border border-white px-8 py-3 rounded hover:bg-blue-500 hover:border-0 transition-all mr-3 font-bold text-[19px]' href="#projects">مشاريعنا</a>
          <a className='bg-blue-500 border-white px-8 py-3 rounded font-bold text-[19px]' href="#contact">تواصل معنا</a>
        </div>

      </motion.div>

    </div>
  )
}

export default Header