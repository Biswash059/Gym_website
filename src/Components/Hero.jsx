import Slider from "./Slider";
import HeroImage from "../assets/img/hero/bg.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section
      className="min-h-screen mb-4 bg-cover bg-center w-full overflow-hidden "
      style={{ backgroundImage: `url(${HeroImage})` }}
      id="home"
    >
      <div><Header /></div>
      <div className="container mx-auto h-full">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
