import React, { useState } from "react";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    if (activeLink !== link) {
      setActiveLink(link);
    }
  };

  return (
    <nav>
      <div className="bg-black text-white w-full flex justify-around items-center text-[17px] py-4">
        {/* Logo Section */}
        <div>
          <img src={Logo} alt="" />
        </div>

        {/* Navigation links section */}
        <div className="uppercase">
          <ul className="flex lg:gap-8 md:gap-6 mx-8">
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

        {/* Login buttons */}
        <div className="flex Lg:gap-6 md:gap-4">
          <button>LOGIN</button>
          <button>REGISTER</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
