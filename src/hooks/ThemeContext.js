import React, { useContext, useState } from "react";

const ThemesContext = React.createContext();

export function useThemeContext() {
  return useContext(ThemesContext);
}

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark((pre) => !pre);
  };
  const themes = {
    light: {
      color: "yellow",
      background: "skyblue",
    },
    dark: {
      color: "red",
      background: "blue",
    },
  };
  return (
    <>
      <ThemesContext.Provider value={{ dark, themes, toggleDark }}>
        {children}
      </ThemesContext.Provider>
    </>
  );
}
