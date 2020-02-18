import React from 'react';
import { isMobile } from 'react-device-detect';

import SkillItem from './SkillItem';

import styles from '../res/style/styles.css';
import mobileStyles from '../res/style/mobileStyles.css';

import reactImage from '../res/images/react_image.png';
import html5Image from '../res/images/html5_image.png';
import css3Image from '../res/images/css3_image.png';
import jsImage from '../res/images/js_image.png';
import reactNativeImage from '../res/images/react-native_image.png';
import nodeJsImage from '../res/images/node_js_image.png';
import javaImage from '../res/images/java_image.png';
import mySqlImage from '../res/images/mysql_image.png';
import nginxImage from '../res/images/nginx_image.png';
import cImage from '../res/images/c_image.png';
import phpImage from '../res/images/php_image.png';
import cSharpImage from '../res/images/c_sharp_image.png';
import springImage from '../res/images/spring_image.png';
import firebaseImage from '../res/images/firebase_image.png';
import mariaDbImage from '../res/images/maria_db_image.png';
import gitImage from '../res/images/git_image.png';
import slackImage from '../res/images/slack_image.png';
import jiraImage from '../res/images/jira_image.png';


class Skills extends React.Component {

  render() {
    return (
      <div className={isMobile ? mobileStyles.skillsDiv : styles.skillsDiv}>
        <div className={isMobile ? mobileStyles.myNameBackground : styles.myNameBackground}>
          saerom Cho
        </div>
        <div className={isMobile ? mobileStyles.skillsTitle : styles.skillsTitle}>
          💃 My Skills
        </div>
        <div className={styles.skillsWholeDiv}>
          <SkillItem
            subTitle={'Expert'}
            images={[reactImage, html5Image, css3Image]}
          />
          <SkillItem
            subTitle={'Intermediate'}
            images={[jsImage, reactNativeImage, nodeJsImage, javaImage, mySqlImage]}
          />
          <SkillItem
            subTitle={'Basic'}
            images={[firebaseImage]}
          />
          <SkillItem
            subTitle={'Experience'}
            images={[nginxImage, cImage, phpImage, cSharpImage, springImage, mariaDbImage]}
          />
          <SkillItem
            subTitle={'Tools'}
            images={[gitImage, slackImage, jiraImage]}
          />
        </div>
      </div>
    )
  }
}

export default Skills;