// This is the high-level component that will contain the About Me section of the page

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    // learn more about fragments '<></>' and consider if they'd be better than another wrapper div 
    <div className={styles['about-me-container']}>
      <h2>About Me</h2>
      <p>
        could mention:
        guitar,
        biking,
        discing,
        tech background,
        reading, 
        writing,
        goals,
        etc
      </p>
      <p>paragraph 1: tech-related</p>
      <p>paragraph 2: non-tech related</p>
      <p> ideas: </p>
      <p>maybe also include some photos? (lakemen, discing, biking, etc)</p>
      <p>mention core values / personality traits</p>
      <p>"daily improvement in my competency as a programmer/developer/engineer"</p>

    </div>
  )
}

export default AboutMe;