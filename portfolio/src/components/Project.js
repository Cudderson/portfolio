// this will define a single Project for ProjectsList

import styles from './Project.module.css';

const Project = () => {
  return (
    // consider using element selectors in css rather than many classes //
    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        <div className={styles['project-image']}>
          k
        </div>
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']}>
          kokoro
        </h2>
        <p className={styles['project-description']}>
          Personal wellness app and social space focused on balancing the mind, body and soul.
        </p>
        <ul>
          <li>'find balance' by recording daily mind, body, and soul activities</li>
          <li>customize your profile page, write 'posts' and establish friendships with other kokoro users</li>
          <li>toggleable 'dark theme' for users that don't prefer the light theme</li>
        </ul>
      </div>
      {/* <div>
        Here, I will provide logos of the technologies used for each project. (do after dynamic)
      </div> */}
    </div>
  )
}

export default Project;