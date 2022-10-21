import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(() => {
    //be used to complex operations in this way
    // console.log("updated once in very first time");
    return 4;
  });
  const [state, setState] = useState({ color: "blue", num: 10 });
  const color = state.color;
  const num = state.num;

  const incrementCount = () => {
    setCount((preCount) => preCount + 1);
  };
  const decrementCount = () => {
    setCount((preCount) => preCount - 1);
  };

  const changeNum = () => {
    setState((preState) => {
      //   console.log("updated every time!!");
      return {
        ...state,
        num: preState.num + 1,
      };
    });
  };
  return (
    <>
      <h2>UseState</h2>
      <button onClick={decrementCount}>-</button>
      <span> {count} </span>
      <button onClick={incrementCount}>+</button>
      <hr />
      <p>
        {num} {color}
        <button onClick={changeNum}>setNum</button>
      </p>
    </>
  );
}
