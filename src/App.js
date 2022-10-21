import React from "react";
import UseState from "./hooks/UseState";
import { ThemesContext, themes } from "./themes";
import ParentContext from "./hooks/ParentContext";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";

export default function App() {
  return (
    <>
      <div>App</div>
      <hr />
      {/* <UseState initValue={10}></UseState> */}
      <hr />
      <ThemesContext.Provider value={themes}>
        <ParentContext></ParentContext>
      </ThemesContext.Provider>
      <hr />
      ``
      {/* <UseEffect></UseEffect> */}
      <hr />
      {/* <UseMemo></UseMemo> */}
      <hr />
      {/* <UseRef></UseRef> */}
    </>
  );
}
