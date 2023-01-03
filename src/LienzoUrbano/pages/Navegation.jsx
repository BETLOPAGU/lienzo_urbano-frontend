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

const id = 1;
const USER_QUERY = gql`
{
  user(id: ${ id }) {
    email
    firstName
  }
  artworks {
    id
  }
}
`;

export const Navegation = () => {
  const { data, loading, error } = useQuery(USER_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <>
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
            </Col>
            <Col md="6">
              
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Artistas que podrían gustarte </CardTitle>
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

                      <h5>nombre de Usuario</h5>
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
