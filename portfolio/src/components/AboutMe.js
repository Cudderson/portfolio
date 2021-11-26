// This is the high-level component that will contain the About Me section of the page

import styles from './AboutMe.module.css';

const AboutMe = () => {
  return (
    // learn more about fragments '<></>' and consider if they'd be better than another wrapper div 
    <div className={styles['about-me-container']}>
      <h2>About Me</h2>
      <p style={{fontWeight: 700, padding: '.5rem 0 1rem'}}>
        I'm a self-taught developer with passion, persistance, and a positive attitude. 
      </p>
      <p>
        I wrote my first line of code in high school,
        where I had the opportunity to take multiple introductory programming courses.
      </p>
      {/* something missing here */}
      <p>
        After learning the fundamentals, I discovered a website, CodeWars, where users solve coding problems 
        and increase their global ranking by solving varied-difficulty questions. 
      </p>
      <p>
        I quickly became addicted to seeing my rising rank after finding a solution, and soon enough I 
        was visiting codewars.com on a daily-basis. I loved the gamified nature of it all.
      </p>
      <p>
        My creative-temperment naturally pointed me to web-development, and
        my growing interest in programming eventually led to the purchase of several
        books related to Javascript and Python. Between reading books, absorbing material online, and building
        projects of my own, nearly all of my free time was (and still is) spent improving my craft.  
      </p>
      {/* <- combine -> */}
      <p>
        Wanting to translate my passion into a professional career, I enrolled in and completed multiple 
        web development and programming courses online, one being Harvard's CS50 (link to cert?) 
      </p>
      {/* something missing here */}
      <p>
        Using daily learning, building, and curiosity, I've dedicated much of the 
        last ~2 years of my life to improving my competency as a developer.
      </p>
      <p>
        <br/>
        {/* consider emojis here? */}
        When I'm not at my computer, I enjoy reading, writing, and playing guitar.
        In the short Wisconsin summertime, I love to play baseball, disc golf, and take long bike rides. 
      </p>
    </div>
  )
}

export default AboutMe;