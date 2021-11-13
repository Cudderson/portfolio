// import component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './ProjectTechIcon.module.css';

const ProjectTechIcon = (props) => {
  console.log(props);

  return (
    <div className={styles['project-tech-icon']}>
      {/* conditional for custom icons */}
      {props.family !== null ? 
        <FontAwesomeIcon icon={[props.family, props.icon]} /> :
        <img src={props.icon} style={{width: '20px', height: '20px'}}></img>
      }
      <span>{props.text}</span>
    </div>
  )
}

export default ProjectTechIcon;