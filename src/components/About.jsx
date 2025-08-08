import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

export const About = () => {
  return (
    <motion.div 
    initial={{ opacity: 0,y:100}}
      transition={{duration:1}}
      whileInView={{opacity: 1,y:0}}
      viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto
    p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>من نحن 
            <span className='underline underline-offset-4 decoration-1 under font-light'>  علامتنا التجارية</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 text-xl'>شغوف بالعقارات، ملتزم برؤيتك</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="brand_img"  className='w-full sm:w-1/2 max-w-lg'/>

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p className='font-semibold text-xl'>سنوات من التميز</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p className='font-semibold text-xl'>المشاريع المنجزة</p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p className='font-semibold text-xl'>مليون قدم مربع تم تسليمها </p>
                    </div>
                     <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p className='font-semibold text-xl'>المشاريع الجارية</p>
                    </div>

                </div>
                <p className='my-10 max-w-lg md:text-[19px] pt-6 font-semibold'>نحن فريق متخصص في تسويق وبيع العقارات، نسعى لتقديم أحدث العروض وأفضل الفرص الاستثمارية التي تناسب جميع الاحتياجات والميزانيات. نؤمن بالشفافية والمصداقية في كل تعاملاتنا، ونعمل على توفير تجربة سهلة وسلسة للعميل منذ أول استشارة وحتى استلام العقار. هدفنا هو أن نجد لك العقار المثالي الذي يلبي أحلامك ويحقق استثمارك بأعلى قيمة ممكنة.</p>
                 <button className='bg-blue-600 text-white px-8 py-2 rounded text-lg hover:animate-pulse'>المزيد ...</button>

            </div>
        </div>

    </motion.div>
  )
}
