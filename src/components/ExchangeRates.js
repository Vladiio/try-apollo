import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router";

import { GET_RATES } from "../queries";

const ExchangeRages = ({ loading, error, data }) => {
  if (loading) return <p>Loading</p>;
  if (loading) return <p>{error}</p>;

  return data.rates.map((rate, index) => (
    <div key={index}>
      <p>{`${rate.currency}: ${rate.rate}`}</p>
    </div>
  ));
};

export default withRouter(({ match: { params } }) => {
  const currency = params.currency || "usd";
  return (
    <Query query={GET_RATES} variables={{ currency }}>
      {ExchangeRages}
    </Query>
  );
});
