import { useState, useEffect } from 'react';

import Project from './Project';
import styles from './ProjectsList.module.css';
import badges from './../assets/badges/badges.js';

// currently unused svgs:
// git, github, linkedin, react, node

import slider_images from './../assets/images/slider_images.js';
import { project_features } from '../utilities/project_features_util.js';

const ProjectsList = () => {

  return (
    <div className={styles['projects-list']}>
      <h2>Featured Projects</h2>
      <h3>All projects built entirely by me!</h3>
      <div style={{height: '100px'}}>(delete later)</div>
      <div>
        <Project 
          name="kokoro"
          description={`
            Personal wellness app and social space focused on balancing the mind, body and soul.
          `}
          features={project_features.kokoro}
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
        <Project
          name="Natural Selection Simulator"
          description={`
            A customizable implementation of a genetic algorithm based on natural selection.
          `}
          features={project_features.nss}
          badges={[
            badges.js,
            badges.html5,
            badges.css3
          ]}
          images={slider_images.nss}
        />
        <Project
          name="Tesla Now"
          description={`
            Analysis tool and central location for Tesla Inc
          `}
          features={project_features.tesla_now}
          badges={[
            badges.django_square_1,
            badges.plotly,
            // actually, isn't bootstrap removed? (can keep to show you can understand it)
            badges.bootstrap,
            badges.html5,
            badges.css3
          ]}
          images={slider_images.tesla_now}
        />
        <Project
          name="password manager"
          description={`
            CLI tool to encrypt/decrypt and store personal passwords. 
          `}
          features={project_features.password_manager}
          badges={[
            badges.python,
            badges.sql
          ]}
          images={slider_images.password_manager}
        />
      </div>
      <div style={{height: '100px'}}>(delete later)</div>
    </div>
  )
}

export default ProjectsList;