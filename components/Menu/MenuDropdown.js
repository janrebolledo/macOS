import React from "react";
import Image from "next/image";
import Logo from "../../public/icon.png";

function MenuDropdown(props) {
  var type = props.type;

  function toggleDropdown(type) {
    const dropdown = document.getElementById(type);

    dropdown.classList.toggle("hidden");
  }

  if (props.type === "icon") {
    return (
      <div className="h-full">
        <div
          className="hover:bg-white/50 p-2 rounded-md h-full flex items-center"
          onClick={() => toggleDropdown(type)}
        >
          <Image src={Logo} width={16} height={16} />
        </div>
        <div
          id={type}
          className="absolute top-12 hidden rounded-md bg-black/40 backdrop-blur-md shadow-xl border-[1px] border-gray-400 border-solid p-4"
        >
          this is a menu
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
