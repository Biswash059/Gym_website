import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomButton from "./CustomButton";
import SwiperButton from "./SwiperButton";

const Slider = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="relative h-[80vh] pt-48 z-10">
          <div className="absolute right-[250px] flex flex-col items-center lg:items-start lg:max-w-[700px] z-30 ">
            <h1 className="text-6xl text-white font-bold text-center lg:text-left mb-4">
              <span className="text-red-600">Hard Work </span> <br />
              is For Every Success
            </h1>
            <p className="text-white text-center lg:text-left mb-4">
              Start by taking inspiration, Continue it to give inspiration
            </p>
            <CustomButton
              text="Get started"
              containerStyles="w-[196px] h-[62px] bg-red-300"
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperButton />
    </Swiper>
  );
};

export default Slider;
