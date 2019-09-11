import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";

import { MainTemplate } from "../templates/main-template";
import * as routes from "../constants/routes";

export const Start = () => (
  <MainTemplate title={'Игра "Виселица"'}>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Введите Никнэйм</Form.Label>
      <Form.Control type="text" placeholder="Мой чудесный никнэйм" />
    </Form.Group>
    <CustomButtonToolbar>
      <Button as={BackBtn} to={routes.home} variant="primary">
        Назад
      </Button>
      <Button as={Link} to={routes.game} variant="success">
        Играть
      </Button>
    </CustomButtonToolbar>
  </MainTemplate>
);

const CustomButtonToolbar = styled(ButtonToolbar)`
  display: flex;
  align-self: center;
`;
const BackBtn = styled(Link)`
  margin-right: 10px;
`;
