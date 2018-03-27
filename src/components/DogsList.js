import React from "react";

import { Query } from "react-apollo";
import { GET_DOGS } from "../queries";

export default ({ onSelectBreed }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <p> Loading... </p>;
      if (error) return <p> {error} </p>;

      return (
        <select name="dog" onChange={e => onSelectBreed(e.target.value)}>
          {data.dogs.map(dog => (
            <option key={dog.id} value={dog.breed}>
              {dog.breed}
            </option>
          ))}
        </select>
      );
    }}
  </Query>
);
