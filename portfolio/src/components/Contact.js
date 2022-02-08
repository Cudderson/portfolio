import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    // image images on either side of this container
    <div className={styles['contact-form-container']}>
      {/* <div className={styles['contact-image-container']}>
        <img src="https://avatars.githubusercontent.com/u/74884805?v=4" alt="my_avatar"></img>
      </div> */}
      <p>
        Contact Me
        {/* Let's get in touch! */}
      </p>
      <div className={styles['contact-form']}>
        <a href="https://github.com/Cudderson">
          <FontAwesomeIcon icon={['fab', 'github']} />
          Github
        </a>
        <a href="mailto:codered1227@gmail.com">
          <FontAwesomeIcon icon={['fas', 'envelope']} />
          Email
        </a>
        <a href="https://www.linkedin.com/in/cody-weller-a5ba80222">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;