import Image from "next/image";
import { useState } from "react";

const MenuDrawer = ({ handleOnClick }) => {
  const [menuItems, setMenuItems] = useState([
    { label: "Shop", open: true },
    { label: "Sell/Trade", open: true },
    { label: "Finance", open: true },
    { label: "More", open: false },
  ]);

  const handleOnCaretClick = (index) => {
    const newState = [...menuItems];
    newState[index].open = !newState[index].open;
    setMenuItems(newState);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between sm:ml-0 ml-4">
        <Image
          src="/cross.svg"
          alt="exit icon"
          height="20"
          width="20"
          onClick={handleOnClick}
          className="hover:cursor-pointer self-center"
        />
      </div>
      {menuItems.map((menuItem, index) => (
        <div key={index}>
          <span className="border-b mt-2"></span>
          <section className="m-5">
            <button
              className="flex items-center justify-between w-full blue-text"
              onClick={() => handleOnCaretClick(index)}
            >
              <span>{menuItem.label}</span>
              <Image
                src={menuItem.open ? "caret-up.svg" : "caret-down.svg"}
                alt="down icon"
                height="10"
                width="10"
              />
            </button>
            {menuItem.open && (
              <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-slate-600">
                {index === 0 && (
                  <>
                    <li>Browse by category</li>
                    <li>View all inventory</li>
                    <li>Shop cars near me</li>
                    <li>Find a store</li>
                  </>
                )}
                {index === 1 && (
                  <>
                    <li>Get an instant offer</li>
                    <li>How it works</li>
                  </>
                )}
                {index === 2 && (
                  <>
                    <li>Get pre-qualified</li>
                    <li>How it works</li>
                    <li>AutoShop Finance</li>
                  </>
                )}
                {index === 3 && (
                  <>
                    <li>Services & repairs</li>
                    <li>FAQ & support</li>
                    <li>Why AutoShop</li>
                    <li>Buying online</li>
                  </>
                )}
              </ul>
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default MenuDrawer;
