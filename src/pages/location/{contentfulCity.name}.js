import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query($id: String = " ") {
    contentfulCity(id: { eq: $id }) {
      name
      description
      location {
        lat
        lon
      }
    }
  }
`;

const City = ({data}) => {
  return <div>Soy la ciudad {data.contentfulCity.name}</div>;
};

export default City;
