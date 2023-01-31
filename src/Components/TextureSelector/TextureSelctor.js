import { useEffect } from "react";
import { useState } from "react";
import { useKeyboard, useStore } from "../../hooks";
import {
  dirtImg,
  grassImg,
  glassImg,
  woodImg,
  logImg,
} from "../../images/images";

const Images = {
  dirt: dirtImg,
  grass: grassImg,
  glass: glassImg,
  wood: woodImg,
  log: logImg,
};

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
        <div className="absolute centered texture-selctor">
          {Object.entries(Images).map(([k, src]) => (
            <img
              key={k}
              src={src}
              className={`${k === activeTexture && "active"}`}
              alt={k}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TextureSelctor;
