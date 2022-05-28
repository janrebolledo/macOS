import MenuDropdown from "./MenuDropdown";

function Menu() {
  return (
    <header className="w-full h-12 flex flex-row items-center p-2 bg-black/20 text-white px-4">
      <nav className="h-full">
        <MenuDropdown type="icon" />
      </nav>
    </header>
  );
}

export default Menu;
