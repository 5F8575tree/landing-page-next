import Image from "next/image";
import { useState } from "react";

const MenuDrawer = ({ handleOnClick }) => {
  const [openShopMenu, setOpenShopMenu] = useState(true);
  const [openSellTradeMenu, setOpenSellTradeMenu] = useState(true);
  const [openFinanceMenu, setOpenFinanceMenu] = useState(true);
  const [openMoreMenu, setOpenMoreMenu] = useState(false);

  const handleOnShopCaretClick = () => {
    setOpenShopMenu(!openShopMenu);
  };

  const handleOnSellTradeCaretClick = () => {
    setOpenSellTradeMenu(!openSellTradeMenu);
  };

  const handleOnFinanceCaretClick = () => {
    setOpenFinanceMenu(!openFinanceMenu);
  };

  const handleOnMoreCaretClick = () => {
    setOpenMoreMenu(!openMoreMenu);
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
      <span className="border-b mt-2"></span>
      <div>
        <section className="m-5">
          <button className="flex items-center justify-between w-full blue-text">
            <span>Shop</span>
            {openShopMenu ? (
              <Image
                src="caret-up.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnShopCaretClick}
              />
            ) : (
              <Image
                src="caret-down.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnShopCaretClick}
              />
            )}
          </button>
          {openShopMenu ? (
            <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-slate-600">
              <li>Browse by category</li>
              <li>View all inventory</li>
              <li>Shop cars near me</li>
              <li>Find a store</li>
            </ul>
          ) : (
            <div></div>
          )}
        </section>
      </div>
      <span className="border-b mt-2"></span>
      <div>
        <section className="m-5">
          <button className="flex items-center justify-between w-full blue-text">
            <span>Sell/Trade</span>
            {openSellTradeMenu ? (
              <Image
                src="caret-up.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnSellTradeCaretClick}
              />
            ) : (
              <Image
                src="caret-down.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnSellTradeCaretClick}
              />
            )}
          </button>
          {openSellTradeMenu ? (
            <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-slate-600">
              <li>Get an instant offer</li>
              <li>How it works</li>
            </ul>
          ) : (
            <div></div>
          )}
        </section>
      </div>
      <span className="border-b mt-2"></span>
      <div>
        <section className="m-5">
          <button className="flex items-center justify-between w-full blue-text">
            <span>Finance</span>
            {openFinanceMenu ? (
              <Image
                src="caret-up.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnFinanceCaretClick}
              />
            ) : (
              <Image
                src="caret-down.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnFinanceCaretClick}
              />
            )}
          </button>
          {openFinanceMenu ? (
            <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-slate-600">
              <li>Get pre-qualified</li>
              <li>How it works</li>
              <li>AutoShop Finance</li>
            </ul>
          ) : (
            <div></div>
          )}
        </section>
      </div>
      <span className="border-b mt-2"></span>
      <div>
        <section className="m-5">
          <button className="flex items-center justify-between w-full blue-text">
            <span>More</span>
            {openMoreMenu ? (
              <Image
                src="caret-up.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnMoreCaretClick}
              />
            ) : (
              <Image
                src="caret-down.svg"
                alt="down icon"
                height="10"
                width="10"
                onClick={handleOnMoreCaretClick}
              />
            )}
          </button>
          {openMoreMenu ? (
            <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-slate-600">
              <li>Services & repairs</li>
              <li>FAQ & support</li>
              <li>Why AutoShop</li>
              <li>Buying online</li>
            </ul>
          ) : (
            <div></div>
          )}
        </section>
      </div>
    </div>
  );
};

export default MenuDrawer;
