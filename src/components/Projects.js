import React from 'react';

import ProjectItem from './ProjectItem';

import styles from '../res/style/styles.css';

class Project extends React.Component {

  render() {
    return (
      <div className={styles.projectsDiv}>
        <div className={styles.projectsTitle}>
          📑 Projects
        </div>
        <ProjectItem
          title={'Talken'}
          content={'front-end작업 및 back-end 일부 작업'}
        />
        <ProjectItem
          title={'Talken'}
          content={'front-end작업 및 back-end 일부 작업'}
        />
        <ProjectItem
          title={'Talken'}
          content={'front-end작업 및 back-end 일부 작업'}
        />
      </div>
    )
  }
}

export default Project;