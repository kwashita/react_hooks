import React, { useState } from "react";

export default function UseState(props) {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Lucy", age: 36 });
  //initial value in conditions
  const [value1, setValue1] = useState(() =>
    props.initValue ? props.initValue : 5
  );

  const addCount = () => {
    setCount(() => {
      return count >= 3 ? count + 2 : count + 1;
    });
  };

  const changeUsername = () => {
    setUser(() => {
      return {
        ...user,
        name: "John",
      };
    });
  };
  return (
    <>
      <div>UseState</div>
      <p>{num}</p>
      <button onClick={() => setNum(num + 1)}>add num</button>
      <hr />
      <p>{count}</p>
      <button onClick={addCount}>add Count in conditions</button>
      <hr />
      <p>{user.name}</p>
      <p>{user.age}</p>
      <button onClick={changeUsername}> change username</button>
      <hr />
      <p>{value1}</p>
    </>
  );
}
