export interface SearchProps {
  values: string;
  handleChange: (value: string) => void;
}

export interface ResultProps {
  data: {
    queryArtists: {
      albums: {}[];
      id: string;
      image: string;
      name: string;
    }[]
  }
}

export interface ButtonProps {
  status: boolean;
  handleClick: () => void
}
