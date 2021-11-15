import Project from './Project';
import styles from './ProjectsList.module.css';

// get django/plotly (change location)
// rest of icons imported into <App /> globally
import custom_icons from './../assets/badges/badges.js';

import slider_images from './../assets/images/slider_images.js';
import { project_features } from '../utilities/project_features_util.js';

const ProjectsList = () => {

  return (
    <div className={styles['projects-list']}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div>
        <Project 
          name="kokoro"
          description={`
            Personal wellness app and social space focused on balancing the mind, body and soul.
          `}
          live_url="https://getkokoro.herokuapp.com"
          repo_url="https://github.com/Cudderson/kokoro-app"
          features={project_features.kokoro}
          icons={
            [
              {family: null, icon: custom_icons.django, text: 'Django'},
              {family: 'fab', icon: 'python', text: 'Python'},
              {family: 'fab', icon: 'js', text: 'Javascript'},
              {family: 'fab', icon: 'html5', text: 'HTML5'},
              {family: 'fab', icon: 'css3-alt', text: 'CSS3'},
              {family: 'fas', icon: 'database', text: 'SQL'}
            ]
          }
          images={slider_images.kokoro}
        />
        <Project
          name="Natural Selection Simulator"
          description={`
            A customizable implementation of a genetic algorithm based on natural selection.
          `}
          live_url={null}
          repo_url="https://github.com/Cudderson/natural-selection"
          features={project_features.nss}
          icons={
            [
              {family: 'fab', icon: 'js', text: 'Javascript'},
              {family: 'fab', icon: 'html5', text: 'HTML5'},
              {family: 'fab', icon: 'css3-alt', text: 'CSS3'},
              {family: 'fab', icon: 'node-js', text: 'Node'}
            ]
          }
          images={slider_images.nss}
        />
        <Project
          name="Tesla Now"
          description={`
            Analysis tool and central location for Tesla Inc
          `}
          live_url="https://tesla-now.herokuapp.com"
          repo_url="https://github.com/Cudderson/tesla-now"
          features={project_features.tesla_now}
          icons={
            [
              {family: null, icon: custom_icons.django, text: 'Django'},
              {family: null, icon: custom_icons.plotly, text: 'Plotly'},
              {family: 'fab', icon: 'html5', text: 'HTML5'},
              {family: 'fab', icon: 'css3-alt', text: 'CSS3'},
              {family: 'fab', icon: 'bootstrap', text: 'Bootstrap'}
            ]
          }
          images={slider_images.tesla_now}
        />
        <Project
          name="password manager"
          description={`
            CLI tool to encrypt/decrypt and store personal passwords. 
          `}
          live_url={null}
          repo_url="https://github.com/Cudderson/password-manager"
          features={project_features.password_manager}
          icons={
            [
              {family: 'fab', icon: 'python', text: 'Python'},
              {family: 'fas', icon: 'database', text: 'SQL'}
            ]
          }
          images={slider_images.password_manager}
        />
      </div>
    </div>
  )
}

export default ProjectsList;