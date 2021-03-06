import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { isMobile } from 'react-device-detect';

import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import styles from '../res/style/styles.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    window.scrollTo(0, 0);
  }

  

  renderAppComponent() {
    if (isMobile) {
      return (
        <div>
          <AboutMe />
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
      );
    }

    return (
      <div>
        <div className={styles.header}>
          <a href='#aboutMe'>
            <div className={styles.headerText}>About Me</div>
          </a>
          <a href='#skills'>
            <div className={styles.headerText}>Skills</div>  
          </a>
          <a href='#projects'>
            <div className={styles.headerText}>Projects</div>  
          </a>
          <a href='#contact'>
            <div className={styles.headerText}>Contact</div>  
          </a>
        </div>
        <ScrollableAnchor id={'aboutMe'}>
          <AboutMe />
        </ScrollableAnchor>
        <ScrollableAnchor id={'skills'}>
          <Skills/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
          <Projects/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <Contact/>
        </ScrollableAnchor>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderAppComponent()}
      </div>
    )
  }
};

export default App;