import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function Window(props) {
  const { name, width, height, top, left } = props;
  function toggleWindow() {
    var window = document.getElementById(name);

    window.firstChild.classList.toggle("hiddenImp");
  }
  function fullscreenWindow() {
    var window = document.getElementById(name);

    window.classList.toggle("fullscreened-window");
  }
  return (
    <Draggable bounds="main" handle="#handle">
      <Resizable
        defaultSize={{ width: width, height: height }}
        minWidth={300}
        minHeight={250}
        bounds="main"
        enable={{
          top: false,
          right: true,
          bottom: true,
          left: false,
          topRight: false,
          bottomRight: true,
          bottomLeft: false,
          topLeft: false,
        }}
        style={{ position: "absolute", top: top, left: left }}
        className="flex items-center justify-center transition-all ease-out"
        id={name}
      >
        <div className="text-white w-full h-full hiddenImp bg-stone-700 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid">
          <div className="flex flex-row p-4" id="handle">
            <p
              className="bg-red-400 rounded-full w-3 h-3 flex items-center justify-center text-transparent hover:text-red-800 text-[10px] font-rounded cursor-default mr-2"
              onClick={toggleWindow}
            >
              &times;
            </p>
            <p className="bg-yellow-400 rounded-full w-3 h-3 flex items-center justify-center text-transparent hover:text-yellow-800 text-[10px] font-rounded cursor-default mr-2">
              -
            </p>
            <p
              className="bg-green-500 rounded-full w-3 h-3 flex items-center justify-center text-transparent hover:text-green-800 text-[10px] font-rounded cursor-default"
              onClick={fullscreenWindow}
            >
              ⤡
            </p>
          </div>
          <div className="p-4 pt-0">{props.children}</div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Window;
