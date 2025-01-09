import React from "react";
import Img1 from "../assets/img/testimonial/lucy.jpg";
import Img2 from "../assets/img/testimonial/maria.jpg";
import Img3 from "../assets/img/testimonial/michael.jpg";

const info = [
  {
    name: "Lucky",
    image: Img1,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Maria",
    image: Img2,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Michael",
    image: Img3,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
  {
    name: "Lucky",
    image: Img1,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet,lorem lorem consectetur adip lorem ips lorem ips lorem ips lorem ips lorem",
  },
  {
    name: "Maria",
    image: Img2,
    message:
      "lorem ipsum dolor sit lorem ipsum dolor sit amet, consectetur adip",
  },
];

const Testimonials = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-10 text-gray-700">
        OUR TESTIMONIALS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {info.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rouded-lg rounded-lg  flex flex-col items-center text-center "
          >
            <img
              src={item.image}
              alt="item.name"
              className="w-24 h-24 rounded-full mb-4"
            />

            <p className="text-gray-600">{item.message}</p>
            <h1 className="font-semibold text-xl text-red-600">{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
