import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from '../res/style/styles.css';
import mobileStyles from '../res/style/mobileStyles.css';

import gitImage from '../res/images/git_image.png';

class Contact extends React.Component {

  render() {
    return (
      <div className={isMobile ? mobileStyles.contactDiv : styles.contactDiv}>
        <div className={isMobile ? mobileStyles.contactTitle : styles.contactTitle}>🙆‍♀️ Contact</div>
        <div className={isMobile ? mobileStyles.contactContent : styles.contactContent}>
          <div className={isMobile ? mobileStyles.contactFirstContent : styles.contactFirstContent}>
            <a target="_neww" href="mailto:📮 saerom.r.cho@gmail.com">📮 saerom.r.cho@gmail.com</a>
          </div>
          <div>
            📱 010.4172.3817
          </div>
          <div className={isMobile ? mobileStyles.contactGitImageDiv : styles.contactGitImageDiv}>
            <a href={"https://github.com/saeromCho/RomTPolio-"} target="_new">
              <img className={styles.contactGitImage} src={gitImage} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;