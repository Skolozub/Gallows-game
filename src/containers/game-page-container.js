import { useEffect, useState } from "react";

import { generateWord } from "../functions/generate-word";
import { secretSymbol, alphabet } from "../constants/global";
import * as routes from "../constants/routes";
import { history } from "..";

export const GamePageContainer = ({ component: Component, render }) => {
  const [randWord, setRandWord] = useState("");
  const [secret, setSecret] = useState([]);
  const [gameAlphabet, setAlphabet] = useState([]);
  const [currentLetter, setLetter] = useState("");

  const gameInit = () => {
    const randomWord = generateWord();
    const secretDataArray = Array(randomWord.length).fill(secretSymbol);

    setRandWord(randomWord);
    setSecret(secretDataArray);
    setAlphabet(alphabet);
    setLetter("");
  };

  useEffect(() => {
    gameInit();
  }, []);

  useEffect(() => {
    const checkCompletionOfGame = () => {
      const isSecretNotInit = !secret.length;
      const isGameNotComplete = secret.includes(secretSymbol);
      if (isSecretNotInit || isGameNotComplete) return null;

      history.push(routes.finish);
    };

    checkCompletionOfGame();
  }, [secret]);

  useEffect(() => {
    const openLetterInSecret = () => {
      const isLetterNotSet = !currentLetter;
      const isWordNotInit = !randWord.length;
      const isLetterNotInTheWord = !randWord.includes(currentLetter);
      if (isLetterNotSet || isWordNotInit || isLetterNotInTheWord) return null;

      const secretChanger = prevSecret =>
        prevSecret.reduce(
          (acc, item, idx) => [
            ...acc,
            randWord[idx] === currentLetter ? currentLetter : item
          ],
          []
        );

      setSecret(secretChanger);
    };

    openLetterInSecret();
  }, [randWord, currentLetter]);

  useEffect(() => {
    const disablePressedLetter = () => {
      const alphabetChanger = prevAlphabet =>
        prevAlphabet.reduce(
          (acc, [alphabetLetter, type, isPressed]) => [
            ...acc,
            alphabetLetter === currentLetter
              ? [alphabetLetter, type, true]
              : [alphabetLetter, type, isPressed]
          ],
          []
        );

      setAlphabet(alphabetChanger);
    };

    disablePressedLetter();
  }, [currentLetter]);

  console.log(randWord, secret, currentLetter);
  if (Component)
    return (
      <Component
        {...{
          gameAlphabet,
          randWord,
          secret,
          restartGame: gameInit,
          setLetter
        }}
      />
    );
  return render({
    gameAlphabet,
    randWord,
    secret,
    restartGame: gameInit,
    setLetter
  });
};
