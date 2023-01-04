import React from "react";
import { useDispatch } from "react-redux";

import { gql, useMutation } from '@apollo/client';
import { Navigate, Route, Routes } from 'react-router-dom';

import Swal from 'sweetalert2';
import classnames from "classnames";
import { cssNumber } from "jquery";
// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


import { useForm } from "../../hooks/useForm";
import { clearErrorMessage, onLogout } from '../../store';
import { useAuthStore } from "../../hooks/useAuthStore";

// core components
import { ExamplesNavbar, Footer } from "../../components";



const registerFormFields = {
  registerFirstName: '',
  registerLastName: '',
  registerGender: '',
  registerEmail: '',
  registerPassword: '',
  registerConfirmationPassword: '',
}

export const RegisterPage = () => {
  // const [squares1to6, setSquares1to6] = React.useState("");
  // const [squares7and8, setSquares7and8] = React.useState("");
  // const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  // const [lastNameFocus, setLastNameFocus] = React.useState(false);
  // const [genderFocus, setGenderFocus] = React.useState(false);
  // const [passConfirmationFocus, setPassConfirmationFocus] = React.useState(false);
  // const [emailFocus, setEmailFocus] = React.useState(false);
  // const [passwordFocus, setPasswordFocus] = React.useState(false);

  // React.useEffect(() => {
  //   document.body.classList.toggle("register-page");
  //   document.documentElement.addEventListener("mousemove", followCursor);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     document.body.classList.toggle("register-page");
  //     document.documentElement.removeEventListener("mousemove", followCursor);
  //   };
  // }, []);

  // const followCursor = (event) => {
  //   let posX = event.clientX - window.innerWidth / 2;
  //   let posY = event.clientY - window.innerWidth / 6;
  //   setSquares1to6(
  //     "perspective(500px) rotateY(" +
  //     posX * 0.05 +
  //     "deg) rotateX(" +
  //     posY * -0.05 +
  //     "deg)"
  //   );
  //   setSquares7and8(
  //     "perspective(500px) rotateY(" +
  //     posX * 0.02 +
  //     "deg) rotateX(" +
  //     posY * -0.02 +
  //     "deg)"
  //   );
  // };

  const { registerFirstName, registerLastName, registerGender, registerEmail, registerPassword, registerConfirmationPassword, onInputChange } = useForm(registerFormFields);

  const REGISTER_QUERY = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
      createUser(createUserInput: $createUserInput) {
          firstName
      }
  }
  `;

  const [registerSubmit, { loading, error, data }] = useMutation(REGISTER_QUERY, {
    variables: {
      createUserInput: {
        email: registerEmail || "",
        firstName: registerFirstName || "",
        lastName: registerLastName || "",
        pass: registerPassword || "",
        typeId: "GUEST",
        gender: registerGender || "",
      }
    }
  });


  if (data && data.createUser) {
    alert("Usuario registrado");    
    registerFirstName = '';
    registerLastName = '';
    registerGender = '';
    registerEmail = '';
    registerPassword = '';
    registerConfirmationPassword = '';
  }

  if (loading) return <p>Loading ...</p>;

  return (

    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container align="center">
              {/* <Row>
                <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                </Col>
              </Row> */}
              <Card className="card-register">
                <CardHeader>
                  <h1 align="center">Registro</h1>
                </CardHeader>
                <CardBody>
                  <Form type="form">
                    <Row>
                      <Col>
                        <InputGroup
                          // className={classnames({
                          //   "input-group-focus": firstNameFocus
                          // })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            // onFocus={(e) => setFirstNameFocus(true)}
                            // onBlur={(e) => setFirstNameFocus(false)}
                            name="registerFirstName"
                            value={registerFirstName}
                            onChange={onInputChange}
                          />
                        </InputGroup>
                        <InputGroup
                          // className={classnames({
                          //   "input-group-focus": lastNameFocus
                          // })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Apellido"
                            type="text"
                            // onFocus={(e) => setLastNameFocus(true)}
                            // onBlur={(e) => setLastNameFocus(false)}
                            name="registerLastName"
                            value={registerLastName}
                            onChange={onInputChange}
                          />
                        </InputGroup>
                        <InputGroup
                          // className={classnames({
                          //   "input-group-focus": genderFocus
                          // })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="fas fa-venus-mars" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Gender"
                            type="text"
                            // onFocus={(e) => setGenderFocus(true)}
                            // onBlur={(e) => setGenderFocus(false)}
                            name="registerGender"
                            value={registerGender}
                            onChange={onInputChange}
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <span>
                          <InputGroup
                            // className={classnames({
                            //   "input-group-focus": emailFocus
                            // })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              // onFocus={(e) => setEmailFocus(true)}
                              // onBlur={(e) => setEmailFocus(false)}
                              name="registerEmail"
                              value={registerEmail}
                              onChange={onInputChange}
                            />
                          </InputGroup>
                          <InputGroup
                            // className={classnames({
                            //   "input-group-focus": passwordFocus
                            // })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Contraseña"
                              type="text"
                              // onFocus={(e) => setPasswordFocus(true)}
                              // onBlur={(e) => setPasswordFocus(false)}
                              name="registerPassword"
                              value={registerPassword}
                              onChange={onInputChange}
                            />
                          </InputGroup>

                          <InputGroup
                            // className={classnames({
                            //   "input-group-focus": passConfirmationFocus
                            // })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Confirmación de contraseña"
                              type="text"
                              // onFocus={(e) => setPassConfirmationFocus(true)}
                              // onBlur={(e) => setPassConfirmationFocus(false)}
                              name="registerConfirmationPassword"
                              value={registerConfirmationPassword}
                              onChange={onInputChange}
                            />
                          </InputGroup>

                          <FormGroup check className="text-left" align="left">
                            <Label check>
                              <Input
                                type="checkbox"

                              />
                              <span className="form-check-sign" />I agree to the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                terms and conditions
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </span>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter align="right">
                  <Button
                    className="btn-round"
                    color="primary"
                    size="lg"
                    onClick={() => registerSubmit()}
                  >
                    Regístrarme
                  </Button>
                </CardFooter>
              </Card>
              {/* <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              /> */}
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
