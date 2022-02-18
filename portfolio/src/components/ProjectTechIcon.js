import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProjectTechIcon.module.css";

const ProjectTechIcon = (props) => {
  return (
    <div className={styles["project-tech-icon"]}>
      {props.family !== null ? (
        <FontAwesomeIcon icon={[props.family, props.icon]} />
      ) : (
        <img src={props.icon} alt=""></img>
      )}
      <span>{props.text}</span>
    </div>
  );
};

export default ProjectTechIcon;
