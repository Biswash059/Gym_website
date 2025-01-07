import { GrFormPrevious } from "react-icons/gr";
import { IoChevronForwardOutline } from "react-icons/io5";

const SwiperButton = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-5">
      <GrFormPrevious className=" text-red-500 text-5xl cursor-pointer mr-4 hover:text-white hover:scale-110 transition-all duration-300" />
      <IoChevronForwardOutline className=" text-red-500 text-5xl cursor-pointer mr-4 hover:text-white hover:scale-110 transition-all duration-300" />
    </div>
  );
};

export default SwiperButton;
