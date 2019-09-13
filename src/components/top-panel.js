import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const TopPanel = ({ restartGame }) => (
  <Wrapper>
    <RestartBtn onClick={restartGame}>Переиграть</RestartBtn>
  </Wrapper>
);

const Wrapper = styled.div``;
const RestartBtn = styled(Button)``;
