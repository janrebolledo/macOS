import React from "react";
import Menu from "./Menu/Menu";

function Layout(props) {
  return (
    <>
      <Menu />
      {props.children}
    </>
  );
}

export default Layout;
