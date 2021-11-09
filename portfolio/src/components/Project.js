import styles from './Project.module.css';
import ImageSlider from './ImageSlider';

const Project = (props) => {

  return (
    // consider using element selectors in css rather than many classes
    // consider extracting smaller components (getting deep)
    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        {/* remember to use styles.project-image */}
        <ImageSlider images={props.images} />
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']}>
          {props.name}
        </h2>
        <p className={styles['project-description']}>
          {props.description}
        </p>
        <ul>
          {props.features.map((feature) => (
            <li key={feature.substring(0, 20).toString()}>
              {feature}
            </li>
          ))}
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