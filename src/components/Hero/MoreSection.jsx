import Image from "next/image";
import { useState, useRef } from "react";

const MoreSection = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Ref to store a reference to the menu content so we can check if open and active
  const menuRef = useRef(null);

  // Variable for storing a timeout that comes into effect when a mouse enters target.
  // This is stored in a variable so that we can also clear the timeout.
  let timeoutId;

  const onHover = () => {
    // clear any outstanding timeouts
    clearTimeout(timeoutId);
    setOpenMenu(true);
  };

  const onMouseOut = () => {
    // cover delay between "more" link mouseLeave and menu mouseEnter
    timeoutId = setTimeout(() => {
      if (
        // menu must be present in the DOM
        menuRef.current &&
        // cursor must not currently be on the menu content
        !menuRef.current.contains(document.activeElement)
      ) {
        setOpenMenu(false);
      }
    }, 20);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onMouseOver={onHover}
        onMouseLeave={onMouseOut}
      >
        More{" "}
        <Image
          src="/caret-down.svg"
          alt="caret down icon"
          height="8"
          width="8"
          className="ml-2"
        />
      </div>
      {openMenu ? (
        <div
          ref={menuRef}
          className="
            flex
            absolute
            -bottom-50
            right-0
            w-48
            bg-white
            py-2
            z-10
            mt-2
            drop-shadow
            rounded-md
            text-sm"
          onMouseOver={onHover}
          onMouseLeave={onMouseOut}
        >
          <ul>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              Service & repairs
            </li>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              FAQ & support
            </li>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              Why CarMax
            </li>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              Buying online
            </li>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              Car research & advice
            </li>
            <li className="hover:bg-slate-100 hover:cursor-pointer py-3 w-48 px-4">
              Warranties
            </li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MoreSection;
