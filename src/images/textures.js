import { dirtImg, grassImg, glassImg, woodImg, logImg } from "./images";
import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

export const dirtTexture = new TextureLoader().load(dirtImg);
export const logTexture = new TextureLoader().load(logImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const groundTexture = new TextureLoader().load(grassImg);

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
