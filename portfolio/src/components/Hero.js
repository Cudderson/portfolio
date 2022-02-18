import styles from "./Hero.module.css";
import { useEffect } from "react";

// recreate hero section
const Hero = ({ avatar }) => {
  useEffect(() => {
    document
      .getElementsByClassName(styles["hero-container"])[0]
      .classList.add(styles["fade-in"]);
  }, []);

  return (
    <div className={styles["hero-container"]}>
      <div className={styles["avatar-container"]}>
        {avatar ? (
          <img src={avatar} alt="hand-drawn avatar"></img>
        ) : (
          <div className={styles["filler-div"]}></div>
        )}
      </div>
      <div className={styles["hero-content"]}>
        <p>Hello, my name is Cody</p>
        <p>I'm a full-stack developer with a passion for the modern web.</p>
        <p>
          Deeply committed to life-long learning, I dedicate much of my free
          time to improving my competency as a developer.
        </p>
      </div>
    </div>
  );
};

export default Hero;
