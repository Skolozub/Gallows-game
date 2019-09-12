import React from "react";
import { Button } from "react-bootstrap";

import { GamePageContainer } from "../containers/game-page-container";
import styled from "styled-components";

export const Game = () => (
  <GamePageContainer
    render={({ gameAlphabet, secret, gameInit, setLetter }) => (
      <Wrapper>
        <TopPanel>
          <RestartBtn onClick={gameInit}>Переиграть</RestartBtn>
        </TopPanel>
        {secret.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        <LettersPanel>
          {gameAlphabet.map(([letter, type, isPressed]) => (
            <LetterBtn
              key={letter}
              variant={
                !type ? "secondary" : type === "vowel" ? "danger" : "primary"
              }
              onClick={() => setLetter(letter)}
              disabled={isPressed}
            >
              {letter}
            </LetterBtn>
          ))}
        </LettersPanel>
      </Wrapper>
    )}
  />
);

const Wrapper = styled.div`
  display: flex;
`;
const LettersPanel = styled.div`
  max-width: 250px;
`;
const TopPanel = styled.div``;
const RestartBtn = styled(Button)``;
const LetterBtn = styled(Button)`
  margin: 5px;
  width: 40px;
  height: 40px;
`;
