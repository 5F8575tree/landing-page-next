import Image from "next/image";
import { useEffect, useState } from "react";

const InstantOffers = () => {
  const [phoneImageIsVisible, setPhoneImageIsVisible] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(false);

  const handleScroll = () => {
    const imageScrollThreshold = 2400;
    const formScrollThreshold = 2600;
    if (
      window.scrollY >= imageScrollThreshold &&
      window.scrollY >= formScrollThreshold
    ) {
      setPhoneImageIsVisible(true);
      setFormIsVisible(true);
    } else if (window.scrollY >= imageScrollThreshold) {
      setPhoneImageIsVisible(true);
      setFormIsVisible(false);
    } else {
      setPhoneImageIsVisible(false);
      setFormIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const inputStyle = `bg-slate-200
                      h-14
                      w-full
                      border-b
                      border-slate-700
                      rounded-t-lg
                      relative
                      mb-4
                      focus:border-blue-700
                      focus:outline-none
                      focus:pl-2
                      focus:pt-3
                      placeholder:text-slate-600
                      focus:placeholder:text-slate-400
                      `;

  return (
    <div className="relative flex flex-col items-center">
      <Image
        src="/phone-image.jpg"
        width="412"
        height="900"
        alt="businesswoman looking at phone and smiling"
        className={`h-screen ${
          phoneImageIsVisible ? "phone-image-visible" : ""
        }`}
        id="phone-image"
      />
      <div
        className={`bg-white flex flex-col items-center py-10 px-8 mx-8 absolute top-28 left-0 rounded-xl ${
          formIsVisible ? "form-visible" : ""
        }`}
        id="instant-offers-form"
      >
        <h5 className="blue-text uppercase font-bold">Sell/Trade In</h5>
        <h2 className="blue-text text-4xl font-bold">
          Real offers. <br />
          Really fast.
        </h2>
        <form action="submit" className="mt-8">
          <input type="text" className={inputStyle} />
          <label
            htmlFor=""
            className="absolute left-10 text-xs mt-1 text-slate-400"
          >
            License plate number
          </label>
          <input type="text" className={inputStyle} />
          <label
            htmlFor=""
            className="absolute left-10 text-xs mt-1 text-slate-400"
          >
            Where&#39;s your car registered?
          </label>
          <input type="text" className={inputStyle} />
          <label
            htmlFor=""
            className="absolute left-10 text-xs mt-1 text-slate-400"
          >
            What&#39;s your zip code?
          </label>
        </form>
        <a
          href="#"
          className="uppercase bg-slate-300 text-slate-500 font-bold py-3 mt-6 w-full text-center rounded"
        >
          get started
        </a>
        <p className="text-xs mt-2 text-slate-500">
          Most qualify. Some we&#39;ll ask to verify in person.
        </p>
      </div>
    </div>
  );
};

export default InstantOffers;
