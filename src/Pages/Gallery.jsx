import React from 'react'
import Header from "../Components/Header"

const Gallery = () => {
  return (
    <section className='bg-gray-200'>
        <Header></Header>
        <div>
            <h1 className='h1'>Explore</h1>
            <div>
                <ul>
                    <li>All</li>
                    <li>Trainers</li>
                    <li>Achievements</li>
                    <li></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Gallery