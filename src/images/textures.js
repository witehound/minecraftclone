import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";
import { TextureLoader } from "three";

export const dirtTexture = new TextureLoader(dirtImg);
export const logTexture = new TextureLoader(logImg);
export const grassTexture = new TextureLoader(grassImg);
export const woodTexture = new TextureLoader(woodImg);
export const glassTexture = new TextureLoader(glassImg);
export const groundTexture = new TextureLoader(dirtImg);
