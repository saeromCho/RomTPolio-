import React from 'react';
import Typical from 'react-typical'

import styles from '../res/style/styles.css';

class AboutMe extends React.Component {

  render() {
    return (
      <div className={styles.aboutMeDiv}>
        <div className={styles.aboutMeWholeDiv}>
          <Typical
            steps={['안녕하세요, Developer 조새롬의 포트폴리오 입니다.', 2400, '잘하는 개발자, 믿고 맡길 수 있는 실력을 지닌 개발자가 되려고 노력합니다 🚀', 2400, '발전과 🗣👂, UI, UX에도 관심이 많은 사람 👀', 1800, '저와 함께하는 동료들 💃🕺. 즉 ❗️, 저와 함께 길을 가고 있는 \'사람\'이 제일 중요한 개발자입니다 👫']}
            wrapper="p"
            className={styles.aboutMeText}
          />
        </div>
      </div>
    )
  }
}

export default AboutMe;