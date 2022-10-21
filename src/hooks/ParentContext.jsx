import React from "react";
import ChildContext from "./ChildContext";

export default function ParentContext() {
  return (
    <>
      <h2>useContext</h2>
      <div>ParentContext</div>
      <ChildContext></ChildContext>
    </>
  );
}
