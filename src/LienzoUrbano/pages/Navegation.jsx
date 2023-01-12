import React, { useEffect } from 'react';
import Slick from "react-slick";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
  CardImg,
  CardFooter
} from "reactstrap";

import { LUNavbar } from 'LienzoUrbano/components/LUNavbar';
import { gql, useQuery } from '@apollo/client';

// custom previous button for the slick component
const PrevButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = (props) => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickSettings = {
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "center slider",
  slide: "section",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
};

export const Navegation = () => {

  const RECOMENDATIONS_QUERY = gql`
    query GetArtworkRecommendations {
      getArtworkRecommendations {
        artist {
          firstName
          lastName
          id
          photoUrl
        }
        id
        title
        imageUrl
      }
    }
  `;

  const { data, loading } = useQuery(RECOMENDATIONS_QUERY);

  return (
    <>
      <LUNavbar />
      <div className="testimonials-4">
        {/* <img alt="..." className="path" src={require("assets/img/blob.png")} /> */}
        <Container fluid>
          <Row style={{ marginTop: '-30px' }}>
            <Col className="positioned" lg="4" md="8" xs="10">
              <h1 className="title text-warning">Te Recomendamos ...</h1>
            </Col>
            <Col md="12">
              <Slick {...slickSettings} >
                {
                  data?.getArtworkRecommendations?.map(recommendation => (
                    <div key={recommendation.id}>
                      <div className="justify-content-left" style={{ cursor: "pointer" }}>
                        <img
                          alt={recommendation.title}
                          className="d-block"
                          src={recommendation.imageUrl}
                        />
                        <br />
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={recommendation.artist.photoUrl}
                          />
                          <span>{recommendation.artist.firstName} {recommendation.artist.lastName}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </Slick>
            </Col>
          </Row>
        </Container>
        <br /><br />
        <Container fluid>
          <Row>
            <Col lg="3" style={{ position: 'sticky' }} className="justify-content-center">
              <img
                alt="..."
                src="https://mktefa.ditrendia.es/hs-fs/hubfs/Ejemplos%20publicidad%20banca%20y%20seguros/ditrendia-Ejemplo%20publicidad%20en%20banca%20y%20seguros-banner%20Openbank%20Hipoteca%201.gif?width=300&amp;height=600&amp;name=ditrendia-Ejemplo%20publicidad%20en%20banca%20y%20seguros-banner%20Openbank%20Hipoteca%201.gif"
                style={{ height: '400px' }}
              />
              <br /><br />
              <img
                alt="..."
                src="https://i2.wp.com/esferacreativa.com/wp-content/uploads/2021/12/mc-donalds.jpg?resize=206%2C300&amp;ssl=1"
                style={{ height: '300px' }}
              />
            </Col>
            <Col lg="9" className='justify-content-center'>
              <Card style={{ width: '900px' }}>
                <CardHeader align="left">
                  <img
                    alt="..."
                    src={require("assets/img/logo.png")}
                    className="avatar img-raised"
                  />
                  <span className="ml-1">Artista Juan |  14 de diciembre del 2022             </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="btn btn-primary btn-sm">Seguir</button>
                  {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  <i className="fas fa-ellipsis-v" style={{ fontSize: '20px', align: 'right' }} />
                  <br /><br /><br />
                  <p>Aquí el autor pone una descripción</p>
                </CardHeader>
                <CardBody>
                  <CardImg alt="..."
                    src="https://unamglobal.unam.mx/wp-content/uploads/2018/02/martin-whatson-street-art-2.jpg">

                  </CardImg>
                  {/* <CardBody className="text-left">
                    <CardFooter align="center">
                      <div lg="3">
                        <i className="fas fa-images" style={{ fontSize: '20px' }} />
                      </div>

                      <div lg="3">
                        <i className="fa fa-info-circle" style={{ fontSize: '20px' }} />
                      </div>
                    </CardFooter>
                  </CardBody>
                  <CardBody className="text-left">
                    <CardFooter>
                      <div className='justify-content-left'>
                        <i className="tim-icons icon-heart-2 text-danger" /> 0
                        <i className="tim-icons icon-single-copy-04 text-info" />"0"
                      </div>
                      <div className='justify-content-right'>
                        <i className="fa fa-save" style={{ fontSize: '20px' }} />
                      </div>
                    </CardFooter>
                  </CardBody> */}
                </CardBody>
                <CardFooter align='center'>
                  <div>
                    <i className="fas fa-images" style={{ fontSize: '30px' }} />
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <i className="fa fa-info-circle" style={{ fontSize: '30px' }} />
                  </div>
                </CardFooter>
                <CardFooter className='justify-content-end'>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-heart-2 text-danger" style={{ fontSize: '30px' }} /> 0
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="tim-icons icon-single-copy-04 text-info" style={{ fontSize: '30px' }} />0
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
