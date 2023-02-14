import React, { useState } from "react";
import Dock from "../components/Menu/Dock";
import Menu from "../components/Menu/Menu";
import WindowContainer from "../components/WindowContainer";
import { WindowContext } from "../contexts/WindowContext";
import "../styles/globals.css";

const placeholderWindows = [
  {
    name: "window",
    text: "dogs > cats",
    state: "active",
    showInDock: true,
  },
  {
    name: "free minecraft",
    text: "warriors",
    state: "closed",
    showInDock: false,
  },
];

function App({ Component, pageProps }) {
  const [windows, setWindows] = useState(placeholderWindows);
  return (
    <WindowContext.Provider value={{ windows, setWindows }}>
      <Menu />
      <Dock />
      <WindowContainer />
      <Component {...pageProps} />
    </WindowContext.Provider>
  );
}

export default App;
