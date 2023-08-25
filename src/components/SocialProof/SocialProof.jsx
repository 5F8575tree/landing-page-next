import Image from "next/image";

import Carousel from "../Carousel";
import { useEffect, useState } from "react";

const SocialProof = () => {
  const [titleIsVisible, setTitleIsVisible] = useState(false);
  const [carouselIsVisible, setCarouselIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThresholdForTitle = 1800;
    const scrollThresholdForCarousel = 1900;
    if (
      window.scrollY >= scrollThresholdForTitle &&
      window.scrollY >= scrollThresholdForCarousel
    ) {
      setTitleIsVisible(true);
      setCarouselIsVisible(true);
    } else if (window.scrollY >= scrollThresholdForTitle) {
      setTitleIsVisible(true);
      setCarouselIsVisible(false);
    } else {
      setTitleIsVisible(false);
      setCarouselIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const options = [
    {
      handle: "@nitefvry",
      imageUrl: "/social-6.jpg",
    },
    {
      handle: "@whittlebark",
      imageUrl: "/social-2.jpg",
    },
    {
      handle: "@jame882k",
      imageUrl: "/social-5.jpg",
    },
  ];

  return (
    <div className="mt-16 mb-24 flex flex-col items-center">
      <div id="title-portion" className={titleIsVisible ? "title-visible" : ""}>
        <h2 className="blue-text text-4xl font-bold text-center">
          A hassle-free kind <br />
          of happy
        </h2>
        <h4 className=" uppercase text-sm text-blue-400 font-bold mb-3 mt-4 text-center">
          #showyourbow
        </h4>
      </div>
      <div
        id="carousel-portion"
        className={`lg:w-3/4 w-screen ${
          carouselIsVisible ? "carousel-visible" : ""
        }`}
      >
        <Carousel>
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center ml-12"
              >
                <div className="rounded-lg relative">
                  <Image
                    src={option.imageUrl}
                    height="300"
                    width="300"
                    alt="social media image"
                    className="rounded-lg"
                    id="social-image"
                  />
                  <div className="flex absolute bottom-3 left-3">
                    <Image
                      src="/instagram-logo.svg"
                      height="20"
                      width="20"
                      alt="instagram logo"
                      className="mr-2"
                    />
                    <h3 className="text-white font-bold drop-shadow-xl">
                      {option.handle}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <span className="border-b border-slate-400"></span>
    </div>
  );
};

export default SocialProof;
