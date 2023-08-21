import Image from "next/image";
import { useState } from "react";
import LocationSection from "./LocationSection";

const NavbarMobile = ({ isSmallScreen }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOnClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className="flex justify-between pt-3">
      <section className="flex justify-center relative">
        <Image
          src="/burger.svg"
          alt="menu icon"
          height="20"
          width="20"
          onClick={handleOnClick}
          className="hover:cursor-pointer"
        />
        <div id="mobile-menu">
          <div
            className={
              menuIsOpen ? "mobile-menu-is-open" : "mobile-menu-is-closed"
            }
          >
            {menuIsOpen ? (
              <div className="flex flex-col">
                <div className="flex justify-between sm:ml-0 ml-4">
                  {/* <Image
                    src="/car_shop_logo.png"
                    alt="company logo"
                    height="60"
                    width="60"
                    className="self-center"
                  /> */}
                  <Image
                    src="/cross.svg"
                    alt="exit icon"
                    height="20"
                    width="20"
                    onClick={handleOnClick}
                    className="hover:cursor-pointer self-center"
                  />
                </div>
                <ul className="ml-4">
                  <li>Shop</li>
                  <li>Sell/Trade</li>
                  <li>Finance</li>
                  <li>More</li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        {/* <Image
          src="/car_shop_logo.png"
          alt="company logo"
          height="30"
          width="30"
          className="ml-6"
        /> */}
      </section>
      <section id="right" className="blue-text flex">
        <LocationSection isSmallScreen={isSmallScreen} />
        <ul className="flex items-center">
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
              width="16"
              height="16"
              className="cursor-pointer mr-2"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default NavbarMobile;
