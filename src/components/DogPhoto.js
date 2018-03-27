import React from "react";
import { Query } from "react-apollo";

import { GET_DOG_PHOTO } from "../queries";

const DogPhoto = ({
  error,
  loading,
  data,
  refetch,
  networkStatus,
  startPolling,
  stopPolling
}) => {

  if (networkStatus === 4) return <p>Refetching...</p>;
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading</p>
  

  return (
    <div>
      <img src={data.dog.displayImage} alt="" />
      <button onClick={() => refetch()}>refetch</button>
    </div>
  );
};

export default ({ breed }) => (
  <Query 
    children={DogPhoto}
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    // pollInterval={500}
    notifyOnNetworkStatusChange
    skip={!breed} 
  />
);
