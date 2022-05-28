import MenuDropdown from "./MenuDropdown";

function Menu() {
  return (
    <header className="w-full h-12 flex flex-row items-center bg-black/20 text-white px-4 absolute">
      <nav className="h-full flex flex-row">
        <MenuDropdown type="icon" />
        <MenuDropdown type="real" />
      </nav>
    </header>
  );
}

export default Menu;
