import {
  PiArrowSquareRightLight,
  PiArrowSquareLeftLight,
} from "react-icons/pi";

const SwiperButton = () => {
  return (
    <div className=" relative flex justify-center items-center mt-10 z-100">
      <PiArrowSquareLeftLight className="text-red-500 text-3xl cursor-pointer mr-4 hover:text-white hover:scale-110 transition-all duration-300" />
      <PiArrowSquareRightLight className="text-red-500 text-3xl cursor-pointer mr-4 hover:text-white hover:scale-110 transition-all duration-300" />
    </div>
  );
};

export default SwiperButton;
