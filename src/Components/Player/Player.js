import { useThree, useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useRef } from "react";
import { Vector3 } from "three";
import { useEffect } from "react";
import { useKeyboard } from "../hooks";

const Player = () => {
  const { camera } = useThree();
  const [ref, api] = useSphere(() => {
    return {
      mass: 1,
      type: "Dynamic",
      position: [0, 1, 0],
    };
  });

  const actions = useKeyboard();

  console.log(
    "actions",
    Object.entries(actions).filter(([k, v]) => v)
  );

  const pos = useRef([0, 0, 0]);

  useEffect(() => {
    api.position.subscribe((p) => (pos.current = p));
  }, [api.position]);

  const vel = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (vel.current = v));
  }, [api.velocity]);
  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
  });
  return <mesh ref={ref}></mesh>;
};

export default Player;
