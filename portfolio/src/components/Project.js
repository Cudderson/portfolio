// this will define a single Project for ProjectsList

import styles from './Project.module.css';

const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles['project-image']}>IMAGE</div>
      <div className={styles['project-text']}>TEXT</div>
    </div>
  )
}

export default Project;