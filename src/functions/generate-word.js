import { words } from "../constants/words-base";

export const generateWord = () => words[Math.floor(Math.random() * 10000)];
