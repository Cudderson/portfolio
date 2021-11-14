import ProjectTechIcon from './ProjectTechIcon.js';
import styles from './ProjectTech.module.css';

const ProjectTech = (props) => {
  return (
    <div>
      <ul className={styles['project-tech-list']}>
        {props.icons.map((icon) => (
          <li key={icon.icon.toString()}>
            <ProjectTechIcon family={icon.family} icon={icon.icon} text={icon.text} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectTech;