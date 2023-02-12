import React from "react";
import Image from "next/image";
import Logo from "../../public/icon.png";
import Window from "../Window";

function MenuDropdown(props) {
  return (
    <div className="h-full">
      <div className="py-2 hover:bg-white/20 px-4 rounded-md shaddow-xl backdrop-blur-md h-full flex items-center dropdown-label">
        <Image src={Logo} width={16} height={16} />
      </div>
      <div className="absolute top-8 hidden rounded-md bg-black/40 backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid py-2 px-2 dropdown">
        <p className="hover:bg-blue-500 px-2 py-1 text-xs rounded-sm">About</p>
      </div>
    </div>
  );
}

export default MenuDropdown;
