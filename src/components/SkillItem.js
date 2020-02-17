import React from 'react';
import styles from '../res/style/styles.css';

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { subTitle, content } = this.props;
    return (
      <div className={styles.skillItemDiv}>
        <div className={styles.skillsSubTitle}>
         {subTitle}
        </div>
        <div>
          {content}
          {/* React, HTML5, CSS3 */}
        </div>
      </div>
    )
  }
}

export default SkillItem;