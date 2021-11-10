import React, { FunctionComponent, ReactElement } from "react";
import styles from './Header.module.css'

interface Props {}

const Header: FunctionComponent<Props> = (): ReactElement => {
  return (
    <header className={styles.header}>
      <span>Music Search</span>
    </header>
  );
};

export default Header;
