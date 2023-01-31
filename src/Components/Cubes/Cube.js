import { useBox } from "@react-three/cannon";
import * as textures from "../../images/textures";
import { useStore } from "../../hooks";
import { useState } from "react";

const Cube = ({ pos, texture }) => {
  const [hover, setHover] = useState(false);
  const [ref] = useBox(() => ({
    type: "Static",
    position: pos,
  }));
  const activeTexture = textures[texture + `Texture`];

  const [addCube, removeCube] = useStore((state) => [
    state.addCube,
    state.removeCube,
  ]);

  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        const clickedFace = Math.floor(e.faceIndex / 2);
        const { x, y, z } = ref.current.position;
        if (e.altKey) {
          removeCube(x, y, z);
          return;
        }
        if (clickedFace === 0) addCube(x + 1, y, z);
        if (clickedFace === 1) addCube(x - 1, y, z);
        if (clickedFace === 2) addCube(x, y + 1, z);
        if (clickedFace === 3) addCube(x, y - 1, z);
        if (clickedFace === 4) addCube(x, y, z + 1);
        if (clickedFace === 5) addCube(x, y, z - 1);
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        attach="material"
        map={activeTexture}
        color={hover ? "grey" : "white"}
        transparent={true}
        opacity={texture === "glass" ? 0.6 : 1}
      />
    </mesh>
  );
};

export default Cube;
