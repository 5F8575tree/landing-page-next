import { useEffect, useState } from "react";
import Image from "next/image";

const ReasonToBelieve = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = 1000;
    if (window.scrollY >= scrollThreshold) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className={`mt-16 flex flex-col justify-center h-screen ${
          isExpanded ? "expanded" : ""
        }`}
        id="reasons-to-believe"
      >
        <div
          className={`bg-white mx-8 rounded-xl p-6 flex flex-col items-center ${
            isExpanded ? "expanded" : ""
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
                <h5 className="font-bold text-slate-500">Do more from home</h5>
                <h6 className="text-xs text-slate-400">
                  Express pickup and delivery options available
                </h6>
              </div>
            </li>
            <li className="flex">
              <Image src="/check.svg" height="20" width="20" alt="check icon" />
              <div className="ml-2 mt-4">
                <h5 className="font-bold text-slate-500">
                  Test drives for real life
                </h5>
                <h6 className="text-xs text-slate-400">
                  24-hour take home test drives
                </h6>
              </div>
            </li>
            <li className="flex">
              <Image src="/check.svg" height="20" width="20" alt="check icon" />
              <div className="ml-2 mt-4">
                <h5 className="font-bold text-slate-500">
                  Love it or return it
                </h5>
                <h6 className="text-xs text-slate-400">
                  30-day money back (up to 1500 mi.)
                </h6>
              </div>
            </li>
            <li className="flex">
              <Image src="/check.svg" height="20" width="20" alt="check icon" />
              <div className="ml-2 mt-4 mb-8">
                <h5 className="font-bold text-slate-500">
                  All major systems covered
                </h5>
                <h6 className="text-xs text-slate-400">
                  90 days or 4,000 miles (whichever comes first)
                </h6>
              </div>
            </li>
          </ul>
          <a
            href="#"
            className="bg-red-500 px-20 py-3 uppercase rounded text-white"
          >
            shop all cars
          </a>
        </div>
      </div>
    </div>
  );
};

export default ReasonToBelieve;
