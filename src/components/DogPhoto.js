import React from "react";
import { Query } from "react-apollo";

import { GET_DOG_PHOTO } from "../queries";

const DogPhoto = ({ error, loading, data }) => {
  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading</p>;

  return (
    <div>
      <img src={data.dog.displayImage} alt="" />
    </div>
  );
};

export default ({ breed }) => (
  <Query children={DogPhoto} query={GET_DOG_PHOTO} variables={{ breed }} />
);
