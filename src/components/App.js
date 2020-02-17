import React from "react";

import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import styles from '../res/style/styles.css'


class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    )
  }
};

export default App;