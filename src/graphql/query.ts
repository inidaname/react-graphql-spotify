import { gql } from "@apollo/client";

export const QUERY_ARTISTS = gql`
  query Artist($byName: String!) {
    queryArtists(byName: $byName) {
      name
      image
      id
      albums {
        name
        image
        id
      }
    }
  }
`;
