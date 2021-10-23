import styles from './Projects.module.css';

const Projects = () => {
  const getItems = () => {
    const items = []
    for (let i = 1; i < 5; i++) {
      items.push(<div className={styles.item}>Project {i}</div>)
    }
    return items;
  }

  return (
    <div className={styles.projects}>
      {getItems()}
    </div>
  )
}

export default Projects;