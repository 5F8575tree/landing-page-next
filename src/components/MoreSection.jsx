import Image from "next/image";
import { useState } from "react";

const MoreSection = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onHover = () => {
    setOpenMenu(true);
  };

  const onMouseOut = () => {
    setOpenMenu(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onMouseEnter={onHover}
        onMouseOut={onMouseOut}
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
          onMouseEnter={onHover}
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
