// This is the high-level component that will contain the About Me section of the page

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    // learn more about fragments '<></>' and consider if they'd be better than another wrapper div 
    <div className={styles['about-me-container']}>
      About Me
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
    </div>
  )
}

export default AboutMe;