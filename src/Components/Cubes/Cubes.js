import { useStore } from "../../hooks";
import Cube from "./Cube";

const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  return cubes.map(({ key, pos, texture }) => (
    <Cube key={key} pos={pos} texture={texture} />
  ));
};

export default Cubes;
