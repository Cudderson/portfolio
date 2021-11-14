import styles from './Project.module.css';

// sub-components
// import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
import ImageSlider from './ImageSlider.js';

// tesing fa icons (this will be extracted to sub component)
import ProjectTech from './ProjectTech.js';
// import ProjectTechIcon from './ProjectTechIcon.js';

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
          <ProjectTech icons={props.icons} />
        </div>
      </div>
    </div>
  )
}

export default Project;