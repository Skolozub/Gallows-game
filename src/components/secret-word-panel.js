import React from "react";
import styled from "styled-components";

export const SecretWordPanel = ({ secret }) => (
  <Wrapper>
    {secret.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin: 5px;
  font-size: 1.5rem;
`;
