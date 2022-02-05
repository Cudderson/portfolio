import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import ProjectsList from './ProjectsList';
import AboutMe from './AboutMe.js';
import ContactForm from './ContactForm.js';
import Footer from './Footer.js';

import styles from './App.module.css';

// fa library
import './../utilities/fa_library.js';

const App = () => {

  // refactoring portfolio sections and finish site

  // probably do this better in future (use/add class)
  document.querySelector('body').style.margin = 0;
  document.querySelector('html').style.margin = 0;
  document.querySelector('body').style.padding = 0;
  document.querySelector('html').style.padding = 0;

  return (
    <div>
      {/* header should cover 100% width, but inner container should be capped to 90% / 1200px (same as '.app-main') */}
      <Header />
      <main className={styles['app-main']}>
        <Hero />
        <Skills />
        <ProjectsList />
        <AboutMe />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App;