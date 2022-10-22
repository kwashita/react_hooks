import React, { useContext } from "react";
import { ThemesContext, useThemeContext } from "../hooks/ThemeContext";

export default function ChildContext() {
  const { dark, themes, toggleDark } = useThemeContext();

  return (
    <>
      <div style={dark ? themes.dark : themes.light}>ChildContext</div>
      <button onClick={toggleDark}>change theme</button>
    </>
  );
}
