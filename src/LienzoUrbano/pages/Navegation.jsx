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
  Button
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
              <Slick {...slickSettings}>
                {
                  data?.getArtworkRecommendations?.map(recommendation => (
                    <div key={recommendation.id}>
                      <div className="justify-content-left" style={{ cursor: "pointer" }}>
                        <img
                          alt={recommendation.title}
                          className="d-block"
                          src={recommendation.imageUrl}
                          align="center"
                        />
                        <br />
                        <div className="author justify-content-left">
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
      </div>
    </>
  )
}
