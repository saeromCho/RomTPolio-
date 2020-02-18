import React from 'react';
import { isMobile } from 'react-device-detect';

import styles from '../res/style/styles.css';
import mobileStyles from '../res/style/mobileStyles.css';


class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  openUrl(url) {
    window.open(url);
  }

  render() {
    const { title, duration, content, url, image } = this.props;
    let itemContainer;
    if (isMobile) {
      if (typeof url !== 'undefined' && url) {
        itemContainer = mobileStyles.projectItemContainerPointerAbled 
      } else {
        itemContainer = mobileStyles.projectItemContainer
      }
    } else {
      if (typeof url !== 'undefined' && url) {
        itemContainer = styles.projectItemContainerPointerAbled 
      } else {
        itemContainer = styles.projectItemContainer
      }
    }

    return (
      <div
        onClick={typeof url !== 'undefined' && url ? () => this.openUrl(url) : null}
        className={itemContainer}>
        <div className={isMobile ? mobileStyles.projectItemWholeDiv : styles.projectItemWholeDiv}>
          <div className={styles.projectItemImageDiv}>
            <img className={styles.projectItemImage} src={image}/>
          </div>
          <div className={styles.projectItemContentDiv}>
            <div className={isMobile ? mobileStyles.projectItemTitle : styles.projectItemTitle}>
              {title}
            </div>
            <div className={isMobile ? mobileStyles.projectItemDuration : styles.projectItemDuration}>
              개발기간 : {duration}
            </div>
            <div className={isMobile ? mobileStyles.projectItemContent : styles.projectItemContent}>
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem;