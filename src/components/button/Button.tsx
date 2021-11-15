import React, { FunctionComponent, useContext } from "react";
import { ButtonProps, ContextState } from "../../types";
import styles from './Button.module.css';
import AppContext from '../../context';



const Button: FunctionComponent<ButtonProps> = ({handleClick}) => {
  const {state} = useContext<ContextState>(AppContext)
  console.log(state)
  return  <button className={styles.button} disabled={state} name="search" onClick={handleClick}>Search</button>;
};

export default Button;
