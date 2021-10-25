import { useState, useEffect } from 'react';
import styles from './Projects.module.css';

const Projects = () => {

  const [api_data, updateApiData] = useState([]);

  const getRepos = async () => {
    const response = await fetch('https://api.github.com/users/cudderson/repos');
    const json_obj = await response.json();
    console.log(json_obj);

    let repos = [];

    json_obj.forEach(repo => {
      repos.push(repo.name);
    });

    updateApiData(repos);
  }

  useEffect(() => {
    getRepos();
  }, []);

  return (
    <div className={styles.projects}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      {/* need keys for the below elements */}
      {api_data.map(repo => (
        <h6>{repo}</h6>
      ))}
      <div className={styles['projects-inner']}>
        {/* projects will eventually be here */}
      </div>
    </div>
    
  )
}

export default Projects;