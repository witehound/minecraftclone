import create from "zustand";
import { nanoid } from "nanoid";

const getStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));
export const useStore = create((set) => ({
  texture: "dirt",
  cubes: getStorage("cubes") || [],
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
  saveWorld: () => {
    set((prev) => {
      setStorage("cubes", prev.cubes);
    });
  },
  resetWorld: () => {
    set(() => ({
      cubes: [],
    }));
  },
}));
