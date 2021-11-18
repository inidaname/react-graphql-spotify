import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Search.module.css";
import { SearchProps } from "../../types";
import { Button } from "..";

const Search: FunctionComponent<SearchProps> = ({ values, handleChange, handleSubmit }): ReactElement => {
  
  return (
    <form  className={styles.searchSpace}>
      <label htmlFor="search">Search Here</label>
      <input
        type="search"
        onChange={(e) => handleChange(e.target.value)}
        value={values}
        name="search"
        id="search"
        aria-label="Search by artist name"
        placeholder="Search by artist name"
      />
      <Button handleSubmit={handleSubmit} />
    </form>
  );
};

export default Search;
