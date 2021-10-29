import { useState, useEffect } from 'react';

import Project from './Project';
import styles from './ProjectsList.module.css';

const ProjectsList = () => {

  return (
    <div className={styles['projects-list']}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div style={{height: '100px'}}>(delete later)</div>
      <div>
        <Project 
          name="kokoro"
          description={`
            Personal wellness app and social space focused on balancing the mind, body and soul.
          `}
        />
      </div>
      <div style={{height: '100px'}}>(delete later)</div>
    </div>
  )
}

export default ProjectsList;