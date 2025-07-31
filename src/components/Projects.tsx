import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
    const [currentIndex,setcurrentIndex]=useState(0);
    const [cardsToShow,setcardsToShow]=useState(1);


// تغير الكروت على حسب المشاريع على حسب عرض الشاشة 

    useEffect(() => {

  const updateCardsToShow = () => {

    if (window.innerWidth >= 1024) {

      setcardsToShow(projectsData.length); // شاشة كبيرة = عرض كل الكروت
    } else {
      setcardsToShow(1); // شاشة صغيرة = عرض كارت واحد فقط
    }
  };

  updateCardsToShow(); // أول تشغيل

  window.addEventListener('resize', updateCardsToShow); // عند تغيير حجم الشاشة

  return () => window.removeEventListener('resize', updateCardsToShow); // تنظيف
}, []);


    const nextProject=()=>{
        setcurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)

    }
    const prevProject=()=>{
        setcurrentIndex((prevIndex)=>prevIndex === 0 ? projectsData.length-1:prevIndex-1)

    }

  return (
    <motion.div 
    initial={{ opacity: 0 ,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity: 1 ,x:0}}
      viewport={{once:true}}
    className='container mx-auto py-4 pt-20 px-6 
    md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
            <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces, Building Legacies—Explore Our Portfolio</p>
      {/* sliders buttons */}
      <div className='flex justify-between items-center mb-8'>
        <button
        onClick={prevProject}
         className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Previous project'>
            <img src={assets.left_arrow} alt="left_arrow" />
        </button>

        <button
        onClick={nextProject}
         className='p-3 bg-gray-200 rounded mr-2 cursor-pointer' aria-label='Next project'>
            <img src={assets.right_arrow} alt="right_arrow" />
        </button>
      </div>
      {/* projects sliders  container*/}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
        style={{transform:`translateX(-${(currentIndex * 100)/ cardsToShow}%)`}}
        >

            {projectsData.map((project)=>(
                <div key={project.id} className='relative flex-shrink-0 w-full sm:w-1/4 '>
                    <img src={project.image} alt={project.title} className='w-full h-auto mb-14'/>
                    <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                        <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                        <h2 className='text-xl font-semibold text-gray-800'>
                            {project.title}
                        </h2>
                        <p className='text-gray-500 text-sm'>
                            {project.price} <span>| </span>{project.location}
                        </p>

                        </div>

                    </div>

                </div>


            ))}

        </div>
      </div>


    </motion.div>
  )
}

export default Projects