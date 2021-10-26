// this will define a single Project for ProjectsList

import styles from './Project.module.css';

const Project = () => {
  return (
    // consider using element selectors in css rather than many classes //
    <div className={styles.project}>
      <div className={styles['project-image']}>
        k
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']}>
          kokoro
        </h2>
        <p className={styles['project-description']}>
          Personal wellness app and social space focused on balancing the mind, body and soul.
        </p>
        {/* TODO: <ul> className */}
        <ul>
          <li>'find balance' by recording daily mind, body, and soul activities</li>
          <li>establish friendships with other kokoro users</li>
          <li>customize your profile page</li>
          <li>write 'posts' for other kokoro users to read</li>
          <li>toggleable 'dark theme' for users that don't prefer the light theme</li>
        </ul>
      </div>
    </div>
  )
}

export default Project;