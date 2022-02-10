// the new portfolio will have a dedicated skills section
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Skills.module.css';

// get django/plotly (change location)
// rest of icons imported into <App /> globally
import custom_icons from './../assets/badges/badges.js';

// somewhere, we need to combine all skills and get it here

console.log('defining skillsIcons...');
const skillsIcons = {
  row1: [
    {family: 'fab', icon: 'js', text: 'Javascript'},
    {family: 'fab', icon: 'python', text: 'Python'},
    {family: 'fab', icon: 'html5', text: 'HTML5'},
    {family: 'fab', icon: 'css3-alt', text: 'CSS3'},
    {family: 'fab', icon: 'react', text: 'React'},
  ],
  row2: [
    {family: null, icon: custom_icons.django, text: 'Django'},
    {family: 'fas', icon: 'database', text: 'SQL'},
    {family: 'fab', icon: 'node-js', text: 'Node'},
    {family: 'fab', icon: 'git-alt', text: 'Git'},
    {family: 'fab', icon: 'github', text: 'Github'},
    {family: null, icon: custom_icons.plotly, text: 'Plotly'},
  ]
}

const Skills = () => {

  return (
    <div className={styles['skills-outer']}>
      <div className={styles['skills-header']}>
        <h2>Skills</h2>
        <div className={styles['separator']}></div>
      </div>

      {/* <span className={styles['skills-description']}>
        Languages, technologies and tools that I'm most familiar with
      </span> */}
      <div className={styles['skills-inner']}>
        <ul className={styles['skills-list']}>
          {skillsIcons ? (
            skillsIcons.row1.map((skill) => (
              skill.family !== null ? (
                <li key={skill.text.toString()}>
                  <span>
                    <FontAwesomeIcon icon={[skill.family, skill.icon]} />
                    <span className={styles['skill-text']}>{skill.text}</span>
                  </span>
                </li>
              ) : (
                <li>
                  <img src={skill.icon} alt=""></img>
                  <span className={styles['skill-text']}>{skill.text}</span>
                </li>
              )
            ))
          ) : console.log('no skillz.')}
        </ul>
        <ul className={styles['skills-list']}>
          {skillsIcons ? (
            skillsIcons.row2.map((skill) => (
              skill.family !== null ? (
                <li key={skill.text.toString()}>
                  <span>
                    <FontAwesomeIcon icon={[skill.family, skill.icon]} fill="#334455" />
                    <span className={styles['skill-text']}>{skill.text}</span>
                  </span>
                </li>
              ) : (
                <li key={skill.text.toString()}>
                  <img src={skill.icon} alt=""></img>
                  <span className={styles['skill-text']}>{skill.text}</span>
                </li>
              )
            ))
          ) : console.log('no skillz.')}
        </ul>
      </div>
      
      
      <div style={{paddingBottom: '150px', backgroundColor: 'white'}}></div>
    </div>
  )
}

export default Skills;