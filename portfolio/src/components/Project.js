import styles from './Project.module.css';

import kokoro_image_test from './../assets/images/kokoro-1.png';

// testing
import ImageSlider from './ImageSlider';

// a single Project for ProjectsList
const Project = (props) => {

  // before implementing state, remember to lift state up to the highest relavant component

  // let's start with the kokoro images
  // importing on top, will eventually do like I did with badges

  return (
    // consider using element selectors in css rather than many classes
    // consider extracting smaller components (getting deep)
    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        {/* <div className={styles['project-image']}>
          {props.symbol}
        </div> */}
        <ImageSlider testImage={kokoro_image_test} />
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
          {props.badges.map((badge) => (
            <li className={styles['tech-box-test']} key={badge.toString()}>
              <img src={badge}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Project;