import { useEffect, useState } from "react";

import { generateWord } from "../functions/generate-word";
import { secretSymbol, alphabet } from "../constants/global";
import * as routes from "../constants/routes";
import { history } from "..";
import { easy } from "../constants/level-of-difficulty";

export const GamePageContainer = ({ component: Component, render }) => {
  const [randWord, setRandWord] = useState("");
  const [secret, setSecret] = useState([]);
  const [gameAlphabet, setAlphabet] = useState([]);
  const [currentLetter, setLetter] = useState("");
  const [countOfErrorLetters, setErrorLetter] = useState(0);

  const gameInit = () => {
    const randomWord = generateWord();
    const secretDataArray = Array(randomWord.length).fill(secretSymbol);

    setRandWord(randomWord);
    setSecret(secretDataArray);
    setAlphabet(alphabet);
    setLetter("");
    setErrorLetter(0);
  };

  useEffect(() => {
    gameInit();
  }, []);

  useEffect(() => {
    const checkCompletionOfGame = () => {
      const isSecretNotInit = !secret.length;
      const isGameNotComplete = secret.includes(secretSymbol);
      if (isSecretNotInit || isGameNotComplete) return null;

      history.push(routes.win);
    };

    checkCompletionOfGame();
  }, [secret]);

  useEffect(() => {
    const isGameOver = countOfErrorLetters >= easy.length;
    if (isGameOver) history.push(routes.gameOver);
  }, [countOfErrorLetters]);

  useEffect(() => {
    const isLetterNotSet = !currentLetter;
    const isWordNotInit = !randWord.length;
    const isLetterNotInTheWord = !randWord.includes(currentLetter);

    const setError = () => {
      isLetterNotInTheWord && setErrorLetter(prevCount => prevCount + 1);
    };

    const openLetterInSecret = () => {
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

    setError();
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

  if (Component)
    return (
      <Component
        {...{
          gameAlphabet,
          randWord,
          secret,
          restartGame: gameInit,
          setLetter,
          countOfErrorLetters
        }}
      />
    );
  return render({
    gameAlphabet,
    randWord,
    secret,
    restartGame: gameInit,
    setLetter,
    countOfErrorLetters
  });
};
