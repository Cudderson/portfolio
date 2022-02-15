import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import ProjectsList from "./ProjectsList";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

import styles from "./App.module.css";

//  this may need a state variable for prod
import avatar from './../assets/images/avatar.jpg';

// fa library
import "./../utilities/fa_library.js";

import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      {/* header should cover 100% width, but inner container should be capped to 90% / 1200px (same as '.app-main') */}
      <Header theme={theme} setTheme={setTheme} avatar={avatar} />
      <main className={styles["app-main"]}>
        <Hero avatar={avatar} />
        <Skills />
        <ProjectsList />
        <hr />
        <AboutMe avatar={avatar} />
        <hr />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
