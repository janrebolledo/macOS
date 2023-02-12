import React, { useContext } from "react";
import Dock from "../components/Menu/Dock";
import Menu from "../components/Menu/Menu";
import WindowContainer from "../components/WindowContainer";
import { WindowContext } from "../components/WindowContext";
import "../styles/globals.css";

const windows = [
  {
    name: "window",
    text: "dogs > cats",
    state: "active",
  },
  {
    name: "free minecraft",
    text: "warriors",
    state: "minimized",
  },
];

function App({ Component, pageProps }) {
  return (
    <WindowContext.Provider value={windows}>
      <Menu />
      <Dock />
      <WindowContainer />
      <Component {...pageProps} />
    </WindowContext.Provider>
  );
}

export default App;
