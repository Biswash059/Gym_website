import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";

const Cards = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    icon: <IoIosPricetags />,
    title: "Affordable Price",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    icon: <FaDumbbell />,
    title: "Modern Equipments",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AboutSection = () => {
  return (
    <section className=" bg-gray-50 pt-8 pb-14 lg:pt-16 lg:pb-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-2 mb-8">
            <h1 className="h1 text-center p-0">ABOUT US</h1>
          <p className="max-w-[700px] mx-auto text-center text-[16px] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-8 justify-center mt-14 ">
          {Cards.map((item, index) => (
            <div
              key={index}
              className="max-w-[430px] bg-white flex flex-col justify-center items-center gap-4 border shadow-lg rounded-md px-8 py-12 text-center"
            >
              <div className="text-4xl bg-black text-white w-[80px] h-[80px] rounded-full flex justify-center items-center mx-auto">
                {item.icon}
              </div>
              <h2 className="h2 uppercase text-red-700">{item.title}</h2>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
