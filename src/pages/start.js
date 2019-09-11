import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, ButtonToolbar } from "react-bootstrap";
import styled from "styled-components";

import { StartPageContainer } from "../containers/start-page-container";
import { MainTemplate } from "../templates/main-template";
import * as routes from "../constants/routes";

export const Start = () => (
  <StartPageContainer
    render={({ name, getName, goNextStep }) => (
      <MainTemplate title={'Игра "Виселица"'}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Введите Никнэйм</Form.Label>
          <Form.Control
            type="text"
            onChange={getName}
            placeholder="Мой чудесный никнэйм"
            value={name}
          />
        </Form.Group>
        <CustomButtonToolbar>
          <Button as={BackBtn} to={routes.home} variant="primary">
            Назад
          </Button>
          <Button
            disabled={!name}
            style={{ pointerEvents: `${name ? "" : "none"}` }}
            onClick={() => goNextStep(routes.game)}
            variant="success"
          >
            Играть
          </Button>
        </CustomButtonToolbar>
      </MainTemplate>
    )}
  />
);

const CustomButtonToolbar = styled(ButtonToolbar)`
  display: flex;
  align-self: center;
`;
const BackBtn = styled(Link)`
  margin-right: 10px;
`;
