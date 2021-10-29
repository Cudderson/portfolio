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
        {/* the 'symbol' prop will be replaced with proper images in future */}
        <Project 
          name="kokoro"
          description={`
            Personal wellness app and social space focused on balancing the mind, body and soul.
          `}
          symbol="k"
        />
        <Project
          name="Natural Selection Simulator"
          description={`
            A customizable implementation of a genetic algorithm based on natural selection.
          `}
          symbol="NSS"
        />
        <Project
          name="Tesla Now"
          description={`
            Real-time analysis, charts and news for Tesla Inc.
          `}
          symbol="TN"
        />
        <Project
          name="password manager"
          description={`
            CLI tool to encrypt/decrypt and store personal passwords. 
          `}
          symbol="pm"
        />
      </div>
      <div style={{height: '100px'}}>(delete later)</div>
    </div>
  )
}

export default ProjectsList;