import MenuDropdown from "./MenuDropdown";

function Menu() {
  return (
    <header className="w-full h-8 flex flex-row items-center bg-black/20 text-white px-1 absolute">
      <nav className="h-full flex flex-row">
        <MenuDropdown />
      </nav>
    </header>
  );
}

export default Menu;
