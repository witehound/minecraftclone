import { useEffect } from "react";
import { useState } from "react";
import { useStore } from "../../hooks";

const TextureSelctor = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture] = useStore((state) => [state.texture]);

  useEffect(() => {
    const visibilityTimeOut = setTimeout(() => {
      setVisible(false);
    }, 2000);

    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeOut);
    };
  }, [activeTexture]);
  return <div>{visible ? <div></div> : null}</div>;
};

export default TextureSelctor;
