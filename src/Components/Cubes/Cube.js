import { useBox } from "@react-three/cannon";
import * as textures from "../../images/textures";

const Cube = ({ pos, texture }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    position: pos,
  }));
  const activeTexture = textures[texture + `Texture`];

  return (
    <mesh ref={ref}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={activeTexture} />
    </mesh>
  );
};

export default Cube;
