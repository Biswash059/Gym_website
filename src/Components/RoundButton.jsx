import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const RoundButton = ({divStyles, spanStyles, text}) => {
  return (
    <div className={`${divStyles} relative rounded-full p-4 group overflow-hidden cursor-pointer`}>
      <span className={`${spanStyles} absolute bottom-0 left-0 w-full h-0 z-10 transition-all duration-500 ease-in-out group-hover:h-full`}></span>
      <span className="relative z-20  group-hover:text-white">
        {text}
      </span>
    </div>
  );
};

export default RoundButton;
