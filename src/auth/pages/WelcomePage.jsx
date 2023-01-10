/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Box } from '@mui/system';

import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";

// core component
import { IndexNavbar, Footer, PageHeader } from "../../components";
import { ImageGallery } from "auth/components";

export const WelcomePage = () => {
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
          <img
            alt="..."
            className="path path3"
            src={require("assets/img/path3.png")}
          />
          <div className="content-center">
            <Container>
              <Row className="align-items-center text-left">
                <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                  <h1 className="title">
                    Integrated <br />
                    <strong className="text-warning">Front marketing</strong>
                  </h1>
                  <p className="description">
                    We aim high at being focused on building relationships with
                    our clients and community. Using our creative gifts drives
                    this foundation.
                  </p>
                  <Row className="row-input">
                    <Col className="mt-1" md="8" xs="6">
                      <Input
                        aria-label="Your email"
                        id="signupSrEmail"
                        name="email"
                        placeholder="Your email"
                        type="email"
                      />
                    </Col>
                    <Col md="4" xs="6">
                      <Button color="warning">Get Started</Button>
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
                        require("assets/img/painter.png") +
                        "&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;" +
                        require("assets/img/painter.png") +
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
                            xlinkHref={require("assets/img/painter.png")}
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
                            xlinkHref={require("assets/img/painter.png")}
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
          <Footer />
        </div>
      </div>
    </>
  );
}
