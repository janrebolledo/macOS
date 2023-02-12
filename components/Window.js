import React, { useState, useContext } from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { WindowContext } from "./WindowContext";

function Window({ window }) {
  const { name, text, state } = window;

  const [windowState, setWindowState] = useState(state);
  const [context, setContext] = useContext(WindowContext);

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

    const newWindow = { ...context, state: newState };

    setContext(newWindow);
  }

  return (
    <Draggable handle="#handle">
      <Resizable
        // defaultSize={{ width: width, height: height }}
        maxHeight={1080}
        bounds="main"
        className={`flex items-center justify-center absolute top-24 left-24 ${
          windowState === "active" ? "block" : "hidden"
        } ${windowState === "maximized" ? "fullscreened-window" : ""}`}
      >
        <div className="text-white w-full h-full min-w-[300px] min-h-[250] bg-stone-700 rounded-md backdrop-blur-md shadow-xl border-[1px] border-gray-600 border-solid">
          <div className="flex flex-row items-center">
            <p
              onClick={() => handleState("closed")}
              className="bg-red-400 ml-4 my-4 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-red-800 text-[10px] font-rounded cursor-default mr-2"
            >
              &times;
            </p>
            <p
              onClick={() => handleState("minimized")}
              className="bg-yellow-400 my-4 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-yellow-800 text-[10px] font-rounded cursor-default mr-2"
            >
              -
            </p>
            <p
              onClick={() => handleState("maximized")}
              className="bg-green-500 my-4 rounded-full min-w-[0.75em] min-h-[0.75em] w-3 h-3 flex items-center justify-center text-transparent hover:text-green-800 text-[10px] font-rounded cursor-default"
            >
              ⤡
            </p>
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
