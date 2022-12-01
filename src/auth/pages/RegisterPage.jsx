import React from "react";
import classnames from "classnames";
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

// core components
import { ExamplesNavbar, Footer } from "../../components";

export const RegisterPage = () => {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [firstNameFocus, setFirstNameFocus] = React.useState(false);
  const [lastNameFocus, setLastNameFocus] = React.useState(false);
  const [addressFocus, setAddressFocus] = React.useState(false);
  const [birthdayFocus, setBirthdayFocus] = React.useState(false);
  const [contactFocus, setContactFocus] = React.useState(false);
  const [genderFocus, setGenderFocus] = React.useState(false);
  const [phoneFocus, setPhoneFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [photoFocus, setPhotoFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  }, []);

  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)"
    );
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container align="center">
              <Row>
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
              </Row>
              <Card className="card-register">
                <CardHeader>
                  <CardTitle tag="h4" align="center">Registro</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form">
                    <Row>
                      <Col>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": firstNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            onFocus={(e) => setFirstNameFocus(true)}
                            onBlur={(e) => setFirstNameFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": lastNameFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Apellido(s)"
                            type="text"
                            onFocus={(e) => setLastNameFocus(true)}
                            onBlur={(e) => setLastNameFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": addressFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Dirección"
                            type="text"
                            onFocus={(e) => setAddressFocus(true)}
                            onBlur={(e) => setAddressFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": contactFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Contact"
                            type="text"
                            onFocus={(e) => setContactFocus(true)}
                            onBlur={(e) => setContactFocus(false)}
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="text"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                          />
                        </InputGroup>
                      </Col>
                      <Col>
                        <span>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="text"
                              onFocus={(e) => setPasswordFocus(true)}
                              onBlur={(e) => setPasswordFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": birthdayFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Cumpleaños"
                              type="text"
                              onFocus={(e) => setBirthdayFocus(true)}
                              onBlur={(e) => setAddressFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": genderFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Gender"
                              type="text"
                              onFocus={(e) => setGenderFocus(true)}
                              onBlur={(e) => setGenderFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": phoneFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Teléfono"
                              type="text"
                              onFocus={(e) => setPhoneFocus(true)}
                              onBlur={(e) => setPhoneFocus(false)}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": photoFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Foto de Perfil"
                              type="text"
                              onFocus={(e) => setPhotoFocus(true)}
                              onBlur={(e) => setPhotoFocus(false)}
                            />
                          </InputGroup>
                          <FormGroup check className="text-left" align="left">
                            <Label check>
                              <Input type="checkbox" />
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
                  <Button className="btn-round" color="primary" size="lg">
                    Regístrarme
                  </Button>
                </CardFooter>
              </Card>
              <div
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
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
