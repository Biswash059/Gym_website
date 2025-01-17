import React from 'react'

const GallerySection = () => {
  return (
    <section className='py-16 px-6'>
        <h1 className='h1 text-center'>Explore</h1>
        <div className='flex justify-center items-center my-8'>
            <ul className='flex flex-wrap md:justify-center items-center gap-5 md:gap-8 text-white text-sm md:text-base font-semibold tracking-wider uppercase cursor-pointer'>
                <li className='border-0 px-4 py-2 bg-black hover:bg-red-600 ease duration-300'>All</li>
                <li className='border-0 px-4 py-2 bg-black hover:bg-red-600 ease duration-300'>Equipments</li>
                <li className='border-0 px-4 py-2 bg-black hover:bg-red-600 ease duration-300'>Cardio</li>
                <li className='border-0 px-4 py-2 bg-black hover:bg-red-600 ease duration-300'>Gym</li>
                <li className='border-0 px-4 py-2 bg-black hover:bg-red-600 ease duration-300'>Achievements</li>  
            </ul>
        </div>
    </section>
  )
}

export default GallerySection