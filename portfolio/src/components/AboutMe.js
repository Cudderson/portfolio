// This is the high-level component that will contain the About Me section of the page

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    // learn more about fragments '<></>' and consider if they'd be better than another wrapper div 
    <div className={styles['about-me-container']}>
      <h2>About Me</h2>
      <p>
        Since taking my first programming class in high school,
        my love and passion for technology has only grown.
      </p>
      <p>
        Not too long after high school, I discovered a website, CodeWars, where users solve coding problems 
        and 'climb the leaderboard' by gaining 'XP' through solving varied-difficulty questions. 
      </p>
      <p>
        I quickly became addicted to seeing my rising rank after finding a solution, and soon enough I 
        was visiting codewars.com on a daily-basis. I loved the gamified nature of it all.
      </p>
      <p>
        My growing interest in programming eventually led to the purchase of several books related to Python and Javascript, watching/reading
        tutorials, and creating projects of my own. 
      </p>
      <p>
        Wanting to translate my passion into a professional career, I enrolled in and completed multiple 
        computer science and programming courses online, one being Harvard's CS50 (link to cert?) 
      </p>
      <p>
        Using daily learning, building, and curiosity, I've dedicated much of the 
        last ~2 years of my life to improving my competency as a developer.
      </p>
      <p>
        <br/>
        When I'm not at my computer, I like to play guitar, read, write, go for a bike ride, play baseball and play disc golf. 
      </p>
    </div>
  )
}

export default AboutMe;