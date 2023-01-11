/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library that concatenates classes
import React from "react";

import {Container} from "reactstrap";
// core components
import { ExamplesNavbar, Footer } from "../../components";
import { Regitsercard } from '../components';



export const RegisterPage = () => { 
  const wrapper = React.useRef();
  
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("reset-page");
    return function cleanup() {
      document.body.classList.remove("reset-page");
    };
  }, []);

  
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper" ref={wrapper}>
        <div className="page-header">
          <div className="squares square1" />
          <div className="squares square2" />
          <div className="squares square3" />
          <div className="squares square4" />
          <div className="squares square5" />
          <div className="squares square6" />
          <div className="page-header-image" />
          <Container align="center">
            <Regitsercard />
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
