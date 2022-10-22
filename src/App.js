import React, { useContext, useState } from "react";
import UseState from "./hooks/UseState";
import ParentContext from "./hooks/ParentContext";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseRef from "./hooks/UseRef";
import UseReducer from "./hooks/UseReducer";
import { ThemeProvider } from "./hooks/ThemeContext";

export default function App() {
  return (
    <>
      <div>App</div>
      <hr />
      {/* <UseState initValue={10}></UseState> */}
      <hr />
      {/* <ThemeProvider>
        <ParentContext></ParentContext>
      </ThemeProvider> */}

      <hr />
      {/* <UseEffect></UseEffect> */}
      <hr />
      {/* <UseMemo></UseMemo> */}
      <hr />
      {/* <UseRef></UseRef> */}
      <hr />
      <UseReducer></UseReducer>
    </>
  );
}
