import Image from "next/image";

import Carousel from "../Carousel";

const BudgetSearch = () => {
  const options = [
    {
      title: "SUV",
      imageURL: "/sport-utilities.svg",
    },
    {
      title: "Trucks",
      imageURL: "/pickup-trucks.svg",
    },
    {
      title: "Sedans",
      imageURL: "/sedans.svg",
    },
    {
      title: "Convertibles",
      imageURL: "/convertibles.svg",
    },
    {
      title: "Luxury",
      imageURL: "/luxury-vehicles.svg",
    },
    {
      title: "Sports",
      imageURL: "/sports-cars.svg",
    },
  ];

  return (
    <section id="budget-calculator-section" className="px-6">
      <div
        id="budget-search-container"
        className="-mt-8 py-8 bg-white drop-shadow-xl rounded-2xl"
      >
        <h2
          id="budget-search-header"
          className="text-center blue-text text-2xl font-bold"
        >
          Pre-qualify with <br />
          no impact to your credit
        </h2>
        <div id="inner-budget-container">
          <div id="top-row">
            <h2 className="text-xs text-slate-400">
              What kinds of cars do you want?
            </h2>
            <div id="carousel" className="lg:w-3/4 mx-auto my-2">
              <Carousel>
                {options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-slate-200 rounded flex flex-col justify-center items-center h-24 w-[90px]"
                    >
                      <Image
                        src={option.imageURL}
                        alt="car"
                        height="96"
                        width="96"
                        className="px-4"
                      />
                      <h2 className="text-sm text-center">{option.title}</h2>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div id="input-container"></div>
          <div id="bottom-row"></div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSearch;
