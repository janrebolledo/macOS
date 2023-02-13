import React, { useContext } from "react";
import { WindowContext } from "../../contexts/WindowContext";

function Dock() {
  const { windows } = useContext(WindowContext);

  return (
    <footer className="w-full h-8 flex flex-row items-center justify-center text-white px-1 absolute bottom-[4%]">
      <nav className="h-full flex flex-row items-center justify-center bg-black/20 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid p-8">
        {windows.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </nav>
    </footer>
  );
}

function Icon({ icon }) {
  const { name, state } = icon;
  return (
    <div>
      <div>{name}</div>
      {state != "closed"}
      <p>.</p>
    </div>
  );
}

export default Dock;
