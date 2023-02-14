import { Children, useContext } from "react";
import { WindowContext } from "../../contexts/WindowContext";
import Image from "next/image";
import Logo from "../../public/icon.png";

function Menu() {
  const { windows } = useContext(WindowContext);

  var activeWindow = windows.filter((window) => window.state === "active");
  activeWindow = activeWindow[0];
  console.log(activeWindow);
  return (
    <header className="w-full h-8 flex flex-row items-center bg-black/20 text-white px-1 absolute z-20">
      <nav className="h-full flex flex-row">
        <div className="h-full">
          <div className="py-2 hover:bg-white/20 px-4 rounded-md shaddow-xl backdrop-blur-md h-full flex items-center dropdown-label">
            <Image src={Logo} width={16} height={16} />
          </div>
        </div>
        {activeWindow.menuItems.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </nav>
    </header>
  );
}

export default Menu;

function MenuItem({ item }) {
  const { title, children } = item;
  return (
    <div className="h-full">
      <div className="py-2 hover:bg-white/20 px-4 rounded-md shaddow-xl backdrop-blur-md h-full flex items-center dropdown-label">
        {title}
      </div>
      <div className="absolute top-8 rounded-md bg-black/40 backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid py-2 px-2 dropdown">
        {children.map((option, index) => (
          <MenuItemOption option={option} key={index} />
        ))}
      </div>
    </div>
  );
}

function MenuItemOption({ option }) {
  return (
    <p className="hover:bg-blue-500 px-2 py-1 text-xs rounded-sm">{option}</p>
  );
}
