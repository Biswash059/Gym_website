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
        <div className="h-full flex justify-end pt-48">
          <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">
            <h1 className="text-6xl text-white font-bold text-center lg:text-left mb-4">
              <span>Hard Work </span>
              is For Every Success
            </h1>
            <p className="text-white italic text-center lg:text-left mb-4">
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
