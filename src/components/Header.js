import React from 'react';
import styles from '../res/style/styles.css';

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.headerText}>About Me</div>
        <div className={styles.headerText}>Skills</div>
        <div className={styles.headerText}>Projects</div>
        <div className={styles.headerText}>Contact</div>
      </div>
    )
  }
}

export default Header;