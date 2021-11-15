import React, { FunctionComponent, ReactElement } from "react";
import styles from "./Search.module.css";
import { SearchProps } from "../../types";

const Search: FunctionComponent<SearchProps> = ({ values, handleChange }): ReactElement => {
  return (
    <section className={styles.searchSpace}>
      Search Here
      <input
        type="search"
        name=""
        onChange={(e) => handleChange(e.target.value)}
        value={values}
        aria-label="Search by artist name"
        id=""
      />
    </section>
  );
};

export default Search;
