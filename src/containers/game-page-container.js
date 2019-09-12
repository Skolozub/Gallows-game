import { useEffect, useState } from "react";

import { generateWord } from "../functions/generate-word";
import { secretSymbol } from "../constants/global";
import * as routes from "../constants/routes";
import { history } from "..";

export const GamePageContainer = ({ component: Component, render }) => {
  const [randWord, setRandWord] = useState("");
  const [secret, setSecret] = useState([]);

  const gameInit = () => {
    const randomWord = generateWord();
    const secretDataArray = Array(randomWord.length).fill(secretSymbol);
    setRandWord(randomWord);
    setSecret(secretDataArray);
  };

  const chekPressedLetter = letter => {
    if (!randWord.includes(letter)) return null;

    const newSecret = secret.reduce(
      (acc, item, idx) => [...acc, randWord[idx] === letter ? letter : item],
      []
    );
    setSecret(newSecret);
  };

  useEffect(() => {
    gameInit();
  }, []);

  useEffect(() => {
    const checkCompletionOfGame = () => {
      if (!secret.length || secret.includes(secretSymbol)) return null;
      history.push(routes.finish);
    };

    checkCompletionOfGame();
  }, [secret]);

  console.log(randWord, secret);
  if (Component)
    return <Component {...{ randWord, secret, gameInit, chekPressedLetter }} />;
  return render({ randWord, secret, gameInit, chekPressedLetter });
};
