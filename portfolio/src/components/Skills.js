// the new portfolio will have a dedicated skills section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Skills.module.css';

// get django/plotly (change location)
// rest of icons imported into <App /> globally
import custom_icons from './../assets/badges/badges.js';

// somewhere, we need to combine all skills and get it here

console.log('defining skillsIcons...');
const skillsIcons = {
  skills: [
    {family: 'fab', icon: 'js', text: 'Javascript'},
    {family: 'fab', icon: 'html5', text: 'HTML5'},
    {family: 'fab', icon: 'css3-alt', text: 'CSS3'},
    {family: 'fab', icon: 'python', text: 'Python'},
    {family: null, icon: custom_icons.django, text: 'Django'},
    {family: 'fas', icon: 'database', text: 'SQL'},
    {family: 'fab', icon: 'node-js', text: 'Node'},
    {family: null, icon: custom_icons.plotly, text: 'Plotly'},
    {family: 'fab', icon: 'react', text: 'React'},
    // still need: webpack, mongodb, express ...
  ]
}

const Skills = () => {

  return (
    <div className={styles['skills-container']}>
      <h1>Skills</h1>
      <ul className={styles['skills-list']}>
        {skillsIcons ? (
          skillsIcons.skills.map((skill) => (
            skill.family !== null ? (
              <li>
                <span>
                  <FontAwesomeIcon icon={[skill.family, skill.icon]} />
                </span>
              </li>
            ) : (
              <li>
                <img src={skill.icon}></img>
              </li>
            )
          ))
        ) : console.log('no skillz.')}
      </ul>
      
      
      <div style={{paddingBottom: '200px', backgroundColor: 'teal'}}></div>
    </div>
  )
}

export default Skills;