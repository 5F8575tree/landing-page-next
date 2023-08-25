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

  const inputStyle = `bg-slate-200
                      h-14
                      w-full
                      border-b
                      border-slate-700
                      rounded-t-lg
                      relative
                      focus:border-blue-700
                      focus:outline-none
                      focus:pl-2
                      focus:pt-3
                      placeholder:text-slate-600
                      focus:placeholder:text-slate-400
                      `;

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
          Pre-qualify with no
          <br />
          impact to your credit
        </h2>
        <div id="inner-budget-container">
          <div id="top-row">
            <h2 className="text-xs text-slate-400 ml-8 mt-5">
              What kinds of cars do you want?
            </h2>
            <div id="carousel" className="md:w-3/4 mx-auto my-2">
              <Carousel>
                {options.map((option, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-slate-200 rounded-lg flex flex-col justify-center items-center h-24 w-[90px]"
                    >
                      <Image
                        src={option.imageURL}
                        alt="car"
                        height="96"
                        width="96"
                        className="px-4"
                      />
                      <h2 className="text-sm text-center mt-2">
                        {option.title}
                      </h2>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div id="input-container" className="mx-4">
            <div id="monthly-payment">
              <div class="text-field mt-4">
                <input
                  type="text"
                  className={inputStyle + "px-2 pt-3"}
                  placeholder="$400"
                  id="monthly-payment-input"
                />
                <label
                  htmlFor="monthly-payment"
                  className="absolute left-6 text-xs mt-1 text-slate-400"
                >
                  Monthly Payment
                </label>
              </div>
            </div>
            <div id="down-payment">
              <div class="text-field mt-4">
                <input
                  type="text"
                  className={inputStyle + "px-2 pt-3"}
                  placeholder="$2,000"
                  id="down-payment-input"
                />
                <label
                  htmlFor="down-payment"
                  className="absolute left-6 text-xs mt-1 text-slate-400"
                >
                  Down Payment
                </label>
              </div>
            </div>
            <div id="credit-score">
              <div class="text-field mt-4">
                <select
                  name="credit-score"
                  id="credit-score"
                  className={inputStyle + "px-2 pt-3 text-slate-600"}
                >
                  <option value="5.5">Excellent (800+)</option>
                  <option value="7.5">Very Good (740-799)</option>
                  <option value="11">Good (670-739)</option>
                  <option value="16">Fair (580-669)</option>
                  <option value="24">Challenged (under 579)</option>
                </select>
                <label
                  htmlFor="credit-score"
                  className="absolute left-6 text-xs mt-1 text-slate-400"
                >
                  Credit Score
                </label>
              </div>
            </div>
          </div>
          <div id="bottom-row" className="mx-4 text-center mt-8">
            <div id="bottom-row-price-header">
              <h3 className="blue-text font-bold">Est. Vehicle Price</h3>
            </div>
            <div id="bottom-row-price-section">
              <div
                id="calculated-value"
                className="blue-text font-bold text-6xl mt-2 mb-5"
              >
                $20,115
              </div>
              <a
                href="#"
                className="bg-amber-500 px-16 py-3 rounded uppercase text-white hover:cursor-pointer hover-bg-amber-400"
              >
                Get Pre-Qualified
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSearch;
