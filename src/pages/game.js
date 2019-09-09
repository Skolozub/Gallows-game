import React from "react";
import { generateWord } from "../functions/generate-word";

export const Game = () => <div>{document.write(generateWord())}</div>;
