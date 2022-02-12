import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import ProjectsList from './ProjectsList';
import AboutMe from './AboutMe.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

import styles from './App.module.css';

// fa library
import './../utilities/fa_library.js';

import { useState } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const switchTheme = function() {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme('light');
    }
    else {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }
  }

  return (
    <div>
      {/* header should cover 100% width, but inner container should be capped to 90% / 1200px (same as '.app-main') */}
      <Header />
      <main className={styles['app-main']}>
        <div className={styles['blah']}>
          <button onClick={switchTheme}>SWITCH COLOR THEME</button>
        </div>
        <Hero />
        <Skills />
        <ProjectsList />
        <hr />
        <AboutMe />
        <hr />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;