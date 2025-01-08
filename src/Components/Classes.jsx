import React from "react";
import BodyBuilding from "../assets/img/classes/bodybuilding.jpg";
import Cardio from "../assets/img/classes/cardio.jpg";
import Crossfit from "../assets/img/classes/crossfit.jpg";
import Fitness from "../assets/img/classes/fitness.jpg";

const Cards = [
  {
    name: "BODY BUILDING",
    img: BodyBuilding ,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    name: "CARDIO",
    img: Cardio ,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
  },
  {
    name: "CROSSFIT",
    img: Crossfit,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor.",
  },
  {
    name: "FITNESS",
    img: Fitness,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem.",
  },
];

const Classes = () => {
  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {Cards.map((item, index) => (
          <div
            key={index}
            className="min-h-[370px] bg-center bg-cover bg-no-repeat overflow-hidden flex flex-col items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${item.img})`,
            }}
          >
            <h3 className="h1 text-red-600">{item.name}</h3>
            <p className="w-[55%] text-center text-white">{item.description}</p>
            <button className="relative mt-5 text-white border border-white px-4 py-2 z-20 group overflow-hidden">
              <span className="absolute w-0 h-full top-0 left-0 bg-red-600 z-10 transition-all duration-300 ease-in-out group-hover:w-full"></span>
              <span className="relative z-20">READ MORE</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
