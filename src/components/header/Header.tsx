import React, { FunctionComponent, ReactElement } from "react";
import styles from './Header.module.css'

interface Props {}

const Header: FunctionComponent<Props> = (): ReactElement => {
  return (
    <header className={styles.header}>
      <h1>Music Search</h1>
    </header>
  );
};

export default Header;
