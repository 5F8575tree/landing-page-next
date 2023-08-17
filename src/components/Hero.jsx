import Button from "./Button";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Hero = () => {
  const backgroundImg = "url(/car_with_clouds.jpg)";

  const containerStyle = {
    backgroundImage: backgroundImg,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="w-screen flex-col justify-center h-screen"
      style={containerStyle}
    >
      <Navbar />
      <Searchbar />
      <h2 className="text-7xl blue-text text-center pt-8 px-8 font-bold">
        Love Your Car <br />
        Guarantee
      </h2>
      <h4 className="text-xl blue-text text-center pt-2">
        Take 30 days to love it or return it (up to 1500 mi)
      </h4>
      <Button />
    </div>
  );
};

export default Hero;
