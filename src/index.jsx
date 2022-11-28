/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import { AppRouter } from "router/AppRouter"

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

// import Index from "LienzoUrbano/views/Index.js";
// import LandingPage from "LienzoUrbano/views/examples/LandingPage.js";
// import RegisterPage from "LienzoUrbano/views/examples/RegisterPage.js";
// import ProfilePage from "LienzoUrbano/views/examples/ProfilePage.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
