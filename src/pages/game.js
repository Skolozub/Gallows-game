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
    render={({ gameAlphabet, setLetter, secret, restartGame }) => (
      <MainTemplate header={<TopPanel {...{ restartGame }} />}>
        <SecretWordPanel {...{ secret }} />
        <BodyWrapper>
          <LeftSide>
            <GallowsPanel />
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
`;
const LeftSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;
