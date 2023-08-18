import Image from "next/image";
import { useState, useRef } from "react";

const LocationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);

  let timeoutId;

  const onHover = () => {
    clearTimeout(timeoutId);
    setMenuOpen(true);
  };

  const onMouseLeave = () => {
    timeoutId = setTimeout(() => {
      if (
        menuRef.current &&
        !menuRef.current.contains(document.activeElement)
      ) {
        setMenuOpen(false);
      }
    }, 100);
  };

  return (
    <li className="relative" onMouseOver={onHover} onMouseLeave={onMouseLeave}>
      {menuOpen ? (
        <div
          ref={menuRef}
          className="
            flex-cols
            absolute
            -bottom-72
            right-0
            w-72
            bg-white
            p-3
            z-10
            mt-2
            drop-shadow
            rounded-md
            text-sm"
        >
          <p className="text-xs text-slate-400">Your store for 66204:</p>
          <h3 className="text-lg font-bold pb-2">Kansas City</h3>
          <p className="underline decoration-sky-500 text-sky-500 pb-2 hover:cursor-pointer">
            View more store details
          </p>
          <h4 className="text-slate-500 text-base pb-1">
            6801 East Frontage Road <br />
            Merriam, KS 66204
          </h4>
          <h5 className="text-green-700 pb-4">
            Currently open:{" "}
            <span className="text-slate-400">Today 10 AM - 9 PM</span>
          </h5>
          <button className="text-blue-600 py-3 px-10 border border-blue-600 rounded-md">
            SEE CARS AT THIS STORE
          </button>
          <form action="search" className="pt-2">
            <label htmlFor="location" className="text-xs blue-text font-bold">
              Change your store
            </label>
            <input type="text" id="location" />
          </form>
        </div>
      ) : (
        <div></div>
      )}
      <div className="flex">
        <Image
          src="/map-pin.svg"
          alt="map pin icon"
          width="20"
          height="20"
          className="mr-3 cursor-pointer"
        />
        <div className="flex-col cursor-pointer">
          <p className="text-xs font-light">Your store for 66204</p>
          <div className="flex items-center">
            <h4>Kansas City</h4>
            <Image
              src="/caret-down.svg"
              alt="caret down icon"
              width="8"
              height="8"
              className="ml-2"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default LocationSection;
