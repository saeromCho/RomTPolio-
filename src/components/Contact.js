import React from 'react';
import styles from '../res/style/styles.css';

class Contact extends React.Component {

  render() {
    return (
      <div className={styles.contactDiv}>
        <div className={styles.contactTitle}>🙆‍♀️ Contact</div>
        <div className={styles.contactContent}>
          <div className={styles.contactFirstContent}>
            📮 saerom.r.cho@gmail.com
          </div>
          <div>
            📱 010.4172.3817
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;