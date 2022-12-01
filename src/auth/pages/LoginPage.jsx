import React from "react";
import { Footer, ExamplesNavbar } from '../../components';
import { Row, Col, Container } from 'reactstrap';
import { Grid, Toolbar, TextField } from '@mui/material';



export const LoginPage = () => {
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="content" align="center">          
            <Container>
              <form>
                <Row>
                  <Col>
                    <img
                      alt="..."
                      src={require("assets/img/fabien-bazanegue.jpg")}
                      style={{ width: "600px" }}
                      align="right"
                    />
                  </Col>
                  <Col align="center">
                    <h1>Bienvenido</h1>
                    <h2>Inicia sesión con:</h2>
                    <Grid>
                      <TextField
                        label="Correo"
                        type="email"
                        placeholder="correo@google.com"
                      />
                    </Grid>
                    <Grid>
                      <TextField
                        label="Contraseña"
                        type="password"
                        placeholder="contraseña"
                      />
                    </Grid>
                  </Col>
                </Row>
              </form>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
