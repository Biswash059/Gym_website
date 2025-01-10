import React from 'react'
import CustomButton from './CustomButton'
import Img1 from "../assets/img/trainers/david.jpg"
import Img2 from "../assets/img/trainers/rosy.jpg"
import Img3 from "../assets/img/trainers/matt.jpg"
import Img4 from "../assets/img/trainers/sofia.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Cards = [
    {
        name: 'DAVID WILLIAMS',
        type: 'Body Builder Coach',
        img: Img1,
    },
    {
        name: 'ROSY RIVERA',
        type: 'Cardio Coach',
        img: Img2,
    },
    {
        name: 'MATT STONE',
        type: 'Fitness Coach',
        img: Img3,
    },
    {
        name: ' SOFIA LAUREN',
        type: 'Crossfit Coach',
        img: Img4,
    }
]


const TrainerMeetSection = () => {
  return (
    <section className="min-h-screen">
      <div>
        <h1 className="h1 text-center my-20">MEET OUR TRAINERS</h1>
        <div className="m-w-[75%] flex flex-wrap justify-center items-center gap-4 mb-7">
          {Cards.map((item, index) => (
            <div key={index} className="">
              <img src={item.img} alt="" />
              <h2 className="h2 text-center">{item.name}</h2>
              <p className="text-center">{item.type}</p>
              <div className="flex justify-center items-center gap-5 mt-4">
                <div className="relative border-0 border-red-600 rounded-full p-4 group overflow-hidden cursor-pointer">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-700 z-10 transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <span className="relative z-20  group-hover:text-white">
                    <FaFacebookF />
                  </span>
                </div>
                <div className="relative border-0 border-red-600 rounded-full p-4 group overflow-hidden cursor-pointer">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-400 z-10 transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <span className="relative z-20  group-hover:text-white">
                    <FaTwitter />
                  </span>
                </div>
                <div className="relative border-0 border-red-600 rounded-full p-4 group overflow-hidden cursor-pointer">
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-red-700 z-10 transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  <span className="relative z-20  group-hover:text-white">
                    <FaYoutube />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CustomButton
            text={"VIEW ALL TRAINERS"}
            containerStyles="px-6 py-3 bg-red-300 mt-4 mb-10 md:mb-0 "
          />
        </div>
      </div>
    </section>
  );
}

export default TrainerMeetSection