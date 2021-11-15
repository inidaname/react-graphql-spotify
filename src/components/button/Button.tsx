import React, { FunctionComponent } from "react";
import { ButtonProps } from "../../types";
import styles from './Button.module.css';


const Button: FunctionComponent<ButtonProps> = ({status, handleClick}) => {
  return  <button className={styles.button} disabled={status} name="search" onClick={handleClick}>Search</button>;
};

export default Button;
