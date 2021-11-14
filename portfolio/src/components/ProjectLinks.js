import styles from './ProjectLinks.module.css';

const ProjectLinks = (props) => {
  return (
    <div className={styles['project-links']}>
      <h4>Links</h4>
      {props.live_url ? 
        <a href={props.live_url} className={styles['live-link']}>Live Site</a>
        : null
      }
      <a href={props.repo_url} className={styles['repo-link']}>Github Repo</a>
    </div>
  )
}

export default ProjectLinks;