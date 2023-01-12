/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter, Route } from "react-router-dom";
import { AppRouter } from "router/AppRouter"

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-pro-react.scss?v1.2.0";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
import { store } from "./store";

const httpLink = createHttpLink({
  uri: "https://liberatosoftware.com/lienzourbano-backend/graphql/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
