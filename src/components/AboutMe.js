import React from 'react';
import Typical from 'react-typical';
import FadeIn from 'react-fade-in';

import styles from '../res/style/styles.css';

import aboutMeBackgroundImage from '../res/images/about_me_background.jpg';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMeText: '',
      endAboutMeText: false,
    }
  }

  componentDidMount() {
    let i =0;

    const typing = setInterval(() =>{
      const { aboutMeText } = this.state;
      const finalText= "안녕하세요, Developer 조새롬의 포트폴리오 입니다.";

      if(i<finalText.length) { 
        this.setState ({
          aboutMeText: aboutMeText + finalText[i],
        });
        i++
      } else {
        clearInterval(typing);
        this.setState({
          endAboutMeText: true,
        });
      }
    },160);
  }

  render() {
    const { aboutMeText, endAboutMeText } = this.state;
    return (
      <div className={styles.aboutMeDiv}>
        <img className={styles.aboutImage} src={aboutMeBackgroundImage}/>
        <div className={styles.aboutMeWholeDiv}>
          <div className={styles.aboutMeText}>
            {aboutMeText}
          </div>
          <div className={styles.aboutMeSubDiv}>
            {endAboutMeText && 
              <FadeIn className={styles.aboutMeText} delay={3000}>
                {/* <div>안녕하세요, Developer 조새롬의 포트폴리오 입니다.</div> */}
                <div>잘하는 개발자, 믿고 맡길 수 있는 실력을 지닌 개발자가 되려고 노력합니다 🚀</div>
                <div>발전과 🗣👂, UI, UX에도 관심이 많은 사람 👀</div>
                <div>저와 함께하는 동료들 💃, 즉 ❗️, 저와 함께 길을 가고 있는 '사람'이 제일 중요한 개발자입니다 👫</div>
              </FadeIn>
            }
          </div>
          {/* <Typical
            steps={['안녕하세요, Developer 조새롬의 포트폴리오 입니다.']}
            wrapper="p"
            className={styles.aboutMeText}
          /> */}
          
          
          {/* {aboutMeText} */}
          {/* <Typical
            steps={['안녕하세요, Developer 조새롬의 포트폴리오 입니다.', 2400, '잘하는 개발자, 믿고 맡길 수 있는 실력을 지닌 개발자가 되려고 노력합니다 🚀', 2400, '발전과 🗣👂, UI, UX에도 관심이 많은 사람 👀', 1800, '저와 함께하는 동료들 💃🕺. 즉 ❗️, 저와 함께 길을 가고 있는 \'사람\'이 제일 중요한 개발자입니다 👫', 3000]}
            wrapper="p"
            className={styles.aboutMeText}
          /> */}
        </div>
      </div>
    )
  }
}

export default AboutMe;