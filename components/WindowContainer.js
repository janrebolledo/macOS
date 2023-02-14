import React, { useContext } from "react";
import { WindowContext } from "../contexts/WindowContext";
import Window from "./Window";

function WindowContainer() {
  const { windows } = useContext(WindowContext);
  return (
    <>
      <main className="max-w-full w-full h-[calc(100%-32px)] overflow-hidden top-8 absolute">
        {windows.map((window, index) => (
          <Window window={window} key={index} />
        ))}
      </main>
    </>
  );
}

export default WindowContainer;
