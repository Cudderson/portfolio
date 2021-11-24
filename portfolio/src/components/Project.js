import styles from './Project.module.css';

// sub-components
// import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
import ImageSlider from './ImageSlider.js';
import ProjectTech from './ProjectTech.js';

import ProjectLinks from './ProjectLinks.js';
import { useEffect, useRef } from 'react';

const Project = (props) => {
  const image_ref = useRef(null);
  const text_ref = useRef(null);

  // this should only appear on initial project renders (4 times)
  console.log('rerendered!')

  // we are creating eventListeners on the initial render in useEffect()

  // options for IntersectionObserver
  // omitted values are default
  let options = {
    // root: null,
    // rootMargin: '0px',
    threshold: 0.5
  }
  // consider extracting this code into their own hooks if possible
  
  // intersection observer for project.image-container
  useEffect(() => {
    const image_observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles['slidein-image'])
        }
      });
    }, options);

    if (image_ref.current) {
      image_observer.observe(image_ref.current);
    }
  }, [image_ref.current]);

  // intersection observer for project.text
  useEffect(() => {
    const text_observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // proper way to add class with current method
          entry.target.classList.add(styles['slidein-text']);

          // we don't need to rerender the component, as we're just adding a class
          console.log("class added");
        }
        // else {
        //   // remove class when element leaves visibility (make sure you want this)
        //   entry.target.classList.remove(styles.fadein);
        //   console.log("class removed");
        // }
      })
    }, options);
  
    // 'current' refers to the mounted <h2> element
    if (text_ref.current) {
      text_observer.observe(text_ref.current);
    }
  }, [text_ref.current]);  // depedency array could be empty, but populating for now

  return (
    // consider using element selectors in css rather than many classes
    // consider extracting smaller components (getting deep)
    // ** be aware of extra wrapper divs **

    <div className={styles.project}>
      <div className={styles['project-image-container']} ref={image_ref}>
        <ImageSlider images={props.images} />
      </div>
      <div className={styles['project-text']} ref={text_ref}>
        <h2 className={styles['project-title']}>
          {props.name}
        </h2>
        <p className={styles['project-description']}>
          {props.description}
        </p>
        <ProjectLinks live_url={props.live_url} repo_url={props.repo_url} />
        <div>
          <h4 style={{margin: '1.75rem 0 .5rem', fontFamily: 'Verdana', fontSize: "13px"}}>Made With</h4>
          <ProjectTech icons={props.icons} />
        </div>
      </div>
    </div>
  )
}

export default Project;