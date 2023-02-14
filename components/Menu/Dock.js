import React, { useContext } from "react";
import { WindowContext } from "../../contexts/WindowContext";
import { Icon } from "./Icon";

function Dock() {
  const { windows } = useContext(WindowContext);

  return (
    <footer className="w-full h-8 flex flex-row items-center justify-center text-white px-1 absolute bottom-[4%]">
      <nav className="h-full flex flex-row items-center justify-center gap-4 bg-black/20 rounded-3xl backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid px-4 py-10">
        {windows.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </nav>
    </footer>
  );
}

export default Dock;
