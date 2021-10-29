// this will define a single Project for ProjectsList

import styles from './Project.module.css';

const Project = (props) => {
  return (
    // consider using element selectors in css rather than many classes //
    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        <div className={styles['project-image']}>
          k
          {/* maybe each Project's first image could be an app-style logo? (we could pass in a text prop here then) */}
        </div>
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']}>
          {props.name}
        </h2>
        <p className={styles['project-description']}>
          {props.description}
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