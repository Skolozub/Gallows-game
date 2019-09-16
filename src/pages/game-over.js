import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";
import { MainTemplate } from "../templates/main-template";
import * as routes from "../constants/routes";

export const GameOver = () => (
  <MainTemplate header={<Card.Title>Вы проиграли!</Card.Title>}>
    <Card.Text>К сожалению, Вы проиграли.</Card.Text>
    <Card.Text>
      Но не стоит расстраиваться, попробуйте сыграть ещё разок!
    </Card.Text>
    <CustomButtonToolbar>
      <Button as={Link} to={routes.game} variant="primary">
        Играть ещё раз
      </Button>
    </CustomButtonToolbar>
  </MainTemplate>
);

const CustomButtonToolbar = styled(ButtonToolbar)`
  display: flex;
  align-self: center;
`;
