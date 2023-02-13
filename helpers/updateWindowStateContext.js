import { WindowContext } from "../contexts/WindowContext";
import { useContext } from "react";

// Pass in Name and State to update the context

export function updateWindowState(name, state) {
  const { windows, setWindows } = useContext(WindowContext);

  const updatedWindow = windows.findIndex((object) => object.name == name);
  const updatedWindows = (windows[updatedWindow].state = state);

  setWindows(windows);
  console.log(windows);
  return windows;
}
