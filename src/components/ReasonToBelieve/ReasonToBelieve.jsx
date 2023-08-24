import { useEffect, useState } from "react";
import InnerContent from "./InnerContent";

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
    <div className="flex flex-col items-center w-full relative">
      <div
        className={`mt-16 flex flex-col justify-center h-screen ${
          isExpanded ? "expanded" : ""
        }`}
        id="reasons-to-believe"
      ></div>
      <InnerContent isExpanded={isExpanded} />
    </div>
  );
};

export default ReasonToBelieve;
