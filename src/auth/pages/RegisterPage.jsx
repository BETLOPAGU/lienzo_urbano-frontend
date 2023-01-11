/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library that concatenates classes
import React from "react";
import classnames from "classnames";

import { gql, useMutation } from '@apollo/client';

// reactstrap components

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row,
  FormGroup,
  Label
} from "reactstrap";


import { useForm } from "../../hooks/useForm";


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
  const [emailFocus, setEmailFocus] = React.useState(false);
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("reset-page");
    return function cleanup() {
      document.body.classList.remove("reset-page");
    };
  }, []);

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
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="page-header-image" />
          <Container align="center">
            <Card className="card-register" style={{backgroundColor: 'transparent'}}>
              <br></br><br></br><br></br>
              <CardHeader>
                <h1 align="center">Registro</h1>
              </CardHeader>
              <CardBody>
                <Form type="form">
                  <Row>
                    <Col>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Nombre"
                          type="text"
                          name="registerFirstName"
                          value={registerFirstName}
                          onChange={onInputChange}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Apellido"
                          type="text"
                          name="registerLastName"
                          value={registerLastName}
                          onChange={onInputChange}
                        />
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-venus-mars" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Gender"
                          type="text"
                          name="registerGender"
                          value={registerGender}
                          onChange={onInputChange}
                        />
                      </InputGroup>
                    </Col>
                    <Col>
                      <span>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            name="registerEmail"
                            value={registerEmail}
                            onChange={onInputChange}
                          />
                        </InputGroup>
                        <InputGroup
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contraseña"
                            type="text"
                            name="registerPassword"
                            value={registerPassword}
                            onChange={onInputChange}
                          />
                        </InputGroup>

                        <InputGroup
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Confirmación de contraseña"
                            type="text"
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
                            <span className="form-check-sign" />Estoy de acuerdo con los términos y condiciones{" "}
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
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
