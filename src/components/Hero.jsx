import Button from "./Button";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Hero = () => {
  const backgroundImg = "url(/car.jpeg)";

  const containerStyle = {
    backgroundImage: backgroundImg,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-screen h-screen px-48" style={containerStyle}>
      <Navbar />
      <Searchbar />
      <div className="h-4/6 flex flex-col items-start justify-center">
        <h2 className="text-7xl text-white drop-shadow-md font-bold">
          Love Your Car <br />
          Guarantee
        </h2>
        <h4 className="text-xl text-white text-center pt-2">
          Take 30 days to love it or return it (up to 1500 mi)
        </h4>
        <Button />
      </div>
    </div>
  );
};

export default Hero;
