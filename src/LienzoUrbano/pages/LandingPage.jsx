/*!
*/
import React from "react";
// react plugin used to create charts
// import { Line } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { ExamplesNavbar, Footer } from "../../components";

// import bigChartData from "variables/charts.js";

export const LandingPage = () => {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png")}
          />
          <Container>
            <Row>
              <Col md="4">
                <hr className="line-info" />
                <h1>
                  Tus{" "}
                  <span className="text-info">Colecciones</span>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Título de Colección</h4>
                        <span>Categoría</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Resúmen</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Ver más...
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
              <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Título de Colección</h4>
                        <span>Categoría</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Resúmen</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Ver más...
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
              <Card className="card-coin card-plain">
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Título de Colección</h4>
                        <span>Categoría</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Resúmen</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                      Ver más...
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
    </>
  );
}
