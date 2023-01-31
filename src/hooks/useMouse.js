import { useEffect } from "react";
import { useState } from "react";

export const useMouse = () => {
  const [mouse, setMouse] = useState({
    x: null,
    y: null,
  });

  const handle = (e) => {
    setMouse({
      x: e.pageX,
      y: e.pageY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handle);
    return () => document.removeEventListener("mousemove", handle);
  }, []);

  return mouse;
};
