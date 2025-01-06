import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import HeroImg from "../assets/img/hero/bg.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Slider Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-11/12 max-w-[1430px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="swiper-container"
          >
            <SwiperSlide>
              <div className=" p-6 text-right shadow-md rounded">
                <h1 className="font-bold text-6xl text-red-600">HARD WORK</h1>
                <h3 className="font-bold text-6xl text-white">
                  IS FOR EVERY SUCCESS
                </h3>
                <p className="text-white m-2">
                  start by taking inspiration,continue it to give inspiration
                </p>
                <button className=" mt-9 ml-10 py-4 px-3 border border-red-600 rounded-lg bg-red-600 text-white ">
                  GET STARTED
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-6 text-right shadow-md rounded">
                <h1 className="font-bold text-6xl text-red-600">HARD WORK</h1>
                <h3 className="font-bold text-6xl text-white">
                  IS FOR EVERY SUCCESS
                </h3>
                <p className="text-white m-2">
                  start by taking inspiration,continue it to give inspiration
                </p>
                <button className=" mt-9 ml-10 py-4 px-3 border border-red-600 rounded-lg bg-red-600 text-white ">
                  GET STARTED
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" p-6 text-right shadow-md rounded">
                <h1 className="font-bold text-6xl text-red-600">HARD WORK</h1>
                <h3 className="font-bold text-6xl text-white">
                  IS FOR EVERY SUCCESS
                </h3>
                <p className="text-white m-2">
                  start by taking inspiration,continue it to give inspiration
                </p>
                <button className=" mt-9 ml-10 py-4 px-3 border border-red-600 rounded-lg bg-red-600 text-white ">
                  GET STARTED
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
