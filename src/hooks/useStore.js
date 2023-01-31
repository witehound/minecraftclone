import create from "zustand";
import { nanoid } from "nanoid";
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
  addCube: (x, y, z) => {
    set((prev) => ({
      cubes: [
        ...prev.cubes,
        {
          key: nanoid(),
          pos: [x, y, z],
          texture: prev.texture,
        },
      ],
    }));
  },
  removeCube: (x, y, z) => {
    set((prev) => ({
      cubes: prev.cubes.filter(({ pos }) => {
        return pos[0] !== x || pos[1] !== y || pos[2] !== z;
      }),
    }));
  },
  setTexture: (t) => {
    set((prev) => ({
      texture: t,
    }));
  },
  saveWorld: () => {},
  resetWorld: () => {},
}));
