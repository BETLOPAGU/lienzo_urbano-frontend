import React, {useCallback} from "react";
import {useNavigate} from 'react-router-dom';
// react plugin used to create DropdownMenu for selecting items
import classnames from "classnames";

// reactstrap components
import {
  Button,  
  CardHeader,
  CardBody,
  CardFooter, 
  CardTitle,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  NavLink,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { useForm } from "../../hooks/useForm";

import { Footer, ExamplesNavbar } from '../../components';

import { gql, useLazyQuery } from '@apollo/client';

import { clearErrorMessage, onLogin } from '../../store';

const loginFormFields = {
  loginEmail: '',
  loginPassword: '',
}

const items = [
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src="https://flecha.es/blog/wp-content/uploads/2017/05/littlegirl-banksy.jpg"
      />
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src="https://i0.wp.com/www.moonmagazine.info/wp-content/uploads/2016/10/arte_urbano_ezb.jpg?fit=1280%2C960&ssl=1"
      />
    ),
    altText: "",
    caption: "",
    src: "1"
  },
  {
    content: (
      <img
        alt="..."
        className="d-block"
        src="https://gpjs3bucket.s3.amazonaws.com/wp-content/uploads/2019/08/26131534/GPJNews_Mexico_MG_UrbanArt4-48_web.jpg"
      />
    ),
    altText: "",
    caption: "",
    src: "2"
  }
];

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [firstNameFocus, setFirstNameFocus] = React.useState(undefined);
  const [lastNameFocus, setLastNameFocus] = React.useState(undefined);

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/auth/welcome', {replace: true}), [navigate]);
  const handleOnClick2 = useCallback(() => navigate('/auth/register', {replace: true}), [navigate]);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

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
    localStorage.setItem('userId', user.id);
    console.log(localStorage.getItem("token"))
    dispatch(onLogin({ name: `${user.firstName} ${user.lastName}`, id: user.id }));
  }

  if (loading) return <p>Loading ...</p>;

  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="section">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <div className="content">
            <Container>
              <Row>
                <Col lg="6" md="12">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      className="mt-5"
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {items.map((item, key) => {
                      return (
                        <CarouselItem
                          onExiting={onExiting}
                          onExited={onExited}
                          key={key}
                          className="justify-content-center"
                        >
                          {item.content}
                        </CarouselItem>
                      );
                    })}
                    <a
                      className="carousel-control-prev"
                      data-slide="prev"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        previous();
                      }}
                      role="button"
                    >
                      <Button
                        className="btn-icon btn-round"
                        color="warning"
                        name="button"
                        size="sm"
                        type="button"
                      >
                        <i className="tim-icons icon-minimal-left" />
                      </Button>
                    </a>
                    <a
                      className="carousel-control-next"
                      data-slide="next"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        next();
                      }}
                      role="button"
                    >
                      <Button
                        className="btn-icon btn-round"
                        color="warning"
                        name="button"
                        size="sm"
                        type="button"
                      >
                        <i className="tim-icons icon-minimal-right" />
                      </Button>
                    </a>
                  </Carousel>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  <form autocomplete="off">
                    <CardHeader className="text-center" style={{ background: 'none' }}>
                      <CardTitle tag="h1">Iniciar Sesión</CardTitle>
                    </CardHeader>
                    <br></br><br></br>
                    <CardBody>
                      <InputGroup
                        className={classnames("input-lg", {
                          "input-group-focus": firstNameFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="correo@google.com"
                          name="loginEmail"
                          value={loginEmail}
                          onChange={onInputChange}
                          onFocus={(e) => setFirstNameFocus(true)}
                          onBlur={(e) => setFirstNameFocus(false)}
                        />
                      </InputGroup>
                      <InputGroup
                        className={classnames("input-lg", {
                          "input-group-focus": lastNameFocus
                        })}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-lock-circle" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="contraseña"
                          name="loginPassword"
                          value={loginPassword}
                          onChange={onInputChange}
                          onFocus={(e) => setLastNameFocus(true)}
                          onBlur={(e) => setLastNameFocus(false)}
                        />
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-right" style={{ background: 'none' }}>
                      <div className="pull-right mr-3 mb-3">
                        <h5>
                          <a
                            className="link footer-link"                            
                            onClick={handleOnClick}
                          >
                            ¿OLVIDASTE TU CONTRASEÑA?
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <a
                            className="link footer-link"                            
                            onClick={handleOnClick2}                           
                          >
                            ¿AUN NO CREAS TU CUENTA?
                          </a>
                        </h5>
                      </div>
                      <br></br><br></br><br></br><br></br><br></br>
                      <Button
                        color="primary"
                        className="btnSubmit"
                        value="Login"
                        onClick={() => loginSubmit()}
                        size="lg"
                      >
                        Entrar
                      </Button>
                    </CardFooter>
                  </form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <br></br><br></br><br></br><br></br>
        <Footer />
      </div>
    </>
  )
}
