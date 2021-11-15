import { Album, ArtistQuery } from "../generated/graphql";

export interface SearchProps {
  values: string;
  handleChange: (value: string) => void;
}

export interface ResultProps {
  data: ArtistQuery
}

export interface ButtonProps {
  status: boolean;
  handleClick: () => void
}
