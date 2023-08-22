import Image from "next/image";
import { useState } from "react";
import LocationSection from "./LocationSection";
import MenuDrawer from "./MenuDrawer";

const NavbarMobile = ({ isSmallScreen, setMenuIsOpen, menuIsOpen }) => {
  return (
    <div className="flex justify-between pt-3">
      <section className="flex justify-center relative">
        <Image
          src="/burger.svg"
          alt="menu icon"
          height="20"
          width="20"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className="hover:cursor-pointer"
        />
        <div id="mobile-menu">
          <div
            className={
              menuIsOpen ? "mobile-menu-is-open" : "mobile-menu-is-closed"
            }
          >
            {menuIsOpen ? (
              <MenuDrawer
                setMenuIsOpen={setMenuIsOpen}
                menuIsOpen={menuIsOpen}
              />
            ) : (
              <div></div>
            )}
          </div>
        </div>
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
