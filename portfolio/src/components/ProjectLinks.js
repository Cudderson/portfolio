import styles from "./ProjectLinks.module.css";

const ProjectLinks = (props) => {
  return (
    <div className={styles["project-links"]}>
      <span>Links</span>
      {props.live_url ? (
        <a
          href={props.live_url}
          className={styles["live-link"]}
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </a>
      ) : null}
      <a
        href={props.repo_url}
        className={styles["repo-link"]}
        target="_blank"
        rel="noreferrer"
      >
        View Code
      </a>
    </div>
  );
};

export default ProjectLinks;
