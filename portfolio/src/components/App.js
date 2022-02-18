import Header from "./Header";
import Hero from "./Hero";
import Skills from "./Skills";
import ProjectsList from "./ProjectsList";
import AboutMe from "./AboutMe.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

import styles from "./App.module.css";

import avatar from './../assets/images/avatar.jpg';

import "./../utilities/fa_library.js";

import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
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
