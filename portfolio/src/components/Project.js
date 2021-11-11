import styles from './Project.module.css';

// sub-components
import ProjectFeatures from './ProjectFeatures.js';
import ImageSlider from './ImageSlider';

const Project = (props) => {

  return (
    // consider using element selectors in css rather than many classes
    // consider extracting smaller components (getting deep)
    // ** be aware of extra wrapper divs **

    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        <ImageSlider images={props.images} />
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']}>
          {props.name}
        </h2>
        <p className={styles['project-description']}>
          {props.description}
        </p>

        {/*
          here, I'm thinking of placing links to github/live

          additionally, I will place the "Made With" section here
        */}

        {/* <ProjectFeatures features={props.features} /> */}
      </div>
      {/* <div className={styles['project-tech']}>
        Technologies Used:
        <ul className={styles['project-tech-list']}>
          {props.badges.map((badge) => (
            <li className={styles['tech-box-test']} key={badge.toString()}>
              <img src={badge}></img>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  )
}

export default Project;