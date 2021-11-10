import React, { FunctionComponent, ReactElement } from 'react';
import styles from './Search.module.css';

interface Props {
  
}

const Search: FunctionComponent = (props: Props): ReactElement => {
  return (
    <section className={styles.searchSpace}>
      Search Here <input type="search" name="" aria-label='Search by artist name' id="" />
    </section>
  )
}

export default Search
