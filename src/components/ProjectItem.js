import React from 'react';
import styles from '../res/style/styles.css';


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
    return (
      <div
        onClick={typeof url !== 'undefined' && url ? () => this.openUrl(url) : null}
        className={typeof url !== 'undefined' && url ? styles.projectItemContainerPointerAbled : styles.projectItemContainer}>
        <div className={styles.projectItemWholeDiv}>
          <div className={styles.projectItemImageDiv}>
            <img className={styles.projectItemImage} src={image}/>
          </div>
          <div className={styles.projectItemContentDiv}>
            <div className={styles.projectItemTitle}>
              {title}
            </div>
            <div className={styles.projectItemDuration}>
              개발기간 : {duration}
            </div>
            <div className={styles.projectItemContent}>
              {content}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectItem;