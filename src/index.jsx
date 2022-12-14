/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route } from "react-router-dom";
import { AppRouter } from "router/AppRouter"

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import { store } from "./store";

const client = new ApolloClient({
  uri: "https://liberatosoftware.com/lienzourbano-backend/graphql/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client} store={ store }>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </ApolloProvider>
);
