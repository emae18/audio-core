import React from "react";
import { Link, graphql } from "gatsby";

export const query = graphql`
  query MyQuery {
    allContentfulCity {
      edges {
        node {
          description
          name
          gatsbyPath(filePath: "/location/{contentfulCity.name}")
          location {
            lat
            lon
          }
        }
      }
    }
  }
`;

const LocationPage = ({ data }) => {
  return (
    <>
      {" "}
      <h2> soy de locations</h2>
      <ul>
        {data.allContentfulCity.edges.map(({ node: city }) => (
          <li key={city.name}>
            <Link to={city.gatsbyPath}>{city.name}</Link>
            {city.name} ~{city.description} ~ {city.location.lat} ~{" "}
            {city.location.lon}
          </li>
        ))}
      </ul>
    </>
  );
};

export default LocationPage;
