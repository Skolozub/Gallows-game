import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";

import { MainTemplate } from "../templates/main-template";
import * as routes from "../constants/routes";

export const WinFinish = () => (
  <MainTemplate header={<Card.Title>Ура! Вы победили!</Card.Title>}>
    <Card.Text>Поздравляем с победой.</Card.Text>
    <Card.Text>
      Но не стоит расслабляться, попробуйте сыграть ещё разок!
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
