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
            className="mx-4"
          />
          <ul className="flex items-center">
            <li className="mr-4">Shop</li>
            <li className="mr-4">Sell/Trade</li>
            <li className="mr-4">Finance</li>
            <li>More</li>
          </ul>
        </section>
        <section id="right" className="blue-text">
          <ul className="flex">
            <li>Location</li>
            <li className="ml-4">Heart</li>
            <li className="ml-4">User</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
