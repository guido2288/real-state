import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>testimonials</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Real Stories from Those Who Found Home with Us</p>
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map( (testimonal, idx) => (
                <div key={idx} className='max-w-[340px] shadow-lg rounded px-8 py-12 text-center'>
                    <img src={testimonal.image} alt={testimonal.alt} className='w-20 h-20 rounded-full mx-auto mb-4'/>
                    <h2 className='text-lg text-gray-700 font-medium'>{testimonal.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{testimonal.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length: testimonal.rating}, (item , idx) => (
                            <img key={idx} src={assets.star_icon} alt='' />
                        ))}
                    </div>
                    <p className='text-gray-600'>{testimonal.text}</p>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Testimonials