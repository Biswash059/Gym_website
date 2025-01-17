import React from 'react'
import Masonry from 'react-masonry-css'
import img1 from '../../assets/img/Gallery/Equipments/img2.jpg'
import img2 from '../../assets/img/Gallery/Equipments/img3.jpg'
import img3 from '../../assets/img/Gallery/Equipments/img1.jpg'
import img4 from '../../assets/img/Gallery/Equipments/img4.jpg'
import img5 from '../../assets/img/Gallery/Equipments/img7.jpg'
import img6 from '../../assets/img/Gallery/Equipments/img5.jpg'
import img7 from '../../assets/img/Gallery/Equipments/img6.jpg'
import img8 from '../../assets/img/Gallery/Equipments/img8.jpg'
import img9 from '../../assets/img/Gallery/Cardio/img1.jpg'
import img10 from '../../assets/img/Gallery/Cardio/img2.jpg'
import img11 from '../../assets/img/Gallery/Cardio/img3.jpg'
import img12 from '../../assets/img/Gallery/Cardio/img4.jpg'
import img13 from '../../assets/img/Gallery/Cardio/img5.jpg'
import img14 from '../../assets/img/Gallery/Gym Workout/img1.jpg'
import img15 from '../../assets/img/Gallery/Gym Workout/img2.jpg'
import img16 from '../../assets/img/Gallery/Gym Workout/img3.jpg'
import img17 from '../../assets/img/Gallery/Gym Workout/img4.jpg'
import img18 from '../../assets/img/Gallery/Gym Workout/img5.jpg'
import img19 from '../../assets/img/Gallery/Gym Workout/img6.jpg'
import img20 from '../../assets/img/Gallery/Gym Workout/img7.jpg'
import img21 from '../../assets/img/Gallery/Achievements/img1.jpg'
import img22 from '../../assets/img/Gallery/Achievements/img2.jpg'
import img23 from '../../assets/img/Gallery/Achievements/img3.jpg'
import img24 from '../../assets/img/Gallery/Achievements/img4.jpg'
import img25 from '../../assets/img/Gallery/Achievements/img5.jpg'

const Cards = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 6,
    img: img6,
  },
  {
    id: 7,
    img: img7,
  },
  {
    id: 8,
    img: img8,
  },
  {
    id: 9,
    img: img9,
  },
  {
    id: 10,
    img: img10,
  },
  {
    id: 11,
    img: img11,
  },
  {
    id: 12,
    img: img12,
  },
  {
    id: 13,
    img: img13,
  },
  {
    id: 14,
    img: img14,
  },
  {
    id: 15,
    img: img15,
  },
  {
    id: 16,
    img: img16,
  },
  {
    id: 17,
    img: img17,
  },
  {
    id: 18,
    img: img18,
  },
  {
    id: 19,
    img: img19,
  },
  {
    id: 20,
    img: img20,
  },
  {
    id: 21,
    img: img21,
  },
  {
    id: 22,
    img: img22,
  },
  {
    id: 23,
    img: img23,
  },
  {
    id: 24,
    img: img24,
  },
  {
    id: 25,
    img: img25,
  },
];

const GallerySection = () => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <section className="py-16">
      <h1 className="h1 text-center">Explore</h1>
      <div className="flex justify-center items-center my-8 px-8">
        <ul className="flex flex-wrap md:justify-center items-center gap-5 md:gap-8 text-white text-sm md:text-base font-semibold tracking-wider uppercase cursor-pointer">
          <li className="border-0 px-4 py-2 rounded bg-black hover:bg-red-600 ease duration-300">
            All
          </li>
          <li className="border-0 px-4 py-2 rounded bg-black hover:bg-red-600 ease duration-300">
            Equipments
          </li>
          <li className="border-0 px-4 py-2 rounded bg-black hover:bg-red-600 ease duration-300">
            Cardio
          </li>
          <li className="border-0 px-4 py-2 rounded bg-black hover:bg-red-600 ease duration-300">
            Gym
          </li>
          <li className="border-0 px-4 py-2 rounded bg-black hover:bg-red-600 ease duration-300">
            Achievements
          </li>
        </ul>
      </div>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid my-16 px-16 md:px-10 lg:px-20"
        columnClassName="my-masonry-grid_column"
      >
        {Cards.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-md shadow-md cursor-pointer"
          >
            <img
              src={item.img}
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105"
              alt=""
            />
          </div>
        ))}
      </Masonry>
    </section>
  );
}

export default GallerySection