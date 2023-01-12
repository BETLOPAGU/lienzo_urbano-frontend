/*!

*/
import React from "react";
// import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components

import classnames from "classnames";


// reactstrap components
import {
  Alert,
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  CustomInput,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import ImageUpload from "../temp/components/CustomUpload/ImageUpload.js";
import TagsInput from "../temp/components/TagsInput/TagsInput.js";
import { LUNavbar } from "LienzoUrbano/components/LUNavbar.jsx";
const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;

export const ProfilePage = () => {
  // const [tabs, setTabs] = React.useState(1);
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  return (
    <>
      <LUNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="section">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <Container>
            <br /><br />
            <Row>
              <Col md="3">
                <div className="section">
                  {/* User Information */}
                  <section className="text-center">
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/james.jpg")}
                      style={{ width: "150px" }}
                    />
                  </section>
                </div>
              </Col>
              <Col md="6">
                <br />
                <Row>
                  <section>
                    <Col md="3">
                      <h3 className="title" align="left">Charlie Bailey</h3>
                    </Col>
                    <Col md="3">
                      <Button
                        className="btn-simple"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                        align="right"
                      >
                        <i className="tim-icons icon-check-2 mr-1" />
                        Following
                      </Button>
                    </Col>
                  </section>
                </Row>
                <Row>
                  <section>
                    <h4 align="left">Correo</h4>
                    <h4 align="left">Teléfono</h4>
                    <br />
                    <h3 align="left"> 2 Publicaciones  0 Seguidores  <i className="fas fa-star" />4.5 </h3>
                  </section>
                </Row>
              </Col>
            </Row>
            <Row>

            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
