import React from 'react';
import styles from '../res/style/styles.css';
import ScrollableAnchor from 'react-scrollable-anchor'

class Header extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <ScrollableAnchor id={'aboutMe'}>
          <div className={styles.headerText}>About Me</div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'skills'}>
          <div className={styles.headerText}>Skills</div>  
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <div className={styles.headerText}>Projects</div>  
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div className={styles.headerText}>Contact</div>  
        </ScrollableAnchor>
      </div>
    )
  }
}

export default Header;