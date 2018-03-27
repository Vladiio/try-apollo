import React from "react";
import ReactDOM from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
  // uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
  uri: "https://nx9zvp49q7.lp.gql.zone/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
