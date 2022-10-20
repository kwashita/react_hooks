import React, { useContext } from "react";
import { ThemesContext } from "../themes";

export default function ChildContext() {
  const { light, dark } = useContext(ThemesContext);
  // console.log(themes);
  return (
    <>
      <div>ChildContext</div>
      <button style={dark}>styles from App</button>
    </>
  );
}
