import styles from './ProjectLinks.module.css';

const ProjectLinks = (props) => {
  return (
    <div className={styles['project-links']}>
      <h4>Links</h4>
      {props.live_url ?
        <button className={styles['link-btn']}>
          <a href={props.live_url} className={styles['live-link']}>View Live</a>
        </button> 
        : null
      }
      <button className={styles['link-btn']}>
        <a href={props.repo_url} className={styles['repo-link']}>View Code</a>      
      </button>

    </div>
  )
}

export default ProjectLinks;