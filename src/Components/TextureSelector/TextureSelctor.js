import { useEffect } from "react";
import { useState } from "react";
import { useKeyboard, useStore } from "../../hooks";

const TextureSelctor = () => {
  const [visible, setVisible] = useState(false);
  const [activeTexture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);
  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const textures = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };
    const newTexture = Object.entries(textures).find(([k, v]) => v);
    if (newTexture) {
      setTexture(newTexture[0]);
    }
  }, [dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeOut = setTimeout(() => {
      setVisible(false);
    }, 2000);

    setVisible(true);
    return () => {
      clearTimeout(visibilityTimeOut);
    };
  }, [activeTexture]);
  return (
    <div>
      {visible ? (
        <div className="absolute centered">TexturSeleector</div>
      ) : null}
    </div>
  );
};

export default TextureSelctor;
