import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

export const Home = () => (
  <Wrapper bg="dark" text="white">
    <Card.Body>
      <Card.Header>
        <Card.Title> Игра "Виселица"</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Вам предлагается отгадать букву за буквой, в загаданном слове. Если Вы
          верно угадали букву, то она отобразится над соответствующими этой
          букве чертами — столько раз, сколько она встречается в слове. Если
          такой буквы нет, то к виселице добавляется одна часть туловища. Вам
          необходимо отгадывать буквы до тех пор, пока не будет отгадано всё
          слово. Вы проиграете, если туловище в виселице нарисовано полностью.
        </Card.Text>
        <Button as={StartBtn} to={routes.start} variant="success">
          Начать
        </Button>
      </Card.Body>
    </Card.Body>
  </Wrapper>
);

const Wrapper = styled(Card)`
  width: 80%;
  max-width: 600px;
  margin: auto;
`;

const StartBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-self: left;
`;
