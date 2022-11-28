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

export const Navegation = () => {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md="3" align="left">
              <h1>Notices</h1>
            </Col>
            <Col md="6">
              <h1>Publications</h1>
            </Col>
            <Col md="3">
              <Card>
                <CardHeader>
                  <CardTitle>Artistas que podrían gustarte</CardTitle>
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
