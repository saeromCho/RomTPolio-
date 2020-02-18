import React from 'react';
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
    let i = 0;
    const typing = setInterval(() => {
      const { aboutMeText } = this.state;
      const endText = "Developer, saerom Cho's Portpolio";

      if(i < endText.length) { 
        this.setState ({
          aboutMeText: aboutMeText + endText[i],
        });
        i++
      } else {
        clearInterval(typing);
        this.setState({
          endAboutMeText: true,
        });
      }
    },170);
  }

  render() {
    const { aboutMeText, endAboutMeText } = this.state;
    return (
      <div className={styles.aboutMeDiv}>
        <img className={styles.aboutImage} src={aboutMeBackgroundImage}/>
        <div className={styles.aboutMeWholeDiv}>
          <div className={styles.aboutMeMainText}>
            <span className={styles.aboutMeMyNameText}>
              {aboutMeText}
            </span>
            {
              endAboutMeText && 
              <span className={styles.aboutMeTextEndDot}>.</span>
            }
          </div>
          <div className={styles.aboutMeSubDiv}>
            {endAboutMeText && 
              <FadeIn className={styles.aboutMeSubText} delay={2500}>
                <div>잘하는 개발자가 되려고 노력합니다.</div>
                <div>발전과 성장에 에너지를 얻는 사람.</div>
                <div>개발자이지만 UI, UX에 예민한 관심을 보이는 사람.</div>
                <div>저와 함께 길을 가고 있는 '사람'이 제일 중요한 개발자입니다.</div>
              </FadeIn>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;