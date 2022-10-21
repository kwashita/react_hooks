import React, { useState, useRef, useEffect } from "react";

export default function UseRef() {
  console.log("component renders");
  //   const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const count = useRef(0);

  const preName = useRef("");

  useEffect(() => {
    // setCount((pre) => pre + 1);
    count.current += 1;

    //presist values between rendering
    preName.current = name;
  });
  return (
    <>
      <h2>UseRef</h2>
      <input type="text" onChange={(e) => setName(() => e.target.value)} />
      <div>
        My name is {name}, it changes {count.current} times
        {/* My name is {name}, it changes {count} times */}
      </div>
      <div>
        my current name is {name}, and my previous name is {preName.current}
      </div>
    </>
  );
}
