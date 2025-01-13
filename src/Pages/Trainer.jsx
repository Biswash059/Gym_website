import React from "react";
import Footer from "../Components/Footer";
import TrainerList from "../Components/Trainer/TrainerList";
import CustomHero from "../Components/CustomHero";

const Trainer = () => {
  return (
    <div>
      <CustomHero link={"trainer"} text={"Trainers"} />
      <TrainerList />
      <Footer />
    </div>
  );
};

export default Trainer;
