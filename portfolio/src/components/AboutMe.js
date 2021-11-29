// This is the high-level component that will contain the About Me section of the page

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    // learn more about fragments '<></>' and consider if they'd be better than another wrapper div 
    <div className={styles['about-me-container']}>
      <h2>About Me</h2>
      <h3>
        I'm a self-taught developer with passion, persistence, and a positive attitude. 
      </h3>
      <p>
        I wrote my first line of code in high school,
        where I had the opportunity to take multiple introductory programming courses.
      </p>
      {/* something missing here */}
      <p>
        After learning the fundamentals, I discovered a website, CodeWars, where users solve coding problems 
        and increase their global ranking by finding a solution to varied-difficulty questions. 
      </p>
      <p>
        I quickly became addicted to seeing my rising rank after finding a solution, and soon enough I 
        was visiting codewars.com on a daily-basis. I loved the gamified nature of it all.
      </p>
      <p>
        My creative-temperment naturally pointed me to web development, and
        my growing interest in programming eventually led to the purchase of several
        books related to Javascript and Python. Between reading books, absorbing material online, and building
        projects of my own, nearly all of my free time was (and still is) spent improving my craft.  
      </p>
      {/* <- combine -> */}
      <p>
        Wanting to translate my passion into a professional career, I enrolled in and completed multiple 
        web development and programming courses online, one being
        <a href='https://cs50.harvard.edu/x/2021/' className={styles.harvard}>Harvard's CS50x</a>
        (<a href="#" className={styles.certificate}>certificate of completion (NO LINK YET)</a>)
      </p>
      {/* something missing here */}
      <p>
        Using daily learning, building, and curiosity, I've dedicated much of the 
        last ~2 years of my life to improving my competency as a developer.
      </p>
      <br />
      <p>
        {/* consider emojis here? */}
        When I'm not on my computer, I enjoy reading, writing, and playing guitar.
        In the short Wisconsin summertime, I love to play baseball, disc golf, and take long bike rides. 
      </p>
    </div>
  )
}

export default AboutMe;