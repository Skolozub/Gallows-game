import React from "react";
import styled from "styled-components";
import { easy } from "../constants/level-of-difficulty";

export const GallowsPanel = ({ countOfErrorLetters }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    {easy.map(({ type, opacity, ...props }, index) => (
      <Component
        key={index}
        as={type}
        {...{
          ...props,
          opacity: Number(index < countOfErrorLetters) || opacity
        }}
      />
    ))}
  </svg>
);

const Component = styled.div`
  transition: opacity 500ms ease;
`;
