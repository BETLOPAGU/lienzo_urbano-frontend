/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useCallback} from "react";
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  Row,
  Col,
  Badge
} from "reactstrap";

// core component
import { IndexNavbar } from "../../components";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/auth/register', { replace: true }), [navigate]);

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="squares square7" />
          <div className="content-center">
            <Container>
              <Row className="align-items-center text-left">
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  <h1 className="title" align="center">
                    Lienzo Urbano <br />
                    <strong className="text-warning"></strong>
                  </h1>
                  <h3 className="text-warning" align="center">
                    Transforma tu Ciudad
                  </h3>
                  <Row className="row-input">
                    <Col className="mt-1" md="4" xs="3">
                    </Col>
                    <Col md="4" xs="6">
                      <Button
                        color="warning"
                        onClick={handleOnClick}
                      >
                        ¡Comenzar!
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  {/* SVG Illustration */}
                  <figure className="ie-non-standard-hero-shape">
                    <svg
                      className="injected-svg js-svg-injector"
                      data-img-paths={
                        "[{&quot;targetId&quot;: &quot;#imageShape1&quot;, &quot;newPath&quot;: &quot;" +
                        "https://piase.s3.us-east-2.amazonaws.com/lu-welcome.jpg" +
                        "&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;" +
                        "https://piase.s3.us-east-2.amazonaws.com/lu-welcome.jpg" +
                        "&quot;}]"
                      }
                      data-parent="#SVGNonStandardHeroShape"
                      style={{ enableBackground: "new 10 12 878.9 907" }}
                      viewBox="10 12 878.9 907"
                      x="0px"
                      y="0px"
                      xmlSpace="preserve"
                    >
                      <g>
                        <defs>
                          <path
                            d="M299.27,772.72s-24.67-76.08-131.42-51.33C62.82,745.74,81.48,563.56,92,495.71S193.94,92.18,454.77,76.46,658.58,250.62,632.75,306s-78.37,115.53,16.76,295.77-89.33,258.1-129.36,265.84S375.3,912.41,299.27,772.72Z"
                            id="firstShape"
                          />
                        </defs>
                        <clipPath id="secondShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#firstShape"
                          />
                        </clipPath>
                        <g clipPath="url(#secondShape)">
                          <image
                            height="1000"
                            id="imageShape1"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="1000"
                            xlinkHref={"https://piase.s3.us-east-2.amazonaws.com/lu-welcome.jpg"}
                          />
                        </g>
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M741.49,643q-2.58-.31-5.17-.4c-12-.45-46.58-14.37-79.24-71.85-17.81-31.35-47.32-96.41-37.88-167.21,7.84-58.79,38.38-97.1,48.34-130.64,24.82-83.61,66.62-77.07,98-77.07,15.93,0,31.1,14.82,39.21,26.39,11.55,16.48,19.72,46.24-9.1,93.32-60.66,99.07,14.09,139.33-.93,239.68C781.72,641.8,750,644,741.49,643Z"
                            id="thirdShape"
                          />
                        </defs>
                        <clipPath id="fourthShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#thirdShape"
                          />
                        </clipPath>
                        <g
                          clipPath="url(#fourthShape)"
                          transform="matrix(1 0 0 1 0 0)"
                        >
                          <image
                            height="1000"
                            id="imageShape2"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="1000"
                            xlinkHref={"https://piase.s3.us-east-2.amazonaws.com/lu-welcome.jpg"}
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                  {/* End SVG Illustration */}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>


        <div className="cd-section" id="features">
        {/* ********* FEATURES 6 ********* */}
        <div className="features-6">
          <Container>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="info info-horizontal info-default">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-atom" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Para personas</h3>
                    <p>
                      ¿Tu propiedad está vandalizada, fea, o simplemente quieres que se vea diferente a las demás? <br/> <br/>
                      Con Lienzo Urbano puedes contratar a un artista urbano para que le de un poco de personalidad a tu casa.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal info-default">
                  <div className="icon icon-info">
                    <i className="tim-icons icon-app" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Para artistas</h3>
                    <p>
                      ¿Te gusta expresarte con el arte urbano pero es difícil conseguir un lienzo y vivir de tu arte? <br/> <br/>
                      Con Lienzo Urbano las personas interesadas en tu arte se podrán poner en contacto contigo, te proporcionarán el lienzo y los recursos necesarios para que puedas expresar tus ideas.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal info-default">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-bell-55" />
                  </div>
                  <div className="description">
                    <h3 className="info-title">Para la CDMX</h3>
                    <p>
                      Las ciudades actuales, suelen estar vandalizadas, generando un ambiente tóxico para sus habitantes. <br/> <br/>
                      Las ciudades repletas de arte y cultura, atraen turismo y fomenta a muchas personas a expresarse y redirigir su energía a actividades culturales y artísticas.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" xs="10">
                <img
                  alt="..."
                  className="shape"
                  src={require("assets/img/path2.png")}
                />
                <figure className="ie-non-standard-hero-shape">
                  <svg
                    className="injected-svg js-svg-injector"
                    style={{ enableBackground: "new 10 12 878.9 907" }}
                    viewBox="10 12 878.9 907"
                    x="0px"
                    y="0px"
                    xmlSpace="preserve"
                  >
                    <g>
                      <defs>
                        <path
                          d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                          id="firstShape"
                        />
                      </defs>
                      <clipPath id="secondShape">
                        <use
                          style={{ overflow: "visible" }}
                          xlinkHref="#firstShape"
                        />
                      </clipPath>
                      <g clipPath="url(#secondShape)">
                        <image
                          height="900"
                          id="imageShape1"
                          style={{ overflow: "visible" }}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                          width="900"
                          xlinkHref={require("assets/img/max.jpg")}
                        />
                      </g>
                    </g>
                    <g>
                      <defs>
                        <path
                          d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                          id="thirdShape"
                        />
                      </defs>
                      <clipPath id="fourthShape">
                        <use
                          style={{ overflow: "visible" }}
                          xlinkHref="#thirdShape"
                        />
                      </clipPath>
                      <g
                        clipPath="url(#fourthShape)"
                        transform="matrix(1 0 0 1 0 0)"
                      >
                        <image
                          height="1000"
                          id="imageShape2"
                          style={{ overflow: "visible" }}
                          transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                          width="900"
                          xlinkHref={require("assets/img/max.jpg")}
                        />
                      </g>
                    </g>
                  </svg>
                </figure>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 6 ********* */}
      </div>{" "}
    </>
  );
}
