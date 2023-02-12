import React from "react";

function Dock() {
  return (
    <footer className="w-full h-8 flex flex-row items-center justify-center text-white px-1 absolute bottom-[4%]">
      <nav className="h-full flex flex-row items-center justify-center bg-black/20 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid p-8">
        <button>dock!</button>
      </nav>
    </footer>
  );
}

export default Dock;
