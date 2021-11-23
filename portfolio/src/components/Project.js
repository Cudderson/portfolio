import styles from './Project.module.css';

// sub-components
// import ProjectFeatures from './ProjectFeatures.js'; // keep until <Project /> final
import ImageSlider from './ImageSlider.js';
import ProjectTech from './ProjectTech.js';

import ProjectLinks from './ProjectLinks.js';
import { useEffect, useRef } from 'react';

const Project = (props) => {

  // testing scroll animations with test useRef and dummy state
  const test_ref = useRef(null);

  // this should only appear on initial project renders (4 times)
  console.log('rerendered!')

  // add highlight class when element comes into view
  // we are creating eventListeners on the initial render in useEffect()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // proper way to add class with current method
          entry.target.classList.add(styles.highlight);

          // we don't need to rerender the component, as we're just adding a class
          console.log("class added");
        }
        else {
          // remove class when element leaves visibility (make sure you want this)
          entry.target.classList.remove(styles.highlight);
          console.log("class removed");
        }
      })
    });
  
    // 'current' refers to the mounted <h2> element
    if (test_ref.current) {
      observer.observe(test_ref.current);
    }
  }, [test_ref.current]);  // depedency array could be empty, but populating for now

  return (
    // consider using element selectors in css rather than many classes
    // consider extracting smaller components (getting deep)
    // ** be aware of extra wrapper divs **

    <div className={styles.project}>
      <div className={styles['project-image-container']}>
        <ImageSlider images={props.images} />
      </div>
      <div className={styles['project-text']}>
        <h2 className={styles['project-title']} ref={test_ref}>
          {props.name}
        </h2>
        <p className={styles['project-description']}>
          {props.description}
        </p>

        {/* this will be the link section */}
        <ProjectLinks live_url={props.live_url} repo_url={props.repo_url} />

        {/* this will be the "Made With" section */}
        {/* maybe make this entire div part of ProjectTech? */}
        <div>
          <h4 style={{margin: '1.75rem 0 .5rem', fontFamily: 'Verdana', fontSize: "13px"}}>Made With</h4>
          <ProjectTech icons={props.icons} />
        </div>
      </div>
    </div>
  )
}

export default Project;