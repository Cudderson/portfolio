import styles from './Project.module.css';

// sub-components
import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
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

        {/* this will be the link section */}
        <div>
          <h4 style={{marginBottom: '.25rem'}}>Links</h4>
          <a href="##" style={{textDecoration: 0, fontSize: '18px'}}>Live Site</a>
          <a href="##" style={{textDecoration: 0, fontSize: '18px', marginLeft: '20px'}}>Github Repo</a>
        </div>

        {/* this will be the "Made With" section */}
        <div>
          <h4 style={{marginBottom: '.25rem'}}>Made With</h4>

          {/* going to put a modified version of project-tech here for now until fa-icons */}
          <div className={styles['project-tech']}>
            <ul className={styles['project-tech-list']}>
              {props.badges.map((badge) => (
                <li className={styles['tech-box-test']} key={badge.toString()}>
                  <img src={badge}></img>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* keep this component around until Project component final */}
        {/* <ProjectFeatures features={props.features} /> */}
      </div>
      {/* keeping this original sub-component in-tact until Project component final */}
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