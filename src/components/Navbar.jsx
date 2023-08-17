import Image from "next/image";

const Navbar = () => {
  return (
    <div id="navbar" className="flex justify-center w-full px-24 pt-3">
      <div className="flex justify-between w-full items-center">
        <section id="left" className="flex blue-text">
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
          <div className="flex items-center cursor-pointer">
            More{" "}
            <Image
              src="/caret-down.svg"
              alt="caret down icon"
              height="8"
              width="8"
              className="ml-2"
            />
          </div>
        </section>
        <section id="right" className="blue-text">
          <ul className="flex items-center">
            <li>
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
            <li className="ml-8">
              <Image
                src="/heart.svg"
                alt="heart icon"
                width="22"
                height="22"
                className="stroke-red-200 cursor-pointer"
              />
            </li>
            <li className="ml-8">
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
