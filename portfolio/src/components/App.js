import Header from './Header';
import Hero from './Hero';
import ProjectsList from './ProjectsList';
import Footer from './Footer.js';

import styles from './App.module.css';

// testing
import ProjectTechIcon from './ProjectTechIcon';

const App = () => {

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
        <ProjectsList />
      </main>

      {/* testing */}
      <ProjectTechIcon />
      
      <Footer />
    </div>
  )
}

export default App;