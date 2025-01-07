import Slider from "./Slider";
import HeroImage from "../assets/img/hero/bg.png";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] "
      style={{ backgroundImage: `url(${HeroImage})` }}
      id="home"
    >
      <div className="container mx-auto h-full">
        <Slider />
      </div>
    </section>
  );
};

export default Hero;
