import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const LettersPanel = ({ gameAlphabet, setLetter }) => (
  <Wrapper>
    {gameAlphabet.map(([letter, type, isPressed]) => {
      const variant = !type
        ? "secondary"
        : type === "vowel"
        ? "danger"
        : "primary";
      const setLetterHandler = () => setLetter(letter);

      return (
        <LetterBtn
          key={letter}
          variant={variant}
          onClick={setLetterHandler}
          disabled={isPressed}
        >
          {letter}
        </LetterBtn>
      );
    })}
  </Wrapper>
);

const Wrapper = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
const LetterBtn = styled(Button)`
  width: 40px;
  height: 40px;
  margin: 5px;
`;
