import Project from './Project';
import styles from './ProjectsList.module.css';

// get django/plotly (change location)
// rest of icons imported into <App /> globally
import custom_icons from './../assets/badges/badges.js';

import slider_images from './../assets/images/slider_images.js';
import { project_features } from '../utilities/project_features_util.js';

// for <h3> header
import ProjectTechIcon from './ProjectTechIcon.js';

// for all-work
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsList = () => {

  // REMOVE FEATURES FROM PROJECTS

  return (
    <div className={styles['projects-list-outer']}>
      <div className={styles['projects-list-header']}>
        <h2>Featured Projects</h2>
        <div className={styles['separator']}></div>
      </div>
      <div className={styles['projects-list-sub-header']}>
        <p>All projects built solely by me using</p>
        <ProjectTechIcon family='fab' icon='git-alt' text='Git' />
      </div>
      <div className={styles['projects-list-inner']}>
        <Project
          name="Natural Selection Simulator"
          description={`
            A customizable implementation of a genetic algorithm that runs in the browser.
            Configure your own species of organisms and watch them traverse the user-drawn path 
            and attempt to reach the goal!
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
            Complete daily activities, add friends, write posts, and more!
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
            Charts, analysis, and news for Tesla Inc.
            Built with real-time data via the Finnhub Stock API.
          `}
          live_url="https://tesla-now.herokuapp.com"
          repo_url="https://github.com/Cudderson/tesla-now"
          features={project_features.tesla_now}
          // add react to icons!!!
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
          name="Portfolio"
          description={`
            My personal portfolio; the site you're currently browsing.
            Displays a short biography, featured programming projects, social links and contact info.
          `}
          live_url={null}
          repo_url="https://github.com/Cudderson/portfolio"
          features={project_features.nss}
          icons={
            [
              {family: 'fab', icon: 'react', text: 'React'},
              {family: 'fab', icon: 'js', text: 'Javascript'},
              {family: 'fab', icon: 'html5', text: 'HTML5'},
              {family: 'fab', icon: 'css3-alt', text: 'CSS3'}
            ]
          }
          images={slider_images.portfolio}
        />
        <br/>
        <Project
          name="password manager"
          description={`
            CLI tool to encrypt/decrypt and store personal passwords.
            Supports basic CRUD operations with a MySQL database.
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
      <hr />
      <div className={styles['all-work']}>
          <strong>View code and documentation for each project on Github, including what I'm working on now:</strong>
          <a href="https://github.com/Cudderson">
            <FontAwesomeIcon icon={['fab', 'github']} className={styles['all-work-icon']} />
            View Profile
          </a>
      </div>
    </div>
  )
}

export default ProjectsList;