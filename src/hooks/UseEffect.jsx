import React from "react";
import { useState, useEffect } from "react";

export default function UseEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(() => window.innerWidth);
    };

    window.addEventListener("resize", handleWindowWidth);

    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  }, [windowWidth]);

  return (
    <>
      <h2>useEffect</h2>
      <p>{windowWidth}</p>
    </>
  );
}
