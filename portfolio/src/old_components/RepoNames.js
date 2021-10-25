// **** keeping for reference ****

// import { useState, useEffect } from 'react';
// import styles from './Projects.module.css';

// const Projects = () => {

//   const [api_data, updateApiData] = useState(null);

//   // this function retrieves all of my github repo names and stores them in state
//   const getGithubRepos = async () => {
//     const response = await fetch('https://api.github.com/users/cudderson/repos');
//     const json_obj = await response.json();
//     console.log(json_obj);

//     let repos = [];

//     json_obj.forEach(repo => {
//       repos.push(repo.name);
//     });

//     updateApiData(repos);
//   }

//   useEffect(() => {
//     getGithubRepos();
//   }, []);

//   return (
//     <div className={styles.projects}>
//       <h2>Featured Projects</h2>
//       <h3>All projects built entirely by me!</h3>
//       {/* keys for mapped values are required to keep track of what's changed */}
//       {api_data !== null ? api_data.map(repo => (
//         <h6 key={repo.toString()}>{repo}</h6>
//       )) : "No repos"}
//       <div className={styles['projects-inner']}>
//         {/* projects will eventually be here */}
//       </div>
//     </div>
    
//   )
// }

// export default Projects;