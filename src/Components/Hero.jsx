import Slider from "./Slider";
import HeroImage from "../assets/img/hero/bg.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden "
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <Header />
      <div className="container mx-auto h-screen">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
