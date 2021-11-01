import styles from './Project.module.css';

// proper way to reference a file one directory up
import javascript_svg from './../assets/badges/javascript.svg';

// a single Project for ProjectsList
const Project = (props) => {
  return (
    // consider using element selectors in css rather than many classes //
    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        <div className={styles['project-image']}>
          {props.symbol}
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
      <div className={styles['project-tech']}>
        Technologies Used:
        <ul className={styles['project-tech-list']}>
          <li className={styles['tech-box-test']}>
            <img src={javascript_svg}></img>
          </li>
          <li className={styles['tech-box-test']}></li>
          <li className={styles['tech-box-test']}></li>
          <li className={styles['tech-box-test']}></li>
          <li className={styles['tech-box-test']}></li>
        </ul>
      </div>
    </div>
  )
}

export default Project;