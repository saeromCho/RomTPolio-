import React from 'react';
import styles from '../res/style/styles.css';

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { title, content } = this.props;
    return (
      <div className={styles.projectItemContainer}>
        <div>
          제목 {title}
        </div>
        <div>
          내용 {content}
        </div>
      </div>
    )
  }
}

export default ProjectItem;