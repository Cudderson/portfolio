import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {

  return (
    <div className={styles.projects}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div className={styles['projects-inner']}>
        {/* can make dynamic in future */}
        <div className={styles.item}>
          <h2>Natural Selection Simulator</h2>
          <h4>A customizable implementation of a genetic algorithm based on natural selection.</h4>
        </div>
        <div className={styles.item}>
          <h2>kokoro</h2>
          <h4>A personal-wellness / social app focused on the 'mind-body-soul' lifestyle.</h4>
        </div>
        <div className={styles.item}>
          <h2>Tesla Now</h2>
          <h4>Real-time stock charts, news, and analytics for Tesla Inc.</h4>
        </div>
        <div className={styles.item}>
          <h2>Password Manager</h2>
          <h4>A CLI for encrypting and storing your personal passwords.</h4>
        </div>
      </div>
    </div>
  )
}

export default Projects;