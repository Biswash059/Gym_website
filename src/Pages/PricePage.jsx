import React from "react";
import CustomHero from "../Components/CustomHero";
import Footer from "../Components/Footer";
import PriceComponent from "../Components/Price/PriceComponent";

const PricePage = () => {
  return (
    <div>
      <CustomHero link={"prices"} text={"Price"} />
      <PriceComponent />
      <Footer />
    </div>
  );
};

export default PricePage;
