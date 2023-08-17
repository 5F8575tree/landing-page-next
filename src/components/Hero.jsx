import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="w-screen flex-col justify-center">
      <Navbar />
      <Searchbar />
    </div>
  );
};

export default Hero;
