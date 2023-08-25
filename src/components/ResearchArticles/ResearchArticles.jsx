import Image from "next/image";
import Carousel from "../Carousel";
import { useEffect, useState } from "react";

const ResearchArticles = () => {
  const [titleIsVisible, setTitleIsVisible] = useState(false);
  const [carouselIsVisible, setCarouselIsVisible] = useState(false);

  const handleScroll = () => {
    const titleScrollThreshold = 3500;
    const carouselScrollthreshold = 3700;
    if (
      window.scrollY >= titleScrollThreshold &&
      window.scrollY >= carouselScrollthreshold
    ) {
      setTitleIsVisible(true);
      setCarouselIsVisible(true);
    } else if (window.scrollY >= titleScrollThreshold) {
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

  const articles = [
    {
      tag: "Trends",
      title: "Electric Cars with the Longest Range",
      imageUrl: "/article-1.jpeg",
    },
    {
      tag: "Rankings",
      title: "Best Used Trucks 2023",
      imageUrl: "/article-2.jpg",
    },
    {
      tag: "Rankings",
      title: "Best Luxury SUVs 2023",
      imageUrl: "/article-3.jpg",
    },
    {
      tag: "Financing",
      title: "How Much Car Can I Afford?",
      imageUrl: "/article-4.jpg",
    },
    {
      tag: "Trends",
      title: "Best Color Car?",
      imageUrl: "/article-5.jpg",
    },
  ];

  return (
    <div className="my-16 flex flex-col items-center">
      <h2
        id="research-section-title"
        className={`blue-text text-4xl text-center font-bold mb-16 ${
          titleIsVisible ? "research-title-visible" : ""
        }`}
      >
        Research popular <br />
        used cars & SUVs
      </h2>
      <div
        id="research-section-carousel"
        className={`lg:w-3/4 w-screen ${
          carouselIsVisible ? "research-carousel-visible" : ""
        }`}
      >
        <Carousel>
          {articles.map((article, index) => {
            return (
              <div
                key={index}
                className="bg-slate-200 rounded-lg w-[290px] ml-12"
              >
                <Image
                  src={article.imageUrl}
                  height="300"
                  width="290"
                  alt="car"
                  className="rounded-t-lg h-60"
                />
                <div className="py-6 mx-3">
                  <h5 className="text-slate-500 text-sm">{article.tag}</h5>
                  <h3 className="font-bold">{article.title}</h3>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ResearchArticles;
