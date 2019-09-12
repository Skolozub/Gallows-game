import React from "react";
import { Button } from "react-bootstrap";

import { GamePageContainer } from "../containers/game-page-container";
import { alphabet } from "../constants/global";
import styled from "styled-components";

export const Game = () => (
  <GamePageContainer
    render={({ secret, gameInit, chekPressedLetter }) => (
      <Wrapper>
        <TopPanel>
          <RestartBtn onClick={gameInit}>Переиграть</RestartBtn>
        </TopPanel>
        {secret.map(item => (
          <div>{item}</div>
        ))}
        <LettersPanel>
          {alphabet.map(([letter, type]) => (
            <LetterBtn
              key={letter}
              variant={
                !type ? "secondary" : type === "vowel" ? "danger" : "primary"
              }
              onClick={() => chekPressedLetter(letter)}
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
