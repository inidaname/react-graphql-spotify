import { ArtistQuery } from "../generated/graphql";

export interface SearchProps {
  values: string;
  handleChange: (value: string) => void;
  handleSubmit: () => void;
}

export interface ResultProps {
  data: ArtistQuery
}

export interface ButtonProps {
  handleSubmit: () => void
}
