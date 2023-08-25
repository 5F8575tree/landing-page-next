import Image from "next/image";
import { useEffect, useState } from "react";

const InnerContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 1000;
    if (window.scrollY >= scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white w-[350px] lg:w-[600px] py-10 lg:py-12 mx-8 rounded-xl p-6 flex flex-col items-center absolute top-1/3 ${
        isVisible ? "visible" : ""
      }`}
      id="reasons-to-believe-inner-container"
    >
      <h2 className="blue-text font-bold text-4xl text-center">
        The way it should be
      </h2>
      <ul className="mt-6">
        <li className="flex">
          <Image src="/check.svg" height="20" width="20" alt="check icon" />
          <div className="ml-2">
            <h5 className="font-bold text-slate-500 lg:ml-8 lg:mb-2">Do more from home</h5>
            <h6 className="text-xs text-slate-400 lg:ml-8 lg:mb-2">
              Express pickup and delivery options available
            </h6>
          </div>
        </li>
        <li className="flex">
          <Image src="/check.svg" height="20" width="20" alt="check icon" />
          <div className="ml-2 mt-4">
            <h5 className="font-bold text-slate-500 lg:ml-8 lg:mb-2">
              Test drives for real life
            </h5>
            <h6 className="text-xs text-slate-400 lg:ml-8 lg:mb-2">
              24-hour take home test drives
            </h6>
          </div>
        </li>
        <li className="flex">
          <Image src="/check.svg" height="20" width="20" alt="check icon" />
          <div className="ml-2 mt-4">
            <h5 className="font-bold text-slate-500 lg:ml-8 lg:mb-2">Love it or return it</h5>
            <h6 className="text-xs text-slate-400 lg:ml-8 lg:mb-2">
              30-day money back (up to 1500 mi.)
            </h6>
          </div>
        </li>
        <li className="flex">
          <Image src="/check.svg" height="20" width="20" alt="check icon" />
          <div className="ml-2 mt-4 mb-8 lg:mb-0">
            <h5 className="font-bold text-slate-500 lg:ml-8 lg:mb-2">
              All major systems covered
            </h5>
            <h6 className="text-xs text-slate-400 lg:ml-8 lg:mb-2">
              90 days or 4,000 miles (whichever comes first)
            </h6>
          </div>
        </li>
      </ul>
      <a
        href="#"
        className="bg-amber-500 hover:bg-amber-400 px-20 py-3 lg:mt-8 uppercase rounded text-white"
      >
        shop all cars
      </a>
    </div>
  );
};

export default InnerContent;
