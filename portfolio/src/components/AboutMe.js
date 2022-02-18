import styles from './AboutMe.module.css';

const AboutMe = ({ avatar }) => {
  return (
    <div className={styles['about-container']}>
      <div className={styles['about-avatar']}>
        <img src={avatar} alt=''></img>
      </div>
      <div className={styles['about-content']}>
        <p>
          Using daily learning, building, and curiosity, I've dedicated much of the 
          last ~2 years of my life to improving my competency as a developer.
        </p>
        <p>
           With the desire to translate my passion into a professional career, I enrolled in and completed multiple 
           web development and programming courses online, such as The Odin Project and Harvard's CS50x. 
        </p>
        <p>
          When I'm not on my computer, I enjoy reading, writing, and playing guitar.
          In the summertime, I love playing baseball, disc golf, and taking long bike rides.
        </p>
      </div>
    </div>
  )
}

export default AboutMe;