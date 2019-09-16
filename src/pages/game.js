import React from "react";
import styled from "styled-components";
import { GamePageContainer } from "../containers/game-page-container";
import { MainTemplate } from "../templates/main-template";
import { TopPanel } from "../components/top-panel";
import { SecretWordPanel } from "../components/secret-word-panel";
import { LettersPanel } from "../components/letters-panel";
import { GallowsPanel } from "../components/gallows-panel";

export const Game = () => (
  <GamePageContainer
    render={({
      gameAlphabet,
      setLetter,
      countOfErrorLetters,
      secret,
      restartGame
    }) => (
      <MainTemplate header={<TopPanel {...{ restartGame }} />}>
        <SecretWordPanel {...{ secret }} />
        <BodyWrapper>
          <LeftSide>
            <GallowsPanel {...{ countOfErrorLetters }} />
          </LeftSide>
          <RightSide>
            <LettersPanel {...{ gameAlphabet, setLetter }} />
          </RightSide>
        </BodyWrapper>
      </MainTemplate>
    )}
  />
);

const BodyWrapper = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 40%;
  }
`;
const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 750px) {
    width: 70%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
