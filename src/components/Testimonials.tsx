import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>  
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4
         decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Real Stores From Thoes Who Found Home with Us</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                    <img className='w-30 h-30 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.title} />
                    <h1 className='text-xl font-medium text-gray-700'>{testimonial.name}</h1>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                    <div className='flex items-center justify-center mt-3 gap-1 text-red-500 mb-4'>
                        {Array.from({length:testimonial.rating},(item,index)=>(
                            <img key={index} src={assets.star_icon} alt="" />
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonial.text}</p>


                </div>

            ))}

        </div>
    </div>
  )
}

export default Testimonials