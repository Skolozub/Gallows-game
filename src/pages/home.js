import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";

import { MainTemplate } from "../templates/main-template";
import * as routes from "../constants/routes";

export const Home = () => (
  <MainTemplate title={'Игра "Виселица"'}>
    <Card.Text>
      Вам предлагается отгадать букву за буквой, в загаданном слове. Если Вы
      верно угадали букву, то она отобразится над соответствующими этой букве
      чертами — столько раз, сколько она встречается в слове. Если такой буквы
      нет, то к виселице добавляется одна часть туловища. Вам необходимо
      отгадывать буквы до тех пор, пока не будет отгадано всё слово. Вы
      проиграете, если туловище в виселице нарисовано полностью.
    </Card.Text>
    <Button as={NextBtn} to={routes.start} variant="success">
      Начать
    </Button>
  </MainTemplate>
);

const NextBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-self: center;
`;
