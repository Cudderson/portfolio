import styles from "./Project.module.css";

// sub-components
// import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
import ImageSlider from "./ImageSlider.js";
import ProjectTech from "./ProjectTech.js";

import ProjectLinks from "./ProjectLinks.js";
import { useEffect, useRef } from "react";

const Project = (props) => {
  const image_ref = useRef(null);
  const text_ref = useRef(null);

  // options for IntersectionObserver
  // omitted values are default
  let options = {
    // root: null,
    // rootMargin: '0px',
    threshold: 0.6,
  };

  // intersection observer for project.image-container
  useEffect(() => {
    const image_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(styles["slidein-image"])
        ) {
          entry.target.classList.add(styles["slidein-image"]);
        }
      });
    }, options);

    if (image_ref.current) {
      image_observer.observe(image_ref.current);
    }
  });

  // intersection observer for project.text
  useEffect(() => {
    const text_observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains(styles["slidein-text"])
        ) {
          entry.target.classList.add(styles["slidein-text"]);
        }
      });
    }, options);

    // 'current' refers to the mounted div element
    if (text_ref.current) {
      text_observer.observe(text_ref.current);
    }
  });

  return (
    <div className={styles.project}>
      <div className={styles["project-image-container"]} ref={image_ref}>
        <ImageSlider images={props.images} />
      </div>
      <div className={styles["project-text"]} ref={text_ref}>
        {props.name.length < 20 ? (
          <h2 className={styles["project-title"]}>{props.name}</h2>
        ) : (
          <h2 className={styles["project-title-long"]}>{props.name}</h2>
        )}
        <p className={styles["project-description"]}>{props.description}</p>
        <ProjectLinks live_url={props.live_url} repo_url={props.repo_url} />
        <div>
          <h4 className={styles["made-with"]}>Made With</h4>
          <ProjectTech icons={props.icons} />
        </div>
      </div>
    </div>
  );
};

export default Project;
