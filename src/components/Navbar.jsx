import Image from "next/image";
import MoreSection from "./MoreSection";
import LocationSection from "./LocationSection";

const Navbar = () => {
  return (
    <div id="navbar" className="flex justify-center w-full">
      <div className="flex justify-between w-full items-center">
        <section id="left" className="flex blue-text items-center">
          <Image
            src="/jpn_car_logo.svg"
            alt="logo"
            width="50"
            height="50"
            className="mx-4 cursor-pointer"
          />
          <ul className="flex items-center">
            <li className="mr-4 cursor-pointer">Shop</li>
            <li className="mr-4 cursor-pointer">Sell/Trade</li>
            <li className="mr-4 cursor-pointer">Finance</li>
          </ul>
          <MoreSection />
        </section>
        <section id="right" className="blue-text">
          <ul className="flex items-center">
            <LocationSection />
            <li className="ml-8" id="svg-container">
              <Image
                src="/heart.svg"
                alt="heart icon"
                width="22"
                height="22"
                className="stroke-red-200 cursor-pointer"
              />
            </li>
            <li className="ml-8" id="svg-container-user">
              <Image
                src="/user.svg"
                alt="user icon"
                width="20"
                height="20"
                className="cursor-pointer"
              />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
