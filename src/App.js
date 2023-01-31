import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import {
  Ground,
  Player,
  FPV,
  Cubes,
  TextureSelctor,
  Menu,
  Cursor,
} from "./Components";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <Cursor />
      <TextureSelctor />
      <Menu />
    </>
  );
}

export default App;
