import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const SwiperButton = () => {
  return (
    <div className="absolute right-[20%] bottom-[0] z-10">
      <div className="flex gap-2">
        <button className="border-2 border-red-600 p-2 rounded-sm hover:bg-red-600 ease-in-out duration-200">
          <GrFormPrevious size={20} color="white" />
        </button>
        <button className="border-2 border-red-600 p-2 rounded-sm hover:bg-red-600 ease-in-out duration-200">
          <GrFormNext size={20} color="White" />
        </button>
      </div>
    </div>
  );
};

export default SwiperButton;
