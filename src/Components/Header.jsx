import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [menuNav, setMenuNav] = useState(false);

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  const handleMenuNav = () => {
    setMenuNav(!menuNav);
  };

  return (
    <nav>
      <div className="bg-black text-white w-full flex justify-around items-center py-4 px-6 md:px-20 lg:px-30">
        {/* Logo Section */}
        <div className="z-40">
          <img className="min-w-[85px]" src={Logo} alt="" />
        </div>

        {/* Navigation links section */}
        <div className="uppercase md:text-[14px] lg:text-[16px] mx-7 lg:mx-12">
          <ul className="hidden md:flex gap:3 lg:gap-7 md:gap-4 ">
            <li>
              <a onClick={() => handleLinkClick("home")} href="#">
                <span
                  className={`${
                    activeLink === "home"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Home
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("about")} href="/about">
                <span
                  className={`${
                    activeLink === "about"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("trainer")} href="#">
                <span
                  className={`${
                    activeLink === "trainer"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Trainer
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("prices")} href="#">
                <span
                  className={`${
                    activeLink === "prices"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Prices
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("testimonials")} href="#">
                <span
                  className={`${
                    activeLink === "testimonials"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Testimonials
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("blog")} href="#">
                <span
                  className={`${
                    activeLink === "blog"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Blog
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("contact")} href="#">
                <span
                  className={`${
                    activeLink === "contact"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Login buttons */}
        <div className="flex gap-2 Lg:gap-6 md:gap-3 md:text-[16px] lg:text-[18px] font-semibold">
          <button className="text-red-600">LOGIN</button>
          <button>REGISTER</button>
        </div>
        <div onClick={() => handleMenuNav()} className="block md:hidden z-30">
          {menuNav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Screen */}
        <div
          className={
            menuNav
              ? "fixed left-0 top-0 w-[100%] h-full bg-[#000300] ease-in-out duration-500 z-20"
              : "fixed left-[-100%]"
          }
        >
          <ul className="flex flex-col gap-6 items-center p-[60px] text-xl">
            <li>
              <a onClick={() => handleLinkClick("home")} href="#">
                <span
                  className={`${
                    activeLink === "home"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Home
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("about")} href="#">
                <span
                  className={`${
                    activeLink === "about"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  About
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("trainer")} href="#">
                <span
                  className={`${
                    activeLink === "trainer"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Trainer
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("prices")} href="#">
                <span
                  className={`${
                    activeLink === "prices"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Prices
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("testimonials")} href="#">
                <span
                  className={`${
                    activeLink === "testimonials"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Testimonials
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("blog")} href="#">
                <span
                  className={`${
                    activeLink === "blog"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Blog
                </span>
              </a>
            </li>
            <li>
              <a onClick={() => handleLinkClick("contact")} href="#">
                <span
                  className={`${
                    activeLink === "contact"
                      ? "underline decoration-red-500 underline-offset-[5px]"
                      : "hover:no-underline hover:border-b-2 hover:border-red-500"
                  } transition-all`}
                >
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
