import React from "react";
import ChildContext from "./ChildContext";

export default function ParentContext() {
  return (
    <>
      <div>ParentContext</div>
      <ChildContext></ChildContext>
    </>
  );
}
