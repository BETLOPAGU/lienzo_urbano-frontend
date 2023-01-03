import React, { useEffect, useState } from "react";

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useAuthStore, useTest } from "../../hooks/useAuthStore";
import { useForm } from "../../hooks/useForm";

import { Footer, ExamplesNavbar } from '../../components';
import { Row, Col, Container, Button } from 'reactstrap';
import { Grid, TextField } from '@mui/material';
import { useMutation as UseMutation, gql, useLazyQuery } from '@apollo/client';

import { clearErrorMessage, onLogin, onLogout } from '../../store';

const loginFormFields = {
  loginEmail: '',
  loginPassword: '',
}

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const dispatch = useDispatch();

  const LOGIN_QUERY = gql`
  query Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token,
      user {
        firstName
        lastName
        id
      }
    }
  }
  `;

  
  const [
    loginSubmit, 
    { loading, data }
  ] = useLazyQuery(LOGIN_QUERY, {
    variables: {
      loginInput: {
        email: loginEmail || "",
        pass: loginPassword || "",
      }
    }
  });

  if (data && data.login) {
    const token = data.login.token
    const user = data.login.user
    localStorage.setItem('token', token);
    localStorage.setItem('token-init-date', new Date().getTime());
    console.log(localStorage.getItem("token"))
    dispatch(onLogin({ name: `${user.firstName} ${user.lastName}`, id: user.id }));
  }
  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="content" align="center">
            <Container>
              <form>
                <Row>
                  <Col>
                    <img
                      alt="..."
                      src={require("assets/img/fabien-bazanegue.jpg")}
                      style={{ width: "600px" }}
                      align="right"
                    />
                  </Col>
                  <Col align="center">
                    <h1>Bienvenido</h1>
                    <h2>Inicia sesión con:</h2>
                    <Grid>
                      <TextField
                        type="text"
                        className="form-control"
                        placeholder="correo@google.com"
                        name="loginEmail"
                        value={loginEmail}
                        onChange={onInputChange}
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        type="password"
                        className="form-control"
                        placeholder="contraseña"
                        name="loginPassword"
                        value={loginPassword}
                        onChange={onInputChange}
                      />
                    </Grid>
                    <Grid>
                      <div className="d-grid gap-2">
                        <Button
                          color="primary"
                          className="btnSubmit"
                          value="Login"
                          onClick={() => loginSubmit()}
                        >
                          Entrar
                        </Button>
                      </div>
                    </Grid>
                  </Col>
                </Row>
              </form>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
