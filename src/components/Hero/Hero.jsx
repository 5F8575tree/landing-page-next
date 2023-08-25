import { useState, useEffect } from "react";

import Button from "../Button";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import NavbarMobile from "./NavbarMobile";
import PostSearchMenuMobile from "./PostSearchMenuMobile";
import FeedbackTag from "../FeedbackTag";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Function to update isSmallScreen based on screen width
  const updateScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 1023);
  };

  // Initialize isSmallScreen when component mounts
  useEffect(() => {
    updateScreenSize();

    // Add a resize event listener to track changes in screen width
    window.addEventListener("resize", updateScreenSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div
      className={`w-screen h-screen xl:px-48 lg:px-16 md:px-8 sm:px-4 px-2 pt-2 ${
        menuIsOpen ? "overlay-active" : ""
      }`}
      id="hero-image"
    >
      {isSmallScreen ? (
        <NavbarMobile
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          isSmallScreen={isSmallScreen}
        />
      ) : (
        <Navbar />
      )}
      <Searchbar />
      {isSmallScreen ? <PostSearchMenuMobile /> : <div></div>}
      <div className="h-4/6 flex flex-col md:items-start md:justify-center sm:justify-start mt-12">
        <h2
          className="
          font-bold
          md:text-7xl
          md:text-white
          md:drop-shadow-md
          md:text-left
          text-5xl
          text-blue-900
          text-center
          "
        >
          Love Your Car <br />
          Guarantee
        </h2>
        <h4 className="text-center pt-2 md:text-xl md:text-white text-sm text-blue-900 drop-shadow-lg">
          Take 30 days to love it or return it (up to 1500 mi)
        </h4>
        <Button />
      </div>
      <FeedbackTag />
    </div>
  );
};

export default Hero;
