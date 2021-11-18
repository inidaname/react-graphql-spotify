import React, { FunctionComponent, ReactElement } from 'react'
import styles from './Footer.module.css';

const Footer: FunctionComponent = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      Built With React and Typescript
    </footer>
  )
}

export default Footer
