import React, { useState, useEffect, useMemo } from "react";

export default function UseMemo() {
  console.log("Usemo renders");
  const [num, setNum] = useState(1);
  const [dark, setDark] = useState(true);

  const doubleNum = useMemo(() => {
    return slowFunction(num);
  }, [num]);

  const theme = useMemo(() => {
    return {
      color: dark ? "white" : "black",
      background: dark ? "black" : "white",
    };
  }, [dark]);

  useEffect(() => {
    console.log("useEffect rendering");
  }, [theme]);

  return (
    <>
      <h2>UseMemo</h2>
      <input
        type="number"
        onChange={(e) => setNum(parseInt(e.target.value))}
        value={num}
      />
      <p>
        <button onClick={() => setDark((pre) => !pre)}>change Theme</button>
      </p>
      <div style={theme}>{doubleNum}</div>
    </>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
