import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from '../res/style/styles.css';
import mobileStyles from '../res/style/mobileStyles.css';

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subTitle, images } = this.props;
    return (
      <div className={styles.skillItemDiv}>
        <div className={isMobile ? mobileStyles.skillsSubTitle : styles.skillsSubTitle}>
         {subTitle}
        </div>
        <div className={isMobile ? mobileStyles.skillItemImageDiv : styles.skillItemImageDiv}>
          {images.map((item, index) => {
            return <img key={index} className={isMobile ? mobileStyles.skillItemImage : styles.skillItemImage} src={item}/>
          })}
        </div>
      </div>
    )
  }
}

export default SkillItem;