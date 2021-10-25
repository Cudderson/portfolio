import { useState, useEffect } from 'react';

import Project from './Project';
import styles from './ProjectsList.module.css';

const Projects = () => {

  return (
    <div className={styles['projects-list']}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects;