import Project from './Project';
import styles from './ProjectsList.module.css';

// get django/plotly (change location)
// rest of icons imported into <App /> globally
import custom_icons from './../assets/badges/badges.js';

import slider_images from './../assets/images/slider_images.js';
import { project_features } from '../utilities/project_features_util.js';

// for all-work
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsList = () => {

  return (
    <div className={styles['projects-list-outer']}>
      <h2 className={styles.featured}>Featured Projects</h2>
      <h3 className={styles['sub-header']}>All projects built entirely by me!</h3>
      <div className={styles['projects-list-inner']}>
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
        {/* prevents collapsing margins */}
        <br/>
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
        <br/>
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
        <br/>
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
      <div className={styles['all-work']}>
          <strong>Check out my Github profile to view all of my projects, including what I'm working on now:</strong>
          <button>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <a href="https://github.com/Cudderson">
              View Profile
            </a>
          </button>
      </div>
    </div>
  )
}

export default ProjectsList;