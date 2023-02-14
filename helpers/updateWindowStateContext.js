import { WindowContext } from "../contexts/WindowContext";

// Pass in Window Array, Name, and State to update the context

export function updateWindowState(windows, name, state) {
  const updatedWindow = windows.findIndex((object) => object.name == name);
  const updatedWindows = (windows[updatedWindow].state = state);

  return windows;
}
