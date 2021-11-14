import styles from './Project.module.css';

// sub-components
// import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
import ImageSlider from './ImageSlider.js';

// tesing fa icons (this will be extracted to sub component)
import ProjectTech from './ProjectTech.js';
// import ProjectTechIcon from './ProjectTechIcon.js';

import ProjectLinks from './ProjectLinks.js';

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
        <ProjectLinks live_url={props.live_url} repo_url={props.repo_url} />

        {/* this will be the "Made With" section */}
        {/* maybe make this entire div part of ProjectTech? */}
        <div>
          <h4 style={{marginBottom: '.25rem'}}>Made With</h4>
          <ProjectTech icons={props.icons} />
        </div>
      </div>
    </div>
  )
}

export default Project;