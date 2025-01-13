import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const box = [
  {
    question: "What diet is important during and after workout?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
  },
  {
    question: "Should we need to do workout if our muscles is feeling sore?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "How many days in a week should I need to work out?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which question is open

  const handlebutton = (index) => {
    // Toggle openIndex if clicked again, else set the new index
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-[90vh] py-12 px-4 bg-black/20">
      <h1 className="h1 text-center">FAQs</h1>
      <div className="max-w-[92%] flex flex-col mx-auto gap-10 mt-16 ">
        {box.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md flex flex-col p-6 pb-4 justify-center"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg md:text-xl font-semibold mr-3">{item.question}</h2>
              <IoIosArrowDropdownCircle
                onClick={() => handlebutton(index)} // Pass the question's index
                className={`cursor-pointer transition-transform ease-in-out duration-200 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                color="red"
                size={30}
              />
            </div>
            <p
              className={`mt-4 text-gray-700 text-base md:text-lg max-w-[85%] transition-all ease-in-out duration-300 ${
                openIndex === index
                  ? "max-h-[300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
