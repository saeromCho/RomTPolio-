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
    const { title, duration, content, url } = this.props;
    return (
      <div onClick={typeof url !== 'undefined' && url ? () => this.openUrl(url) : null}className={styles.projectItemContainer}>
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
    )
  }
}

export default ProjectItem;