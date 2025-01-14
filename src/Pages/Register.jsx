import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from "../assets/img/hero.jpg";
import BgImg from "../assets/img/trainers/matt.jpg";
import Header from "../Components/Header";

const Register = () => {
  return (
    <section
      className="min-h-screen bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${HeroImg})`,
      }}
    >
      <Header activeLink={"#"} />
    </section>
  );
}

export default Register