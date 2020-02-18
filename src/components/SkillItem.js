import React from 'react';
import styles from '../res/style/styles.css';

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subTitle, images } = this.props;
    return (
      <div className={styles.skillItemDiv}>
        <div className={styles.skillsSubTitle}>
         {subTitle}
        </div>
        <div className={styles.skillItemImageDiv}>
          {images.map((item, index) => {
            return <img key={index} className={styles.skillItemImage} src={item}/>
          })}
        </div>
      </div>
    )
  }
}

export default SkillItem;