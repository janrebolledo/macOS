import React from "react";
import Image from "next/image";
import Logo from "../../public/icon.png";
import { useEffect } from "react";

function MenuDropdown(props) {
  var type = props.type;

  function toggleDropdown(type) {
    const dropdown = document.getElementById(type);

    dropdown.classList.toggle("hidden");
  }

  function hoverOpenDropdown(type) {
    var dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      if (dropdown.classList.contains("hidden") === false) {
        dropdown.classList.add("hidden");

        toggleDropdown(type);
      }
    });
  }

  function closeDropdowns() {
    const main = document.querySelector("main");

    main.addEventListener("click", () => {
      var dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    });
  }

  useEffect(() => {
    closeDropdowns();
  }, []);

  if (props.type === "icon" || "real") {
    return (
      <div className="h-full">
        <div
          className="py-2 hover:bg-white/20 px-4 rounded-md shaddow-xl backdrop-blur-md h-full flex items-center dropdown-label"
          onClick={() => toggleDropdown(type)}
          onMouseEnter={() => hoverOpenDropdown(type)}
        >
          <Image src={Logo} width={16} height={16} />
        </div>
        <div
          id={type}
          className="absolute top-8 hidden rounded-md bg-black/40 backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid py-2 px-2 dropdown"
        >
          <p className="hover:bg-blue-500 px-2 py-1 text-xs rounded-sm">
            About
          </p>
        </div>
      </div>
    );
  }
}

export default MenuDropdown;
