import { useState, useEffect } from 'react';

import Project from './Project';
import styles from './ProjectsList.module.css';
import badges from './../assets/badges/badges.js';

// currently unused svgs:
// git, github, linkedin, react, node

import slider_images from './../assets/images/slider_images.js';

const ProjectsList = () => {

  return (
    <div className={styles['projects-list']}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div style={{height: '100px'}}>(delete later)</div>
      <div>
        {/* the 'symbol' prop will be replaced with proper images in future */}
        <Project 
          name="kokoro"
          description={`
            Personal wellness app and social space focused on balancing the mind, body and soul.
          `}
          badges={[
            badges.django_square_1,
            badges.python,
            badges.js,
            badges.html5,
            badges.css3,
            badges.sql
          ]}
          images={slider_images.kokoro}
        />
        {/* uncomment when images added */}
        {/* <Project
          name="Natural Selection Simulator"
          description={`
            A customizable implementation of a genetic algorithm based on natural selection.
          `}
          symbol="NSS"
          badges={[
            badges.js,
            badges.html5,
            badges.css3
          ]}
        />
        <Project
          name="Tesla Now"
          description={`
            Real-time analysis, charts and news for Tesla Inc.
          `}
          symbol="TN"
          badges={[
            badges.django_square_1,
            badges.plotly,
            // actually, isn't bootstrap removed? (can keep to show you can understand it)
            badges.bootstrap,
            badges.html5,
            badges.css3
          ]}
        />
        <Project
          name="password manager"
          description={`
            CLI tool to encrypt/decrypt and store personal passwords. 
          `}
          symbol="pm"
          badges={[
            badges.python,
            badges.sql
          ]}
        /> */}
      </div>
      <div style={{height: '100px'}}>(delete later)</div>
    </div>
  )
}

export default ProjectsList;