import React from 'react';
import { useQuery, gql } from '@apollo/client';

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

export const Navegation = () => {

  return (
    <>
      <LUNavbar />
      <div className="section">
        <Container>
          <Row>
            <Col md="3" align="left">
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/anuncio.jpeg")}
                style={{ width: "150px" }}
              />
              <br></br>
              <br></br>
              <br></br>
              <img
                alt="..."
                className="img-fluid rounded shadow"
                src={require("assets/img/anuncio.jpeg")}
                style={{ width: "150px" }}
              />
            </Col>
            <Col md="6">

            </Col>
            <Col md="3" style={{ 'margin': '1px solid black' }}>
              <h4>Artistas que podrían gustarte </h4>
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="container">
                    <Row sm="3" xs="6">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src={require("assets/img/james.jpg")}
                        style={{ width: "150px" }}
                      />

                      <h5> Mark Rober</h5>
                    </Row>
                    <Row>
                      <Button color="link">Seguir</Button>

                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="container">
                    <Row sm="3" xs="6">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src={require("assets/img/julie.jpeg")}
                        style={{ width: "150px" }}
                      />

                      <h5> Julie Suarez</h5>
                    </Row>
                    <Row>
                      <Button color="link">Seguir</Button>

                    </Row>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="container">
                    <Row sm="3" xs="6">
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow"
                        src={require("assets/img/mike.jpg")}
                        style={{ width: "150px" }}
                      />

                      <h5> Michelle Romero</h5>
                    </Row>
                    <Row>
                      <Button color="link">Seguir</Button>

                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
