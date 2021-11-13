// for now, i'll import the icons directly here.
// when working, I'll pass as props from a higher component

// import component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'; 

import styles from './ProjectTechIcon.module.css';

const ProjectTechIcon = (props) => {
  console.log(props);

  return (
    <div className={styles['project-tech-icon']}>
      {/* <FontAwesomeIcon icon={['fab', 'js']} /> */}
      <FontAwesomeIcon icon={[props.family, props.icon]} />
      <span>{props.text}</span>
    </div>
  )
}

export default ProjectTechIcon;