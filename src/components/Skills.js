import React from 'react';

import SkillItem from './SkillItem';

import styles from '../res/style/styles.css';

class Skills extends React.Component {

  render() {
    return (
      <div className={styles.skillsDiv}>
        <div className={styles.skillsTitle}>
          💃 My Skills
        </div>
        <div>
          <SkillItem
            subTitle={'Expert'}
            content={'React, HTML5, CSS3'}
          />
          <SkillItem
            subTitle={'Intermediate'}
            content={'JavaScript, React-Native, Node.js, Express.js, Java, MySQL'}
          />
          <SkillItem
            subTitle={'Experience'}
            content={'PHP, C#, Spring, MariaDB'}
          />
          <SkillItem
            subTitle={'Tools'}
            content={'Git, Slack, JIRA'}
          />
          {/* <div>
            <div className={styles.skillsSubTitle}>
              Expert
            </div>
            <div>
             React, HTML5, CSS3
            </div>
          </div>
          <div>
            <div className={styles.skillsSubTitle}>
              Intermediate
            </div>
            <div>
              JavaScript, React-Native, Node.js, Express.js, Java, MySQL
            </div>
          </div>
          <div>
            <div className={styles.skillsSubTitle}>
              Experience
            </div>
            <div>
              PHP, C#, Spring, MariaDB
            </div>
          </div>
          <div>
            <div className={styles.skillsSubTitle}>
              Tools
            </div>
            <div>
              Git, Slack, JIRA
            </div>
          </div> */}
          {/* JavaScript, React, Node.js, Express.js, React-Native, HTML5, CSS3, 
          MySQL, Java, MariaDB,
          PHP, C#,
          Slack, Git, JIRA */}
        </div>
      </div>
    )
  }
}

export default Skills;