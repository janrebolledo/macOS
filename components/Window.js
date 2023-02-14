import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { WindowContext } from "../contexts/WindowContext";

function Window({ window }) {
  const { name, text, state } = window;

  const [windowState, setWindowState] = useState(state);
  const { windows, setWindows } = useContext(WindowContext);

  function handleState(newState) {
    if (newState === "closed") {
      setWindowState("closed");
    }
    if (newState === "minimized") {
      setWindowState("minimized");
    }

    if (newState === "maximized") {
      setWindowState("maximized");
    }

    if (windowState === "maximized") {
      setWindowState("active");
      var newState = "active";
    }

    const updatedWindow = windows.findIndex((object) => object.name == name);
    windows[updatedWindow].state = newState;

    setWindows(windows);
    console.log(windows);
  }

  return (
    <Draggable handle="#handle">
      <Resizable
        // defaultSize={{ width: width, height: height }}
        defaultSize={{ width: 300, height: 250 }}
        minWidth={300}
        minHeight={250}
        bounds="main"
        className={`items-center justify-center absolute top-24 left-24 ${
          windowState === "active" ? "flex" : "hidden"
        } ${windowState === "maximized" ? "fullscreened-window" : ""}`}
      >
        <div className="text-white w-full h-full min-w-[300px] min-h-[250] bg-stone-700 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid">
          <div className="flex flex-row items-center">
            <div className="ml-4 gap-2 my-4 flex flex-row items-center">
              <p
                onClick={() => handleState("closed")}
                className="bg-red-400 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-red-800 text-[10px] font-rounded cursor-default"
              >
                &times;
              </p>
              <p
                onClick={() => handleState("minimized")}
                className="bg-yellow-400 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-yellow-800 text-[10px] font-rounded cursor-default"
              >
                -
              </p>
              <p
                onClick={() => handleState("maximized")}
                className="bg-green-500 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-green-800 text-[10px] font-rounded cursor-default"
              >
                ⤡
              </p>
            </div>
            <span className="w-full h-full m-0" id="handle">
              &nbsp;
            </span>
          </div>
          <div className="p-4 pt-0">
            {name}
            <br /> {text}
          </div>
        </div>
      </Resizable>
    </Draggable>
  );
}

export default Window;
