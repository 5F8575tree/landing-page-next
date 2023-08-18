import Button from "./Button";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div
      className="w-screen h-screen xl:px-48 lg:px-16 md:px-8 sm:px-4"
      id="hero-image"
    >
      <Navbar />
      <Searchbar />
      <div className="h-4/6 flex flex-col md:items-start md:justify-center sm:justify-start sm:mt-10">
        <h2
          className="
          font-bold
          md:text-7xl
          md:text-white
          md:drop-shadow-md
          md:text-left
          sm:text-5xl
          sm:text-blue-900
          sm:drop-shadow-lg
          sm:text-center
          "
        >
          Love Your Car <br />
          Guarantee
        </h2>
        <h4 className="text-center pt-2 md:text-xl md:text-white sm:text-base sm:text-blue-900 sm:drop-shadow-lg">
          Take 30 days to love it or return it (up to 1500 mi)
        </h4>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
